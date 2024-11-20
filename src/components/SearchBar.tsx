// import React from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Deck from './Deck';
// import Card from './Flashcard';

// type SearchItem = Deck | Card;

// interface SearchBarProps {
//   decks: Deck[];
//   cards: Card[];
//   onSearchChange: (query: string) => void;
//   searchQuery: string;
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   decks,
//   cards,
//   onSearchChange,
//   searchQuery,
// }) => {
//   const combinedOptions: SearchItem[] = [
//     ...decks.map((deck) => ({ ...deck, type: 'deck' })),
//     ...cards.map((card) => ({ ...card, type: 'card' })),
//   ];

//   const sortedDecks = decks.sort((a, b) =>
//     a.deckName.localeCompare(b.deckName)
//   );

//   return (
//     <Autocomplete
//       options={searchQuery ? combinedOptions : sortedDecks}
//       getOptionLabel={(option) =>
//         'deckName' in option ? option.deckName : option.word
//       }
//       inputValue={searchQuery}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Search Decks or Cards"
//           variant="outlined"
//           onChange={(event) => onSearchChange(event.target.value)}
//         />
//       )}
//       onChange={(event, value) => {
//         console.log(event);
//         if (value) {
//           onSearchChange('word' in value ? value.word : value.deckName);
//         } else {
//           onSearchChange('');
//         }
//       }}
//       open={false} // Disable dropdown options
//     />
//   );
// };

// export default SearchBar;
