export const registerPatternFolder = {
    name: {
        required: 'Folder name is required!',
        maxLength: {
            value: 30,
            message: 'Folder name cannot be longer than 30 characters!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
};
