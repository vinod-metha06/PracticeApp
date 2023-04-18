import {configureStore} from '@reduxjs/toolkit';
import {AirLineReducer} from './reducer';

export const airlinestore = configureStore({
  reducer: {
    AirLineReducer:AirLineReducer
  },
});
