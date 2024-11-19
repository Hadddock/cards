import React from 'react';
import DeckView from '../components/DeckView';
import ICard from '../types/ICard';

interface DeckPageProps {
  name: string;
  description?: string;
  cards: ICard[];
}

const DeckPage: React.FC<DeckPageProps> = ({ name, description, cards }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <DeckView deckName={name} cards={cards} />
    </div>
  );
};

export default DeckPage;
