import { configureStore } from "@reduxjs/toolkit";
import userSlic from "../feature/userSlic";

export default configureStore({
    reducer:{
        user:userSlic
    }
})