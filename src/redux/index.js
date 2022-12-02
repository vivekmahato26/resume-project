import { configureStore } from "@reduxjs/toolkit";
import employmentSlice from "./slice/employmentSlice";
import personalDetailsSlice from "./slice/personalDetails";
import templateSlice from "./slice/templateSlice";


export default configureStore({
    reducer:{
        personalDetails: personalDetailsSlice.reducer,
        template: templateSlice.reducer,
        employment: employmentSlice.reducer
    }
})