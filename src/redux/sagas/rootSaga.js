import { all } from 'redux-saga/effects';
import watchFetchSongsSaga from './songSagas';

export default function* rootSaga() {
  yield all([
    watchFetchSongsSaga(),
  ]);
}