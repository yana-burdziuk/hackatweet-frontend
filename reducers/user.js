import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {
        username: null,
        token: null
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
           ({ username: state.value.username, token: state.value.token } = action.payload)
        },
        logout: (state) => {
           state.value.username = null;
           state.value.token = null;
        },
    }
})

const { login, logout } = userSlice.actions;

export { userSlice, login, logout };
export default userSlice.reducer;