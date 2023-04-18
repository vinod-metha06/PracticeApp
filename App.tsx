import React from 'react';
import {Provider} from 'react-redux';
import AirlineNavigation from './src/airline/navigation/AirlineNavigtion';
import { airlinestore } from './src/airline/redux/store';
import MusicNavigation from './src/music/navigation/MusicNavigtion';
import {store} from './src/music/redux/store';

const App = () => {
  return (
    <Provider store={airlinestore}>
      <AirlineNavigation />
    </Provider>
  );
};

export default App;
