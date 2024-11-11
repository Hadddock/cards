import React from 'react';
import './../css/Flashcard.css';

interface Flashcard {
  word: string;
  partOfSpeech: string | string[];
  level?: string;
  definition?: string;
  pronunciation?: string;
  meaning?: { [key: string]: string };
  exampleSentences?: string[];
  exampleSentencesTranslations?: { [key: string]: string[] };
}

interface FlashcardProps {
  wordData: Flashcard;
}

const Flashcard: React.FC<FlashcardProps> = ({ wordData }) => {
  return (
    <div className="flashcard">
      {wordData.word && <h1 className="word">{wordData.word}</h1>}
      {wordData.partOfSpeech && (
        <p className="partOfSpeech">
          {Array.isArray(wordData.partOfSpeech)
            ? wordData.partOfSpeech.join(', ')
            : wordData.partOfSpeech}
        </p>
      )}

      {wordData.meaning?.['en'] && (
        <section className="meaning">
          <h2>Meaning</h2>
          <p>{wordData.meaning['en']}</p> {/* Defaulting to English meaning */}
        </section>
      )}

      {wordData.pronunciation && (
        <section className="pronunciation">
          <h2>Pronunciation</h2>
          <p>{wordData.pronunciation}</p>
        </section>
      )}

      {wordData.definition && (
        <section className="definition">
          <h2>Definition</h2>
          <p>{wordData.definition}</p>
        </section>
      )}

      {wordData.exampleSentences && wordData.exampleSentences?.length > 0 && (
        <section className="examples">
          <h2>Example Sentences</h2>
          <ul>
            {wordData.exampleSentences.map((example, index) => (
              <li key={index}>
                {example}
                <p className="translation">
                  {wordData.exampleSentencesTranslations?.['en']?.[index] || ''}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Flashcard;
