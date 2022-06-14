import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        register: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        getUser(state, action) {
            state.user = action.payload
          }
    }
})

export const { login, logout, register, getUser } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer