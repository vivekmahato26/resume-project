import { createSlice } from "@reduxjs/toolkit";

const personalDetails = createSlice({
    name: "Personal Details",
    initialState: {
        value: {}
    },
    reducers: {
        update: (state, action) => {
            const {key,value} = action.payload;
            state.value = {
                ...state.value,
                [key]:value
            }
            // state.value[key]=value
        }
    }
});

export const { update } = personalDetails.actions;

export default personalDetails;