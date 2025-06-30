import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: '1', username: 'clubUser', password: '1234', role: 'club' },
    { id: '2', username: 'driverUser', password: '5678', role: 'driver' },
  ],
  currentUser: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      const foundUser = state.users.find(
        u => u.username === username && u.password === password
      );
      if (foundUser) {
        state.currentUser = foundUser;
      } else {
        state.currentUser = null;
      }
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
