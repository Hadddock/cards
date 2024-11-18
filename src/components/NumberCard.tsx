import React from 'react';
import Pronunciation from './Pronunciation';

interface NumberCardProps {
  number: number;
  frames: string[];
}

const importGif = (number: number) => {
  switch (number) {
    case 0:
      return import('./../assets/number_formation/gifs/number_0.gif');
    case 1:
      return import('./../assets/number_formation/gifs/number_1.gif');
    case 2:
      return import('./../assets/number_formation/gifs/number_2.gif');
    case 3:
      return import('./../assets/number_formation/gifs/number_3.gif');
    case 4:
      return import('./../assets/number_formation/gifs/number_4.gif');
    case 5:
      return import('./../assets/number_formation/gifs/number_5.gif');
    case 6:
      return import('./../assets/number_formation/gifs/number_6.gif');
    case 7:
      return import('./../assets/number_formation/gifs/number_7.gif');
    case 8:
      return import('./../assets/number_formation/gifs/number_8.gif');
    case 9:
      return import('./../assets/number_formation/gifs/number_9.gif');
    default:
      return Promise.reject(new Error('Invalid number'));
  }
};

const importAudio = (number: number) => {
  switch (number) {
    case 0:
      return import('./../assets/audio/zero.mp3');
    case 1:
      return import('./../assets/audio/one.mp3');
    case 2:
      return import('./../assets/audio/two.mp3');
    case 3:
      return import('./../assets/audio/three.mp3');
    case 4:
      return import('./../assets/audio/four.mp3');
    case 5:
      return import('./../assets/audio/five.mp3');
    case 6:
      return import('./../assets/audio/six.mp3');
    case 7:
      return import('./../assets/audio/seven.mp3');
    case 8:
      return import('./../assets/audio/eight.mp3');
    case 9:
      return import('./../assets/audio/nine.mp3');
    default:
      return Promise.reject(new Error('Invalid number'));
  }
};

const numberToWord = (number: number) => {
  const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return numberWords[number] || 'Invalid number';
};

const NumberCard: React.FC<NumberCardProps> = ({ number, frames }) => {
  const [gifSrc, setGifSrc] = React.useState<string | null>(null);
  const [audioSrc, setAudioSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (number < 0 || number > 9) {
      setGifSrc(null);
    } else {
      const gifPromise = importGif(number);
      if (gifPromise) {
        gifPromise.then((module) => {
          if (module && module.default) {
            setGifSrc(module.default);
          }
        });
      }
    }
  }, [number]);

  React.useEffect(() => {
    if (number >= 0 && number <= 9) {
      const audioPromise = importAudio(number);
      if (audioPromise) {
        audioPromise.then((module) => {
          if (module && module.default) {
            setAudioSrc(module.default);
          }
        });
      }
    }
  }, [number]);

  if (number < 0 || number > 9) {
    return <div>Invalid number</div>;
  }

  return (
    <div className="number-card">
      {gifSrc ? (
        <img src={gifSrc} alt={`Number ${number}`} />
      ) : (
        <div>Loading...</div>
      )}
      <div className="frames">
        {frames.map((frame, index) => (
          <img key={index} src={frame} alt={`Frame ${index + 1}`} />
        ))}
      </div>
      <Pronunciation audioSrc={audioSrc || ''} word={numberToWord(number)} />
    </div>
  );
};

export default NumberCard;
