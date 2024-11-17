import React from 'react';
import DeckView from '../components/DeckView';
import NumberCard from '../components/NumberCard';
import Card from '../components/Card';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const cards = numbers.map((i) => ({
  title: `${i}`,
  content: (
    <Card title={`Card ${i}`} key={i}>
      <NumberCard number={i} frames={[]} />
    </Card>
  ),
}));

const DeckPage: React.FC = () => {
  return (
    <div>
      <h1>Here's the DeckPage</h1>
      <DeckView cards={cards} />
    </div>
  );
};

export default DeckPage;
