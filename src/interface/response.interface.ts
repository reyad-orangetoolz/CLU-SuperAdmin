export interface WithPagination<T> {
    content: T[];
    count: number;
    currentPage: number;
    limit: number;
    nextPage: number;
    totalPages: number;
}

interface SuccessResponseIn<T> {
    status: number;
    success: true;
    message?: string;
    data: T;
}

export interface ErrorResponseInterface {
    status: number;
    success: false;
    message: string;
}

export type ResponseInterface<T> = SuccessResponseIn<T> | ErrorResponseInterface;

export default ResponseInterface;
