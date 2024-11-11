import React from 'react';
import './../css/Deck.css';
import Flashcard from './Flashcard';

interface DeckProps {
  deckName: string;
  children: React.ReactNode;
}

interface Deck {
  deckName: string;
  partOfSpeech?: string;
  level?: string;
  words?: Flashcard[];
}

const Deck: React.FC<DeckProps> = ({ deckName, children }) => {
  return (
    <div className="deck">
      <h2 className="deckName">{deckName}</h2>
      <div className="flashcards">{children}</div>
    </div>
  );
};

export default Deck;
