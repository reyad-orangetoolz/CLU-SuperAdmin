export const creditSettingsPattern = {
    cost: {
        required: 'Cost should not be empty!',
        pattern: {
            value: /[+-]?([0-9]*[.])?[0-9]+/,
            message: 'Only number allow',
        },
        max: {
            value: 50,
            message: 'Credit cost must be less than 30!',
        },
    },
};
