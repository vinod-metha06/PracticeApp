import {configureStore} from '@reduxjs/toolkit';
import {MusicReducer} from './reducer';

export const store = configureStore({
  reducer: {
    MusicReducer:MusicReducer
  },
});
