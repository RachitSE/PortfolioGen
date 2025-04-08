// lib/themes.js

const themes = [
    {
      name: 'Cyber Blue',
      primary: '#3AB0FF',
      secondary: '#1B1B2F',
      accent: '#00F5FF',
      text: '#FFFFFF',
      bg: '#10131A',
    },
    {
      name: 'Neo Green',
      primary: '#00FFAB',
      secondary: '#002B36',
      accent: '#A6FF96',
      text: '#E0FFE0',
      bg: '#001E1D',
    },
    {
      name: 'Sunset Orange',
      primary: '#FF6B6B',
      secondary: '#1E1E24',
      accent: '#FFC6AC',
      text: '#FFEADD',
      bg: '#2C1A1D',
    },
    {
      name: 'Minimal White',
      primary: '#333333',
      secondary: '#FFFFFF',
      accent: '#999999',
      text: '#111111',
      bg: '#F9F9F9',
    },
    {
      name: 'Midnight Purple',
      primary: '#9D4EDD',
      secondary: '#2D006A',
      accent: '#D291BC',
      text: '#F8F0FB',
      bg: '#1E0033',
    },
  ];
  
  export const getRandomTheme = () => {
    const index = Math.floor(Math.random() * themes.length);
    return themes[index];
  };
  