import React, { useState, useEffect } from 'react';
import ICard from '../types/ICard';

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (card.image) {
      import(`../assets/images/${card.image}`)
        .then((image) => setImageSrc(image.default))
        .catch(() => setImageSrc(null));
    }
  }, [card.image]);

  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={card.title} />}
      <h2>{card.title}</h2>
    </div>
  );
};

export default Card;
