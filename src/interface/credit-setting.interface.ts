export interface IPropsModal {
    title?: string;
    open: boolean;
    onClose: () => void;
    type: string;
}

export interface IFormValues {
    cost: number;
    costMedia: number;
}