const MusicState = {
  loading: false,
  data: [],
  info:{},
  error: false,
};

export const MusicReducer = (state = MusicState, action: any) => {
  switch (action.type) {
    case 'GET_MUSIC_DATA_LODING':
      return {
        ...state,
        loading: true,
      };

    case 'GET_MUSIC_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case 'GET_MUSIC_DATA_ERROR':
      return {
        ...state,
        error: true,
      };

      case 'GET_MUSIC_DATA_INFO':
      return {
        ...state,
        info: action.payload,
       
      }; 

    default:
      return state;
  }
};
