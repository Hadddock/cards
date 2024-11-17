import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useLanguage } from '../context/LanguageContext';
import languages from '../languages.json';

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [inputValue, setInputValue] = React.useState('');

  const selectedLanguage = languages.find(
    (lang) => lang.Code.toLowerCase() === currentLanguage.split('-')[0]
  );

  return (
    <Autocomplete
      id="language-select-demo"
      sx={{ width: 300 }}
      options={languages}
      autoHighlight
      multiple={false}
      disableCloseOnSelect={false}
      value={selectedLanguage || null}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        if (newValue) {
          setCurrentLanguage(newValue.Code.toLowerCase());
          onLanguageChange(newValue.Code.toLowerCase());
          console.log(newValue.Code.toLowerCase());
        }
      }}
      getOptionLabel={(option) =>
        `${option.EnglishName} (${option.NativeName})`
      }
      filterOptions={(options, state) =>
        options.filter(
          (option) =>
            option.EnglishName.toLowerCase().includes(
              state.inputValue.toLowerCase()
            ) ||
            option.NativeName.toLowerCase().includes(
              state.inputValue.toLowerCase()
            )
        )
      }
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            {option.FlagCode === '419' ? (
              <span role="img" aria-label="globe" style={{ marginRight: 8 }}>
                🌎
              </span>
            ) : (
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.FlagCode?.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.FlagCode?.toLowerCase()}.png`}
                alt=""
              />
            )}
            {option.EnglishName} ({option.Code})
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a language"
          InputProps={{
            ...params.InputProps,
            startAdornment: selectedLanguage ? (
              selectedLanguage.FlagCode === '419' ? (
                <span role="img" aria-label="globe" style={{ marginRight: 8 }}>
                  🌎
                </span>
              ) : (
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${selectedLanguage.FlagCode.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${selectedLanguage.FlagCode.toLowerCase()}.png`}
                  alt=""
                  style={{ marginRight: 8 }}
                />
              )
            ) : null,
          }}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
};

export default LanguageSelector;
