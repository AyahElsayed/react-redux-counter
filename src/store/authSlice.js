import { createSlice } from '@reduxjs/toolkit'

const initState = {  login: false }

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    auth: (state) => {
      state.login = !state.login;
    }
  }
})
export default authSlice.reducer
export const { auth } = authSlice.actions
