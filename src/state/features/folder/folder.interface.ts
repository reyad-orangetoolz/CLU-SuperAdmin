export interface IFolder {
    id?: number;
    name: string;
    color?: string;
}

export interface IGetFoldersPayload {
    currentPage: number;
    limit: number;
}
