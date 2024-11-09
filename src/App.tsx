import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { WordData } from './wordDataDefinitions';
import Flashcard from './components/Flashcard';

const sampleWordData: WordData = {
  word: 'computer',
  partOfSpeech: 'noun (countable)',
  meaning: new Map([['en', "комп'ютер"]]),
  pronunciation: 'kəmˈpju·tə̬r',
  definition:
    'An electronic machine that can store and arrange large amounts of information.',
  exampleSentences: [
    'I use my computer to write emails.',
    'She has a new computer at home.',
    'There are lots of computers at the library.',
  ],
  exampleSentencesTranslations: new Map([
    [
      'en',
      [
        'Я використовую свій комп’ютер для написання електронних листів.',
        'У неї вдома новий комп’ютер.',
        'У бібліотеці багато комп’ютерів.',
      ],
    ],
  ]),
  icon: 'src/assets/icons/computer.svg',
  images: ['src/assets/images/computer.jpg', 'src/assets/images/computer2.jpg'],
  usageNotes: new Map(),
  usageNotesEnglish: {
    synonyms: ['PC', 'laptop'],
    antonyms: [],
  },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flashcard wordData={sampleWordData} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
