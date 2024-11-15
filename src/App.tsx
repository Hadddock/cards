import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import './App.css';

import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './context/LanguageContext';
import SearchBar from './components/SearchBar';
import Deck from './components/Deck';
import Flashcard from './components/Flashcard';
import Preview from './components/Preview';

import decksData from './decks.json';
import wordsData from './words.json';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchResults, setSearchResults] =
    React.useState<(Deck | Flashcard)[]>(decksData); // Display all decks initially

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);

    if (query === '') {
      setSearchResults(decksData); // Display all decks when no search query
      return;
    }

    const deckMatches = decksData.filter((deck) =>
      deck.deckName.toLowerCase().includes(query.toLowerCase())
    );

    const cardMatches = wordsData.filter((word) =>
      word.word.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults([...deckMatches, ...cardMatches]);
  };

  const handleItemSelect = (item: Deck | Flashcard) => {
    console.log('Selected:', item);
  };

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('SW registered: ', registration);
          },
          (registrationError) => {
            console.log('SW registration failed: ', registrationError);
          }
        );
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <LanguageSelector />
        <SearchBar
          decks={decksData}
          cards={wordsData}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
        {searchResults.map((item, index) => (
          <Preview
            key={index}
            type={'deckName' in item ? 'deck' : 'card'}
            data={item}
            onSelect={() => handleItemSelect(item)}
          />
        ))}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
