import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { allRecents } from "./services/recent";
import { allUsers } from "./services/user";

const store = configureStore({
  reducer: {
    [allRecents.reducerPath]: allRecents.reducer,
    [allUsers.reducerPath]: allUsers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      allRecents.middleware,
      allUsers.middleware,
    ),
});

setupListeners(store.dispatch)
export default store;
