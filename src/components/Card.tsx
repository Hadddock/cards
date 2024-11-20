import React, { useState, useEffect } from 'react';
import ICard from '../types/ICard';

// Static imports for alternate images
import zeroAlternate0 from '../assets/images/zero_alternate_0.svg';
import oneAlternate0 from '../assets/images/one_alternate_0.svg';
import oneAlternate1 from '../assets/images/one_alternate_1.svg';

import twoAlternate0 from '../assets/images/two_alternate_0.svg';
import threeAlternate0 from '../assets/images/three_alternate_0.svg';
import fourAlternate0 from '../assets/images/four_alternate_0.svg';
import fourAlternate1 from '../assets/images/four_alternate_1.svg';
import fourAlternate2 from '../assets/images/four_alternate_2.svg';

import sevenAlternate0 from '../assets/images/seven_alternate_0.svg';
import sevenAlternate1 from '../assets/images/seven_alternate_1.svg';
import sevenAlternate2 from '../assets/images/seven_alternate_2.svg';

import nineAlternate0 from '../assets/images/nine_alternate_0.svg';

const alternateImagesMap: { [key: string]: string } = {
  'zero_alternate_0.svg': zeroAlternate0,
  'one_alternate_0.svg': oneAlternate0,
  'one_alternate_1.svg': oneAlternate1,

  'two_alternate_0.svg': twoAlternate0,
  'three_alternate_0.svg': threeAlternate0,
  'four_alternate_0.svg': fourAlternate0,
  'four_alternate_1.svg': fourAlternate1,
  'four_alternate_2.svg': fourAlternate2,

  'seven_alternate_0.svg': sevenAlternate0,
  'seven_alternate_1.svg': sevenAlternate1,
  'seven_alternate_2.svg': sevenAlternate2,

  'nine_alternate_0.svg': nineAlternate0,
};

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [alternateImageSrcs, setAlternateImageSrcs] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      if (card.image) {
        console.log(`Loading main image: ${card.image}`);
        try {
          const image = await import(`../assets/images/${card.image}`);
          console.log(`Successfully loaded main image: ${card.image}`);
          setImageSrc(image.default);
        } catch (error) {
          console.error(`Error loading main image ${card.image}:`, error);
          setImageSrc(null);
        }
      }

      if (card.alternate_images && card.alternate_images.length > 0) {
        console.log('Loading alternate images:', card.alternate_images);
        try {
          const images = card.alternate_images.map((img) => {
            const image = alternateImagesMap[img];
            if (!image) {
              console.error(`Error loading alternate image ${img}: not found`);
              return '';
            }
            return image;
          });
          const srcs = images.filter(Boolean);
          console.log('Successfully loaded alternate images:', srcs);
          setAlternateImageSrcs(srcs);
        } catch (error) {
          console.error('Error loading alternate images:', error);
        }
      }
    };

    loadImages();
  }, [card.image, card.alternate_images]);

  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={card.title} />}
      <h2>{card.title}</h2>
      {alternateImageSrcs && alternateImageSrcs.length > 0 ? (
        alternateImageSrcs.map((src, idx) => (
          <img key={idx} src={src} alt={`${card.title} alternate ${idx}`} />
        ))
      ) : (
        <p>No alternate images available</p>
      )}
    </div>
  );
};

export default Card;
