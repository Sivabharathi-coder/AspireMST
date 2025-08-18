import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    bookings: [],
    jobs: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        addBooking: (state, action) => { state.bookings.push(action.payload) },
        setJobs: (state, action) => { state.jobs = action.payload },
        clearUser: (state) => { state.user = null },
    },
});

export const { setUser, addBooking, setJobs, clearUser } = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

export default store; 
