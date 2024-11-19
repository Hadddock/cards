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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numberToWord = (num: number) => {
  const words = [
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
  return words[num];
};

const numberCards: INumberCard[] = numbers.map((i) => ({
  title: i.toString(),
  number: i,
  image: `${numberToWord(i)}.svg`,
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
          <Route path="/numbers" element={<DeckPage cards={numberCards} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default Main;
