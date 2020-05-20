import { createSlice } from '@reduxjs/toolkit';

const getNewEffect = (name) => ({
  name: name,
  fx: 0,
  fp: 0,
  ix: 128,
  fxSpeed: 128,
  nf: 2,
  extra: '',
  cl: 'FF0000',
  c2: 'FFB14A',
  c3: '000000',
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
});

const effectsSlice = createSlice({
  name: 'effects',
  initialState: [getNewEffect('sunrise')],
  reducers: {
    setEffects(state, action) {
      state.length = 0;
      state.push(...action.payload);
    },
    updateEffect(state, action) {
      for (let effect of state) {
        // in INDEX of OBJECT
        if (effect.name === action.payload.name) {
          Object.assign(effect, action.payload);
        }
      }
    },
    addEffect(state, action) {
      if (!state.find(({ name }) => name === action.payload)) {
        state.push(getNewEffect(action.payload));
      }
    },
    removeEffect(state, action) {
      return state.filter(({ name }) => name !== action.payload);
    },
  },
});

export const { actions } = effectsSlice;
export default effectsSlice;
