import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  dispatchGetMusicData,
  dispatchGetMusicDataError,
  dispatchGetMusicDataInfo,
  dispatchGetMusicDataLoading,
} from '../redux/action';
import {getMusicDataApi} from '../service/service';

interface MusicReducer {
  loading: boolean;
  data: any;
  info: any;
  error: boolean;
}
interface State {
  MusicReducer: MusicReducer;
}

const MusicHomeScreen = () => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const musicList = useSelector((state: State) => state.MusicReducer);
  const navigation = useNavigation();

  const handleOnPress = async () => {
    dispatch(dispatchGetMusicDataLoading());
    const data = await getMusicDataApi(inputText);
    if (data != 'error') {
      dispatch(dispatchGetMusicData(data));
    } else {
      dispatchGetMusicDataError();
    }
  };

  const handleOnPressItem = (item: any) => {
    console.log(item);
    dispatch(dispatchGetMusicDataInfo(item));
    navigation.navigate('MusicDetailsScreen');
  };

  if (musicList.loading) {
    return <ActivityIndicator size={40} color="blue" />;
  }

  if (musicList.error) {
    return <Text>'Error while fetching the data...'</Text>;
  }

  const renderItem = ({item}: any) => {
    return (
      <View>
        <Pressable onPress={() => handleOnPressItem(item)}>
          <Text>{item.trackName}</Text>
        </Pressable>
      </View>
    );
  };

  //console.log(musicList)
  return (
    <View>
      <TextInput
        value={inputText}
        onChangeText={text => setInputText(text)}
        style={{borderRadius: 20}}
      />
      <Button title="Search" onPress={handleOnPress} />
      <FlatList
        data={musicList.data}
        renderItem={renderItem}
        keyExtractor={item => item.trackId}
      />
    </View>
  );
};

export default MusicHomeScreen;
