import { createSlice } from "@reduxjs/toolkit";

interface ICategoriesState {
    records: {id:number; title: string ; prefix : string; img: string}[];
    loading: "idle" | "pending" | "secceeded" | "failed"| "ىخ";
    error: string | null;
}

const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null
};

const CategoriesSlice = createSlice({
    name: "Categories",
    initialState,
    reducers: {}
});

export default CategoriesSlice.reducer;