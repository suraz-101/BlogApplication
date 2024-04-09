import { configureStore } from "@reduxjs/toolkit";
import { bookmarkReducer } from "../slices/bookmarkSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistBookmarkConfig = {
  key: "blogify-bookmark",
  storage,
};

const persisBookmark = persistReducer(persistBookmarkConfig, bookmarkReducer);
export const store = configureStore({
  reducer: {
    bookmark: persisBookmark,
  },
});

export const newStore = persistStore(store);
