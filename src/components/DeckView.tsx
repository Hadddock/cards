import React from 'react';
import ICard from '../types/ICard';
import CardPreview from './CardPreview';

interface DeckViewProps {
  cards: ICard[];
}

const DeckView: React.FC<DeckViewProps> = ({ cards }) => {
  return (
    <div className="deck-view">
      {cards.map((card) => (
        <CardPreview key={card.title} card={card} /> // Ensure key prop is correctly set
      ))}
    </div>
  );
};

export default DeckView;
