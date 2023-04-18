import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const MusicDetailsScreen = () => {
  const musicList = useSelector(state => state.MusicReducer);
  return (
    <View>
      <Text>{musicList.info.trackName}</Text>
    </View>
  );
};

export default MusicDetailsScreen;
