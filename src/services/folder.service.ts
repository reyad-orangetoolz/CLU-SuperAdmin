import httpRequest from './api/httpRequest';
import { WithPagination } from '../interface/response.interface';
import { IFolder, IGetFoldersPayload } from '../interface/folder.interface.ts';

class FolderService {
    getFolders(params: IGetFoldersPayload) {
        return httpRequest.get<WithPagination<IFolder[]>>('invoice-builder/folder/list', params);
    }

    addFolder(folder: IFolder) {
        return httpRequest.post<IFolder>('invoice-builder/folder/create', folder);
    }

    updateFolder(folder: IFolder) {
        return httpRequest.put<IFolder>('invoice-builder/folder/update', folder);
    }

    deleteFolder(id: number) {
        return httpRequest.delete<IFolder>('invoice-builder/folder/delete', { id: id });
    }
}

export default new FolderService();
