import React from 'react';
import {Provider} from 'react-redux';
import MusicNavigation from './src/music/navigation/MusicNavigtion';
import {store} from './src/music/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MusicNavigation />
    </Provider>
  );
};

export default App;
