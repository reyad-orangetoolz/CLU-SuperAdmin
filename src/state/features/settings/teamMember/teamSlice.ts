import { createSlice } from '@reduxjs/toolkit'
import { ITeamManagement } from './team.interface';

const initialState: ITeamManagement = {
    isCreateRole: false,
}

export const teamSlice = createSlice({
    name: 'team',
    initialState: initialState,
    reducers: {
        attemptCreateRoleOpen: (state) => {
            state.isCreateRole = true;
        },
        attemptCreateRoleClear: (state) => {
            state.isCreateRole = false;
        },
    }
})

export const {
    attemptCreateRoleOpen,
    attemptCreateRoleClear
} = teamSlice.actions;

export default teamSlice.reducer;
