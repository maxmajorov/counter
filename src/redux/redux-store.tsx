import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducers/counter-reducer";

// Синхронизация с localStorage
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// ======Создаем Store======

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootReducersType = typeof rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type AppStateType = ReturnType<RootReducersType>; // ТИП ВСЕГО СТЕЙТА

// ====== LOCALSTORAGE =======

// store.subscribe(() => {
//   localStorage.setItem(
//     "maxValue",
//     JSON.stringify(store.getState().counterReducer.maxValue)
//   );
//   localStorage.setItem(
//     "startValue",
//     JSON.stringify(store.getState().counterReducer.startValue)
//   );
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
