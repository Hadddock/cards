import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
import { WordData } from './wordDataDefinitions';
import Flashcard from './components/Flashcard';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './context/LanguageContext';

const sampleWordData: WordData = {
  word: 'computer',
  level: 'A1',
  partOfSpeech: 'noun (countable)',
  meaning: new Map([['en', "комп'ютер"]]),
  pronunciation: 'kəmˈpju·tə̬r',
  definition:
    'An electronic machine that can store and arrange large amounts of information.',
  exampleSentences: [
    'I use my computer to write emails.',
    'She has a new computer at home.',
    'There are lots of computers at the library.',
  ],
  exampleSentencesTranslations: new Map([
    [
      'en',
      [
        'Я використовую свій комп’ютер для написання електронних листів.',
        'У неї вдома новий комп’ютер.',
        'У бібліотеці багато комп’ютерів.',
      ],
    ],
  ]),
  icon: 'src/assets/icons/computer.svg',
  images: ['src/assets/images/computer.jpg', 'src/assets/images/computer2.jpg'],
  usageNotes: new Map(),
  usageNotesEnglish: {
    synonyms: ['PC', 'laptop'],
    antonyms: [],
  },
};

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <LanguageSelector />

        <Flashcard wordData={sampleWordData} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
