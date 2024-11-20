import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DeckPage from './Pages/DeckPage';
import CardPage from './Pages/CardPage';

import numbersData from './decks/numbers.json';

const numberCards: INumberCard[] = numbersData.map((data, i) => ({
  id: `number-${i}`,
  title: data.name,
  cardType: 'number',
  number: i,
  image: data.image,
  pronunciation: data.pronunciation,
  audio: data.audio,
  alternate_images: data.alternate_images,
  languages: data.languages,
}));
import INumberCard from './types/INumberCard';

function Main() {
  return (
    <LanguageProvider>
      <Router basename="/cards">
        <App />
      </Router>
    </LanguageProvider>
  );
}

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
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/numbers"
            element={
              <DeckPage
                name="Numbers"
                description="A deck of number cards."
                cards={numberCards}
              />
            }
          />
          <Route
            path="/deck/:deckName/card/:title"
            element={<CardPage cards={numberCards} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default Main;
