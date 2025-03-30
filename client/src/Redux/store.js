import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Apply persistReducer to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Persistor for Redux Persist
export const persistor = persistStore(store);
