interface WordData {
  partOfSpeech: string; // enum
  word: string;
  definition: string;
  pronunciation: string;
  meaning: Map<string, string>;
  exampleSentences: string[];
  exampleSentencesTranslations: Map<string, string[]>;
  icon: string;
  images: string[];
  usageNotes: Map<string, string>;
  usageNotesEnglish: {
    synonyms: string[];
    antonyms: string[];
  };
}

interface Noun extends WordData {
  countable: boolean;
  irregularPlural: string;
}

interface Pronoun extends WordData {
  case: ['subject', 'object', 'possessive'];
  person: ['first', 'second', 'third'];
}

interface Adjective extends WordData {
  comparative: string[];
  superlative: string[];
}

interface Adverb extends WordData {
  comparative: string[];
  superlative: string[];
}

interface Verb extends WordData {
  baseForm: string;
  pastTense: string;
  pastParticiple: string;
  presentParticiple: string;
  thirdPersonSingular: string;
}

interface Preposition extends WordData {
  relatedPhrases: string[];
  usageExamples: string[];
}

interface Conjunction extends WordData {
  type: ['coordinating', 'subordinating', 'correlative'];
  usageExamples: string[];
}

interface Interjection extends WordData {
  expression: string;
  emotionalContext: string;
  usageExamples: string[];
}

interface Article extends WordData {
  type: ['definite', 'indefinite'];
  usageExamples: string[];
}

interface Determiner extends WordData {
  type: ['demonstrative', 'possessive', 'quantifier', 'article'];
  usageExamples: string[];
}

interface AuxiliaryVerb extends WordData {
  mainVerbExamples: string[];
  usageExamples: string[];
}

interface ModalVerb extends WordData {
  usage: string[];
  exampleSentences: string[];
}

export type {
  AuxiliaryVerb,
  Determiner,
  Article,
  Interjection,
  Conjunction,
  Preposition,
  Verb,
  Adverb,
  Adjective,
  Pronoun,
  Noun,
  WordData,
  ModalVerb,
};
