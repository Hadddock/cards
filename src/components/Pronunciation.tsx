import React from 'react';

interface PronunciationProps {
  audioSrc: string;
  ipa?: string;
  word: string;
}

const Pronunciation: React.FC<PronunciationProps> = ({
  audioSrc,
  ipa,
  word,
}) => {
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div
      onClick={playAudio}
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
    >
      <span role="img" aria-label="speaker" style={{ marginRight: '8px' }}>
        🔊
      </span>
      <div>
        <p style={{ margin: 0 }}>{word}</p>
        {ipa && <p style={{ margin: 0, fontStyle: 'italic' }}>{ipa}</p>}
      </div>
    </div>
  );
};

export default Pronunciation;
