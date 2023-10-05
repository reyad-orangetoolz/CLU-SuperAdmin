import { all, call, delay, put } from 'typed-redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
    addFolderFailed,
    addFolderSuccess,
    deleteFolderFailed,
    deleteFolderSuccess,
    getFoldersFailed,
    getFoldersSuccess,
    getMoreFoldersFailed,
    getMoreFoldersSuccess,
    updateFolderFailed,
    updateFolderSuccess,
} from './folderSlice';
import { takeLatest } from '@redux-saga/core/effects';
import FolderService from '../../../services/folder.service.ts';
import { IFolder, IGetFoldersPayload } from './folder.interface';
// import { showErrorToaster, showSuccessToaster } from '../../../helpers/utils/toaster';

function* formFolderWatcher() {
    yield takeEvery('folder/getFolders', getFoldersSaga);
    yield takeEvery('folder/getMoreFolders', getMoreFoldersSaga);
    yield takeEvery('folder/addFolder', addFolderSaga);
    yield takeLatest('folder/updateFolder', updateFolderSaga);
    yield takeLatest('folder/updateFolderName', updateFolderNameSaga);
    yield takeLatest('folder/deleteFolder', deleteFolderSaga);
}

function* getFoldersSaga(action: PayloadAction<IGetFoldersPayload>) {
    try {
        const response = yield* call(FolderService.getFolders, action.payload);

        if (response.success) {
            yield put(getFoldersSuccess(response.data));
        } else {
            yield put(getFoldersFailed(response.message));
        }
    } catch (err) {
        console.log('Error: ', err);
        yield put(getFoldersFailed('Network or server error'));
    }
}

function* getMoreFoldersSaga(action: PayloadAction<IGetFoldersPayload>) {
    try {
        yield delay(1000);
        const response = yield* call(FolderService.getFolders, action.payload);

        if (response.success) {
            yield put(getMoreFoldersSuccess(response.data));
        } else {
            yield put(getMoreFoldersFailed(response));
        }
    } catch (err) {
        yield put(getFoldersFailed('Network or server error'));
    }
}

function* addFolderSaga(action: PayloadAction<IFolder>) {
    try {
        const response = yield* call(FolderService.addFolder, action.payload);

        if (response.success) {
            yield put(addFolderSuccess(response.data as IFolder));
            // showSuccessToaster('Folder created successfully!');
        } else {
            yield put(addFolderFailed(response.message as string));
            // showErrorToaster(response.message);
        }
    } catch (err) {
        yield put(addFolderFailed('Error happen!'));
    }
}

function* updateFolderSaga(action: PayloadAction<IFolder>) {
    try {
        const response = yield* call(FolderService.updateFolder, action.payload);

        if (response.success) {
            yield put(updateFolderSuccess(action.payload));
            // showSuccessToaster('Folder color updated successfully.');
        } else {
            yield put(updateFolderFailed(response.message as string));
            // showErrorToaster('Failed update folder color!') ;
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

function* updateFolderNameSaga(action: PayloadAction<IFolder>) {
    try {
        const response = yield* call(FolderService.updateFolder, action.payload);

        if (response.success) {
            yield put(updateFolderSuccess(action.payload));
            // showSuccessToaster('Folder name changed successfully.');
        } else {
            yield put(updateFolderFailed(response.message as string));
            // showErrorToaster(response.message);
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

function* deleteFolderSaga(action: PayloadAction<number>) {
    try {
        const response = yield* call(FolderService.deleteFolder, action.payload);

        if (response.success) {
            yield put(deleteFolderSuccess(action.payload));
            // showSuccessToaster('Folder deleted successfully.');
        } else {
            yield put(deleteFolderFailed(response.message as string));
            // showErrorToaster('Failed folder delete!');
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

export default function* formFolderSaga() {
    yield all([formFolderWatcher()]);
}
