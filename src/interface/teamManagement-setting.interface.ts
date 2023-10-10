export interface IProps {
    open: boolean;
    onClose: () => void;
}

export interface IFormValues {
    profileLogo: string,
    firstName: string,
    lastName: string,
    email?: string,
    number: string,
    role: string,
    enableSignature?: boolean,
    includeSignature?: boolean,
    emailSignature?: string
}

export interface IUserRole {
    id: number,
    role: string
}