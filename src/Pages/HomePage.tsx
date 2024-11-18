import React from 'react';
// import LanguageSelector from '../components/LanguageSelector';
// import SearchBar from '../components/SearchBar';
// import decksData from './../decks.json';
// import wordsData from './../words.json';
// import { useLanguage } from '../context/LanguageContext';

// import Preview from '../components/Preview';
// import Deck from '../components/Deck';

// import Flashcard from '../components/Flashcard';
import { Link } from 'react-router-dom';

interface HomePageProps {
  children?: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  // const { setCurrentLanguage } = useLanguage();
  // const [searchQuery, setSearchQuery] = React.useState<string>('');
  // const [searchResults, setSearchResults] =
  //   React.useState<(Deck | Flashcard)[]>(decksData); // Display all decks initially

  // const handleSearchChange = (query: string) => {
  //   setSearchQuery(query);

  //   if (query === '') {
  //     setSearchResults(decksData); // Display all decks when no search query
  //     return;
  //   }

  //   const deckMatches = decksData.filter((deck) =>
  //     deck.deckName.toLowerCase().includes(query.toLowerCase())
  //   );

  //   const cardMatches = wordsData.filter((word) =>
  //     word.word.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setSearchResults([...deckMatches, ...cardMatches]);
  // };

  // const handleItemSelect = (item: Deck | Flashcard) => {
  //   console.log('Selected:', item);
  // };

  // const handleLanguageChange = (language: string) => {
  //   setCurrentLanguage(language);
  // };

  return (
    <div>
      Home Page
      <div>
        {/* <LanguageSelector onLanguageChange={handleLanguageChange} />
        <SearchBar
          decks={decksData}
          cards={wordsData}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        /> */}
        <Link to="/numbers">Go to Numbers Page</Link>
        {/* {searchResults.map((item, index) => (
          <Preview
            key={index}
            type={'deckName' in item ? 'deck' : 'card'}
            data={item}
            onSelect={() => handleItemSelect(item)}
          />
        ))} */}
      </div>
    </div>
  );
};

export default HomePage;
