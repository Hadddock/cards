import React from 'react';
import { Link } from 'react-router-dom';
import ICard from '../types/ICard';
import CardPreview from './CardPreview';

interface DeckViewProps {
  deckName: string;
  cards: ICard[];
}

const DeckView: React.FC<DeckViewProps> = ({ deckName, cards }) => {
  return (
    <div className="deck-view">
      {cards.map((card, index) => (
        <Link key={card.title} to={`/deck/${deckName}/card/${card.title}`}>
          <CardPreview card={card} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default DeckView;
