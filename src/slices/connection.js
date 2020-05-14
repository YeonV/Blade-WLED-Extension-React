import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: { ip: '192,168.1.186' },
  reducers: {
    setIp(state, action) {
      state.ip = action.payload;
    },
  },
});

export const { actions } = connectionSlice;
export default connectionSlice;
