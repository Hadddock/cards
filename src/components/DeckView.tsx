import React from 'react';
import Card from './Card';

interface DeckViewProps {
  cards: { title: string; content: React.ReactNode }[];
}

const DeckView: React.FC<DeckViewProps> = ({ cards }) => {
  return (
    <div className="deck-view">
      {cards.map((card, index) => (
        <Card key={index} title={card.title}>
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default DeckView;
