import { createSlice } from '@reduxjs/toolkit';

const effectsSlice = createSlice({
  name: 'effects',
  initialState: [
    {
      name: 'sunrise',
      fx: 0,
      fp: 0,
      ix: 128,
      fxSpeed: 128,
      nf: 2,
      extra: '',
      colorOne: 'FF0000',
      colorTwo: 'FFB14A',
      colorThree: '000000',
      timeInMin: 10,
      brightnessStart: 5,
      brightnessEnd: 255,
      useFX: true,
      useSX: false,
      useCL: true,
      useC2: true,
      useA: true,
      useNL: true,
      useNT: true,
      useFP: false,
      useIX: false,
      useNF: true,
      useC3: false,
      useEXTRA: true,
    },
  ],
  reducers: {
    setEffects(state, action) {
      console.log('input: ', action.payload);
      console.log('state: ', state);
      state.length = 0;
      state.push(...action.payload);
    },
    updateEffect(state, action) {
      for (let effect in state) {
        if (effect.name === action.payload.name) {
          Object.assign(effect, action.payload);
        }
      }
    },
  },
});

export const { actions } = effectsSlice;
export default effectsSlice;
