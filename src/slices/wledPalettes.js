import { createSlice } from '@reduxjs/toolkit';

const wledPalettesSlice = createSlice({
  name: 'paletteLabels',
  initialState: [
    'Default',
    'Random Cycle',
    'Primary Color',
    'Based on Primary',
    'Set Colors',
    'Based on Set',
    'Party',
    'Cloud',
    'Lava',
    'Ocean',
    'Forest',
    'Rainbow',
    'Rainbow Bands',
    'Sunset',
    'Rivendell',
    'Breeze',
    'Red & Blue',
    'Yellowout',
    'Analogous',
    'Splash',
    'Pastel',
    'Sunset 2',
    'Beech',
    'Vintage',
    'Departure',
    'Landscape',
    'Beach',
    'Sherbet',
    'Hult',
    'Hult 64',
    'Drywet',
    'Jul',
    'Grintage',
    'Rewhi',
    'Tertiary',
    'Fire',
    'Icefire',
    'Cyane',
    'Light Pink',
    'Autumn',
    'Magenta',
    'Magred',
    'Yelmag',
    'Yelblu',
    'Orange & Teal',
    'Tiamat',
    'April Night',
    'Orangery',
    'C9',
    'Sakura',
    'Aurora',
  ],
  reducers: {
    update(state, action) {
      console.log('input: ', action.payload);
      console.log('state: ', state);
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { actions } = wledPalettesSlice;
export default wledPalettesSlice;
