import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useLanguage } from '../context/LanguageContext';

const languages: readonly LanguageType[] = [
  { code: 'EN', label: 'English', nativeLabel: 'English', flagCode: 'gb' },
  { code: 'ES', label: 'Spanish', nativeLabel: 'Español', flagCode: 'es' },
  { code: 'FR', label: 'French', nativeLabel: 'Français', flagCode: 'fr' },
  { code: 'DE', label: 'German', nativeLabel: 'Deutsch', flagCode: 'de' },
  { code: 'ZH', label: 'Chinese', nativeLabel: '中文', flagCode: 'cn' },
  { code: 'JA', label: 'Japanese', nativeLabel: '日本語', flagCode: 'jp' },
  { code: 'RU', label: 'Russian', nativeLabel: 'Русский', flagCode: 'ru' },
  { code: 'AR', label: 'Arabic', nativeLabel: 'العربية', flagCode: 'sa' },
  { code: 'HI', label: 'Hindi', nativeLabel: 'हिन्दी', flagCode: 'in' },
  { code: 'PT', label: 'Portuguese', nativeLabel: 'Português', flagCode: 'pt' },
];

export default function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [inputValue, setInputValue] = React.useState('');

  const selectedLanguage = languages.find(
    (lang) => lang.code.toLowerCase() === currentLanguage.split('-')[0]
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
        console.log(event);
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        if (newValue) {
          console.log(event);
          setCurrentLanguage(newValue.code.toLowerCase());
        }
      }}
      getOptionLabel={(option) => `${option.label} (${option.nativeLabel})`}
      filterOptions={(options, state) =>
        options.filter(
          (option) =>
            option.label
              .toLowerCase()
              .includes(state.inputValue.toLowerCase()) ||
            option.nativeLabel
              .toLowerCase()
              .includes(state.inputValue.toLowerCase())
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
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.flagCode.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.flagCode.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code})
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
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${selectedLanguage.flagCode.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${selectedLanguage.flagCode.toLowerCase()}.png`}
                alt=""
                style={{ marginRight: 8 }}
              />
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
}
interface LanguageType {
  code: string;
  label: string;
  nativeLabel: string;
  flagCode: string;

  suggested?: boolean;
}
