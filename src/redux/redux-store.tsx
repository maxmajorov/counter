import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducers/counter-reducer";

// ======Создаем Store======
// У Store уже есть методы getState, dispatch

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

type RootReducersType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducersType>; // ТИП ВСЕГО СТЕЙТА

export const store = configureStore({
  reducer: rootReducer,
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
