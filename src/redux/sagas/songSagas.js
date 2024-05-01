import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/songActionTypes';
import { fetchSongsSuccess, fetchSongsFailure } from '../actions/songActions';

function* fetchSongsSaga() {
  try {
    const response = yield call(fetch, 'https://my-json-server.typicode.com/Amansolo9/Mock-Json/musics');
    const data = yield response.json();
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.toString()));
  }
}

function* watchFetchSongsSaga() {
  yield takeLatest(actionTypes.FETCH_SONGS_REQUEST, fetchSongsSaga);
}

export default watchFetchSongsSaga;