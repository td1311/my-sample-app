import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import { baseApi } from '../../services/base/baseApi';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import { rootReducer } from '../rootReducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
  // blacklist: ['counter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, logger),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch