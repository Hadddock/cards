import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Deck from './Deck';
import Card from './Flashcard';

type SearchItem = Deck | Card;

interface SearchBarProps {
  decks: Deck[];
  cards: Card[];
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  decks,
  cards,
  onSearchChange,
}) => {
  const combinedOptions: SearchItem[] = [
    ...decks.map((deck) => ({ ...deck, type: 'deck' })),
    ...cards.map((card) => ({ ...card, type: 'card' })),
  ];

  return (
    <Autocomplete
      options={combinedOptions}
      getOptionLabel={(option) =>
        'deckName' in option ? option.deckName : option.word
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Decks or Cards"
          variant="outlined"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      )}
      onChange={(event, value) => {
        if (value) {
          onSearchChange('word' in value ? value.word : value.deckName);
        }
      }}
    />
  );
};

export default SearchBar;
