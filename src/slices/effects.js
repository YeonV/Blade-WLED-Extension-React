import { createSlice } from '@reduxjs/toolkit';

const getNewEffect = (name) => ({
  name: name,
  FX: 0,
  FP: 0,
  IX: 128,
  SX: 128,
  NF: 2,
  extra: '',
  CL: '000000',
  C2: '000000',
  C3: '000000',
  NL: 10,
  A: 5,
  NT: 255,
  useFX: false,
  useSX: false,
  useCL: false,
  useC2: false,
  useA: false,
  useNL: false,
  useNT: false,
  useFP: false,
  useIX: false,
  useNF: false,
  useC3: false,
  useEXTRA: false,
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
