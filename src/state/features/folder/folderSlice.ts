import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WithPagination } from '../../../interface/response.interface';
import { IFolder, IGetFoldersPayload } from './folder.interface';

const initialState = {
    data: [] as IFolder[],
    isLoading: false,
    isError: false,
    error: '',
    count: 0,
    currentPage: 1,
    limit: 20,
    nextPage: 1,
    totalPages: 1,
    hasMore: true,

    folder: {} as IFolder,

    isFetching: false,
    isFetchingSuccess: false,

    isAdding: false,
    isAddSuccess: false,

    isDeleting: false,
    isDeleteSuccess: false,

    isUpdating: false,
    isUpdateSuccess: false,
};

const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        getFolders: (state, _action: PayloadAction<IGetFoldersPayload | undefined>) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        },
        getFoldersSuccess: (state, action: PayloadAction<WithPagination<IFolder>>) => {
            state.data = action.payload.content;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.count = action.payload.count || 1;
            state.isLoading = false;
            state.hasMore = action.payload.content?.length >= action.payload.limit;
        },
        getFoldersFailed: (state, action) => {
            state.data = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },

        getMoreFolders: (state, _action) => {
            state.isLoading = true;
        },
        getMoreFoldersSuccess: (state, action: PayloadAction<WithPagination<IFolder>>) => {
            state.data = [...state.data, ...action.payload.content];
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.count = action.payload.count || 1;
            state.isLoading = false;
            state.hasMore = action.payload.content?.length >= action.payload.limit;
        },
        getMoreFoldersFailed: (state, action) => {
            state.isError = true;
            state.error = action.payload;
            state.isLoading = false;
        },

        addFolder: (state, _action: PayloadAction<IFolder>) => {
            state.isAdding = true;
            state.isError = false;
            state.error = '';
        },
        addFolderSuccess: (state, action: PayloadAction<IFolder>) => {
            if (action.payload?.id) {
                state.data.push(action.payload);
                state.count += 1;
            }
            state.isAdding = false;
            state.isAddSuccess = true;
        },
        addFolderFailed: (state, action: PayloadAction<string>) => {
            state.isAdding = false;
            state.isError = true;
            state.error = action.payload;
        },
        resetAddFolderSuccess: (state) => {
            state.isAddSuccess = false;
        },

        updateFolder: (state, _action: PayloadAction<IFolder>) => {
            state.isUpdating = true;
        },
        updateFolderName: (state, _action: PayloadAction<IFolder>) => {
            state.isUpdating = true;
        },
        updateFolderSuccess: (state, action: PayloadAction<IFolder>) => {
            if (action.payload.id) {
                state.data = state.data.map((folder) => {
                    if (folder.id === action.payload.id) {
                        folder = action.payload;
                    }
                    return folder;
                });
            }
            state.isUpdating = false;
            state.isUpdateSuccess = true;
        },
        updateFolderFailed: (state, action: PayloadAction<string>) => {
            state.isUpdating = false;
            state.isError = true;
            state.error = action.payload;
        },
        resetUpdateFolderSuccess: (state) => {
            state.isUpdateSuccess = false;
        },

        deleteFolder: (state, _action: PayloadAction<number>) => {
            state.isDeleting = true;
        },
        deleteFolderSuccess: (state, action: PayloadAction<number>) => {
            if (action.payload) {
                state.data = state.data.filter((folder) => folder.id !== action.payload);
            }
            state.isDeleting = false;
            state.isDeleteSuccess = true;
        },
        deleteFolderFailed: (state, action: PayloadAction<string>) => {
            state.isDeleting = false;
            state.isError = true;
            state.error = action.payload;
        },
        resetDeleteFolderSuccess: (state) => {
            state.isDeleteSuccess = false;
        },
    },
});

export const {
    getFolders,
    getFoldersFailed,
    getFoldersSuccess,

    getMoreFolders,
    getMoreFoldersFailed,
    getMoreFoldersSuccess,

    addFolder,
    updateFolderName,
    addFolderFailed,
    addFolderSuccess,

    deleteFolder,
    deleteFolderFailed,
    deleteFolderSuccess,

    resetAddFolderSuccess,
    resetDeleteFolderSuccess,
    resetUpdateFolderSuccess,

    updateFolder,
    updateFolderFailed,
    updateFolderSuccess,
} = folderSlice.actions;

export default folderSlice.reducer;
