const emailPattern = /^\w+([\\.-\\+]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const teamManagementSettingPattern = {
    name: {
        required: 'First name is required',
        maxLength: {
            value: 50,
            message: 'First name must have less than 50 characters!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
    email: {
        required: 'Email is required!',
        pattern: {
            value: emailPattern,
            message: 'Email is invalid!',
        },
        maxLength: {
            value: 50,
            message: 'Email must have less than 50 characters!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
    number: {
        pattern: {
            value: /^[0-9]+$/,
            message: 'Invalid phone number!',
        },
        minLength: {
            value: 11,
            message: 'Phone number must have minimum 11 digits!',
        },
        maxLength: {
            value: 16,
            message: 'Phone number must have less than 16 digits!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
};