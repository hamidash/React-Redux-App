import {
  FETCH_GLOBAL_INFO_FAIL,
  FETCH_GLOBAL_INFO_START,
  FETCH_GLOBAL_INFO_SUCCESS,
} from "../actions";

const initialState = {
  globalInfo: [
    {
      coins_count: 0,
      active_markets: 0,
      total_mcap: 0,
      total_volume: 0,
    },
  ],
  topCoins: {
    data: [
      {
        id: "",
        symbol: "",
        name: "",
        nameid: "",
        rank: "",
        price_usd: "",
      },
    ],
  },
  coinSocial: {
    reddit: {
      avg_active_users: "",
      subscribers: "",
    },
    twitter: {
      followers_count: "",
      status_count: "",
    },
  },
  error: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_INFO_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_GLOBAL_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        globalInfo: action.payload,
      };

    case FETCH_GLOBAL_INFO_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
