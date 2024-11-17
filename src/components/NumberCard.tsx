import React from 'react';

interface NumberCardProps {
  number: number;
  frames: string[];
}

const importGif = (number: number) => {
  const path = `./../assets/number_formation/gifs/number_${number}.gif`;
  console.log(`Attempting to import gif from path: ${path}`);
  try {
    return import(path)
      .then((module) => {
        return module.default;
      })
      .catch((err) => {
        console.error(`Error loading gif for number ${number}`, err);
        return null;
      });
  } catch (err) {
    console.error(`Error loading gif for number ${number}`, err);
    return null;
  }
};

const NumberCard: React.FC<NumberCardProps> = ({ number, frames }) => {
  const [gifSrc, setGifSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (number < 0 || number > 9) {
      setGifSrc(null);
    } else {
      const gifPromise = importGif(number);
      if (gifPromise) {
        gifPromise.then((src) => {
          if (src) {
            setGifSrc(src);
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
    </div>
  );
};

export default NumberCard;
