import React from 'react';
import { useParams } from 'react-router-dom';
import ICard from '../types/ICard';
import Card from '../components/Card';

interface CardPageProps {
  cards: ICard[];
  index?: number;
}

const CardPage: React.FC<CardPageProps> = ({ cards, index = 0 }) => {
  const { title: cardTitle } = useParams<{ title: string }>();
  const cardIndex = cards.findIndex((card) => card.title === cardTitle);
  if (cardIndex !== -1) {
    index = cardIndex;
  }
  const card = cards[index];

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <Card card={card} />
    </div>
  );
};

export default CardPage;
