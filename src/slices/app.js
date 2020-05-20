import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    ip: '192.168.1.186',
    filterString: '',
    openEffect: '',
    activeEffect: '',
    activeDuration: 0,
    accentColor: '',
    navi: 'http',
    currentState: { name: 'Failed' },
    guide: false,
    online: false,
    yz: false,
  },
  reducers: {
    setIp(state, action) {
      state.ip = action.payload;
    },
    setFilterString(state, action) {
      state.filterString = action.payload;
    },
    setOpenEffect(state, action) {
      state.openEffect = action.payload;
    },
    setActiveEffect(state, action) {
      state.activeEffect = action.payload;
    },
    setActiveDuration(state, action) {
      state.activeDuration = action.payload;
    },
    setNavi(state, action) {
      state.navi = action.payload;
    },
    setGuide(state, action) {
      state.guide = action.payload;
    },
    setOnline(state, action) {
      state.online = action.payload;
    },
    setCurrentState(state, action) {
      state.currentState = action.payload;
    },
    setYZ(state, action) {
      state.yz = action.payload;
    },
    setAccentColor(state, action) {
      state.accentColor = action.payload;
    },
  },
});

export const { actions } = appSlice;
export default appSlice;
