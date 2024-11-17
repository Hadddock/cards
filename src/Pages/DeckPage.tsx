import React from 'react';
import DeckView from '../components/DeckView';

const cards = [
  { title: 'Card 1', content: 'Content of Card 1' },
  { title: 'Card 2', content: 'Content of Card 2' },
  { title: 'Card 3', content: 'Content of Card 3' },
];

const DeckPage: React.FC = () => {
  return (
    <div>
      <h1>Here's the DeckPage</h1>
      <DeckView cards={cards} />
    </div>
  );
};

export default DeckPage;
