import React from 'react';
import ICard from '../types/ICard';
import Card from '../components/Card';

interface CardPageProps {
  card: ICard;
}

const CardPage: React.FC<CardPageProps> = ({ card }) => {
  return (
    <div>
      <Card card={card} />
    </div>
  );
};

export default CardPage;
