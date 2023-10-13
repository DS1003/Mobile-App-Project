import {createSlice} from "@reduxjs/toolkit";

const intialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = creatSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            //Last changes***
        } 
    },
})