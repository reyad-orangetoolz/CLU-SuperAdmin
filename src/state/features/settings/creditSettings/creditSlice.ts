import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    costRate: 0
}

export const creditSlice = createSlice({
    name: 'credit',
    initialState: initialState,
    reducers: {
        attemptCreateRoleOpen: (state, action) => {
            state.costRate = action?.payload.data;
        },
        attemptCreateRoleClear: (state) => {
            state.costRate = 0;
        },
    }
})

export const {
    attemptCreateRoleOpen,
    attemptCreateRoleClear
} = creditSlice.actions;

export default creditSlice.reducer;
