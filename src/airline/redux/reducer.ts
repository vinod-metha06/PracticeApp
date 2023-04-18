const AirlineState = {
  loading: false,
  data: [],
  search: [],
  error: false,
};

export const AirLineReducer = (state = AirlineState, action: any) => {
  switch (action.type) {
    case 'GET_AIRLINE_DATA_LODING':
      return {
        ...state,
        loading: true,
      };

    case 'GET_AIRLINE_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case 'GET_AIRLINE_DATA_ERROR':
      return {
        ...state,
        error: true,
      };

    case 'GET_AIRLINE_DATA_SEARCH':
      const list = state.data.filter(item => {
        if (item.id == action.payload) {
          return item;
        }
      });
      return {
        ...state,
        search: list,

        loading: false,
      };
    case 'GET_AIRLINE_DATA_SEARCH_RESET':
      return {
        ...state,
        search: [],
      };

    default:
      return state;
  }
};
