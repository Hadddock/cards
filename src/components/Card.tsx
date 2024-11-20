import React from 'react';
import ICard from '../types/ICard';

// Static imports for main images
import zero from '../assets/images/zero.svg';
import one from '../assets/images/one.svg';
import two from '../assets/images/two.svg';
import three from '../assets/images/three.svg';
import four from '../assets/images/four.svg';
import five from '../assets/images/five.svg';
import six from '../assets/images/six.svg';
import seven from '../assets/images/seven.svg';
import eight from '../assets/images/eight.svg';
import nine from '../assets/images/nine.svg';

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

const imagesMap: { [key: string]: string } = {
  'zero.svg': zero,
  'one.svg': one,
  'two.svg': two,
  'three.svg': three,
  'four.svg': four,
  'five.svg': five,
  'six.svg': six,
  'seven.svg': seven,
  'eight.svg': eight,
  'nine.svg': nine,
};

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
  const imageSrc = card.image ? imagesMap[card.image] : null;
  const alternateImageSrcs =
    card.alternate_images
      ?.map((img) => alternateImagesMap[img])
      .filter(Boolean) || [];

  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={card.title} />}
      <h2>{card.title}</h2>
      {alternateImageSrcs.length > 0 ? (
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
