export const creditSettingPattern = {
    cost: {
        required: 'Cost should not be empty!',
        pattern: {
            value: /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/,
            message: 'Invalid cost rate',
        },
        max: {
            value: 50,
            message: 'Credit cost must be less than 30!',
        },
    },
};
