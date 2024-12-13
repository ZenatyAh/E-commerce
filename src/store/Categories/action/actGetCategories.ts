import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {id:number; title: string ; prefix : string; img: string}[];

const actGetCategories = createAsyncThunk(
    "Categories/actGetCategories", 
    async (_,thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        const {isAxiosError} = axios;
        try {
            const response =await axios.get<TResponse>("http://localhost:3000/categories"); 
            return response;
            // return response.data.map(el => el);
        } catch (error) {
            if(isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            }else{
                return rejectWithValue("An Unexpected error");
            }
        }
    }
);

export default actGetCategories;