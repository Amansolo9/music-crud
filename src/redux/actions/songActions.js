import * as actionTypes from './songActionTypes';

export const fetchSongsRequest = () => ({
  type: actionTypes.FETCH_SONGS_REQUEST,
});

export const fetchSongsSuccess = (songs) => ({
  type: actionTypes.FETCH_SONGS_SUCCESS,
  payload: songs,
});

export const fetchSongsFailure = (error) => ({
  type: actionTypes.FETCH_SONGS_FAILURE,
  payload: error,
});

export const addSong = (song) => ({
  type: actionTypes.ADD_SONG,
  payload: song,
});

export const deleteSong = (id) => ({
  type: actionTypes.DELETE_SONG,
  payload: id,
});

export const updateSong = (song) => ({
  type: actionTypes.UPDATE_SONG,
  payload: song,
});