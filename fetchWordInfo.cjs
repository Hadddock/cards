const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');
const { config } = require('dotenv');

config();

const API_KEY = process.env.VITE_API_KEY;
const WORDS_FILE = path.join(__dirname, 'src', 'words.json');

const fetchWordInfo = async (word, partOfSpeech) => {
  const url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for word: ${word}`);
  }
  const data = await response.json();
  return data
    .filter((entry) => entry.fl === partOfSpeech)
    .map((entry) => ({
      headword: entry.hwi.hw,
      partOfSpeech: entry.fl,
      definitions: entry.shortdef,
      examples: entry.def.flatMap((d) =>
        d.sseq.flatMap((s) =>
          s[0][1].dt
            .filter((dt) => dt[0] === 'vis')
            .flatMap((dt) => dt[1].map((vis) => vis.t))
        )
      ),
      pronunciation: entry.hwi.prs.map((pr) => pr.ipa),
      audio: entry.hwi.prs.map((pr) => pr.sound.audio),
    }));
};

const posMapping = {
  auxiliary: 'auxiliary verb',
  noun: 'noun',
  verb: 'verb',
  adjective: 'adjective',
  adverb: 'adverb',
  modal: 'modal verb',
  // Add more mappings as needed
};

const main = async () => {
  const wordsData = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf-8'));
  const wordsToFetch = process.argv.slice(2);

  if (wordsToFetch.length === 0) {
    console.log('Please provide one or more words to fetch information for.');
    return;
  }

  for (const wordInput of wordsToFetch) {
    const [word, ...partsOfSpeech] = wordInput.replace(/['"]/g, '').split('_');
    const wordEntry = wordsData.find((entry) => entry.word === word);
    if (!wordEntry) {
      console.log(`Word not found in words.json: ${word}`);
      continue;
    }

    const posList =
      partsOfSpeech.length > 0
        ? partsOfSpeech.map((pos) => posMapping[pos] || pos.replace('-', ' '))
        : Array.isArray(wordEntry.partOfSpeech)
        ? wordEntry.partOfSpeech
        : [wordEntry.partOfSpeech];

    for (const pos of posList) {
      try {
        const wordInfo = await fetchWordInfo(word, pos);
        console.log(`Information for word: ${word} (${pos})`);
        console.log(JSON.stringify(wordInfo, null, 2));
      } catch (error) {
        console.error(
          `Error fetching information for word: ${word} (${pos})`,
          error
        );
      }
    }
  }
};

main();
