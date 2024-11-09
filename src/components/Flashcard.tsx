import React from 'react';
import './../css/Flashcard.css';
import { WordData } from '../wordDataDefinitions';

// Adjusted FlashcardProps to accept only a single wordData prop
interface FlashcardProps {
  wordData: WordData;
}

const Flashcard: React.FC<FlashcardProps> = ({ wordData }) => {
  const {
    word,
    partOfSpeech,
    meaning,
    pronunciation,
    definition,
    exampleSentences,
    exampleSentencesTranslations,
  } = wordData;

  return (
    <div className="flashcard">
      {/* {icon && <img src={icon} alt={`${word} icon`} className="icon" />} */}
      <h1 className="word">{word}</h1>
      <p className="partOfSpeech">{partOfSpeech}</p>

      <section className="meaning">
        <h2>Meaning</h2>
        <p>{meaning.get('en') || ''}</p> {/* Defaulting to English meaning */}
      </section>

      <section className="pronunciation">
        <h2>Pronunciation</h2>
        <p>{pronunciation}</p>
      </section>

      <section className="definition">
        <h2>Definition</h2>
        <p>{definition}</p>
      </section>

      <section className="examples">
        <h2>Example Sentences</h2>
        <ul>
          {exampleSentences.map((example, index) => (
            <li key={index}>
              {example}
              <p className="translation">
                {exampleSentencesTranslations.get('en')?.[index] || ''}
              </p>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="images">
        <h2>Images</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${word} image ${index + 1}`}
              className="image"
            />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Flashcard;
