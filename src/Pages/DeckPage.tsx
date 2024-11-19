import React from 'react';
import DeckView from '../components/DeckView';
import ICard from '../types/ICard';

interface DeckPageProps {
  cards: ICard[];
}

const DeckPage: React.FC<DeckPageProps> = ({ cards }) => {
  return (
    <div>
      <h1>Here's the DeckPage</h1>
      <DeckView cards={cards} />
    </div>
  );
};

export default DeckPage;
