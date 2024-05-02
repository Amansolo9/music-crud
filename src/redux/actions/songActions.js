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

export const updateSongSuccess = (updatedSong) => ({
  type: actionTypes.UPDATE_SONG_SUCCESS,
  payload: updatedSong,
});

export const updateSongFailure = (error) => ({
  type: actionTypes.UPDATE_SONG_FAILURE,
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

export const updateSong = (songId, songData) => {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/Amansolo9/Mock-Json/musics${songId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songData),
    })
    .then((response) => response.json())
    .then((data) => dispatch(updateSongSuccess(data)))
    .catch((error) => dispatch(updateSongFailure(error.message)));
  };
};