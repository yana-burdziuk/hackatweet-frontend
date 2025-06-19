import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {
        userName: null,
        token: null
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
           ({ userName: state.value.userName, token: state.value.token } = action.payload)
        },
        logout: (state) => {
           state.value.userName = null;
           state.value.token = null;
        },
    }
})

const { login, logout } = userSlice.actions;

export { userSlice, login, logout };
export default userSlice.reducer;