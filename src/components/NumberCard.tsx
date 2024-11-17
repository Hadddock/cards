import React from 'react';

interface NumberCardProps {
  number: number;
  frames: string[];
}

const NumberCard: React.FC<NumberCardProps> = ({ number, frames }) => {
  if (number < 0 || number > 9) {
    return <div>Invalid number</div>;
  }

  const gifUrl = `/local/path/to/numbers/${number}.gif`;

  return (
    <div className="number-card">
      <img src={gifUrl} alt={`Number ${number}`} />
      <div className="frames">
        {frames.map((frame, index) => (
          <img key={index} src={frame} alt={`Frame ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default NumberCard;
