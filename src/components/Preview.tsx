import React from 'react';
import Flashcard from './Flashcard';
import Deck from './Deck';

interface PreviewProps {
  type: 'deck' | 'card';
  data: Deck | Flashcard;
  onSelect: () => void;
}

const Preview: React.FC<PreviewProps> = ({ type, data, onSelect }) => {
  if (type === 'deck') {
    const deckData = data as Deck;
    return (
      <div className="deck-preview" onClick={onSelect}>
        <h2>{deckData.deckName}</h2>
      </div>
    );
  } else if (type === 'card') {
    const cardData = data as Flashcard;
    return (
      <div className="card-preview" onClick={onSelect}>
        <h2>{cardData.word}</h2>
        <p>
          {Array.isArray(cardData.partOfSpeech)
            ? cardData.partOfSpeech.join(', ')
            : cardData.partOfSpeech}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default Preview;
