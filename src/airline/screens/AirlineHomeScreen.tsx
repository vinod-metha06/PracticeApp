import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  dispatchGetAirlineData,
  dispatchGetAirlineDataError,
  dispatchGetAirlineDataLoading,
  dispatchGetAirlineSearch,
  dispatchGetAirlineSearchReset,
} from '../redux/action';
import {getAirlineDataApi} from '../service/service';

interface AirLineReducer {
  loading: boolean;
  data: any;
  search: any;
  error: boolean;
}
interface State {
  AirLineReducer: AirLineReducer;
}

const AirlineHomeScreen = () => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const airlineList = useSelector((state: State) => state.AirLineReducer);

  useEffect(() => {
    getData();
  }, []);

  const handleOnPress = async () => {
    dispatch(dispatchGetAirlineDataLoading());
    dispatchGetAirlineSearch(inputText);
  };

  const getData = async () => {
    dispatch(dispatchGetAirlineDataLoading());
    const data = await getAirlineDataApi();
    if (data != 'error') {
      dispatch(dispatchGetAirlineData(data));
    } else {
      dispatch(dispatchGetAirlineDataError());
    }
  };

  if (airlineList.loading) {
    return <ActivityIndicator size={40} color="blue" />;
  }
  if (inputText == '') {
    return dispatch(dispatchGetAirlineSearchReset());
  }
  if (airlineList.error) {
    return <Text>'Error while fetching the data...'</Text>;
  }

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.card}>
        {/* <Image
              source={{uri:item.logo}}
              style={{
                  resizeMode:'contain',
                  width:98,
                  height:100,
                  borderRadius:40
              }}
              /> */}
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text>{item.id}</Text>
          {/* <Text>{item.country}</Text> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
    placeholder="Serach here.."
    onChangeText={t=>setInputText(t)}
    style={styles.input}
    />
    <Button
    title="Search"
    onPress={handleOnPress}
    />
    {airlineList?.loading? (
      <ActivityIndicator size={40} color="blue" />
) : (
    <FlatList
    data={airlineList.data}
    renderItem={renderItem}
    keyExtractor={item=>item.id}
    
    />
)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderRadius: 40,
    width: '90%',
    marginVertical: 12,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#c8c8c8',
    borderRadius: 40,
    borderWidth: 1,
    marginTop: 8,
    padding: 10,
  },
});
export default AirlineHomeScreen;
