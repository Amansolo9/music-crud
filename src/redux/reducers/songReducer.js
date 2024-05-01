import * as actionTypes from '../actions/songActionTypes';

const initialState = {
  loading: false,
  songs: [],
  error: '',
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SONGS_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
        error: '',
      };
    case actionTypes.FETCH_SONGS_FAILURE:
      return {
        loading: false,
        songs: [],
        error: action.payload,
      };
    case actionTypes.ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case actionTypes.DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload),
      };
    case actionTypes.UPDATE_SONG:
      return {
        ...state,
        songs: state.songs.map(song => song.id === action.payload.id ? action.payload : song),
      };
    default:
      return state;
  }
};

export default songReducer;