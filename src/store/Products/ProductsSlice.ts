import { createSlice } from "@reduxjs/toolkit";

interface IProductsState {
    records : {id: number; title: string;price: number; img: string;cat_prefix: string}[],
    loading: "idle" | "pending" | "secceeded" | "failed";
    error: null | string;
}


const initialState : IProductsState = {
    records:[],
    loading: "idle",
    error: null
}

const ProductsSlice = createSlice({
    name: "Products",
    initialState,
    reducers:{}
});

export default ProductsSlice.reducer;