import { configureStore } from '@reduxjs/toolkit'
import categories from './Categories/categoriesSlice'
import products from "./Products/ProductsSlice"
export const store = configureStore({
  reducer: {categories,products},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;