import { combineReducers } from '@reduxjs/toolkit';
import folderSlice from './features/folder/folderSlice';

const rootReducer = combineReducers({
    folder: folderSlice,
});

export default rootReducer;
