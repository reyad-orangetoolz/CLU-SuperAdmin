import { combineReducers } from '@reduxjs/toolkit';
import folderSlice from './features/folder/folderSlice';
import teamSlice from './features/settings/teamMember/teamSlice';

const rootReducer = combineReducers({
    folder: folderSlice,
    team: teamSlice
});

export default rootReducer;
