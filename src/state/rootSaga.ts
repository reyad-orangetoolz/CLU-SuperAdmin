import { all } from 'redux-saga/effects';
import folderSaga from './features/folder/folderSaga';

export default function* rootSaga() {
    yield all([folderSaga()]);
}
