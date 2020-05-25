import { createSlice } from '@reduxjs/toolkit';

const getNewEffect = (name) => ({
  on: true,
  bri: 255,
  transition: 7,
  ps: -1,
  pss: 0,
  pl: -1,
  ccnf: {
    min: 1,
    max: 5,
    time: 12,
  },
  nl: {
    on: false,
    dur: 1,
    fade: true,
    tbri: 0,
  },
  udpn: {
    send: false,
    recv: true,
  },
  mainseg: 0,
  name: name,
  seg: [
    {
      id: 0,
      start: 0,
      stop: 54,
      len: 54,
      grp: 1,
      spc: 0,
      col: [
        [255, 160, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      fx: 0,
      sx: 128,
      ix: 128,
      pal: 0,
      sel: true,
      rev: false,
    },
  ],
});

const effectsJsonSlice = createSlice({
  name: 'effectsJson',
  initialState: [getNewEffect('default')],
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

export const { actions } = effectsJsonSlice;
export default effectsJsonSlice;
