import { createSlice } from "@reduxjs/toolkit";

const initialState = { bookmarks: [], quantity: 0 };

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducer: {
    addBookmark: (state, action) => {
      const existingItem = state.bookmarks.find(
        (item) => item.id === action.payload._id
      );
      if (existingItem) {
        return nill;
      } else {
        state.bookmarks.push({ ...action.payload });
      }
    },
    removeBookmark: (state, action) => {
      const remainingItems = state.bookmarks.filter(
        (item) => item._it !== action.payload
      );
      state.bookmarks = remainingItems;
      state.quantity = remainingItems.length;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
