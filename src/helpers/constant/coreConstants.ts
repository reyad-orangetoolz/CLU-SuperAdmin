export const STATUS = {
    PENDING: 0,
    PROCESSING: 1,
    COMPLETE: 2,
    FAILED: 3,
};

export const GLOBAL_DELAY = {
    DEBOUNCE: 1000,
    RESPONSE: 1000,
};

export const BASIC_SETTING_MODAL_TYPE = {
    EDIT_CREDIT: 1,
    SMS_FORWARD: 2,
    CALL_FORWARD: 3,
    NOTIFICATION_SENDER: 4,
};

export const SELECT_INPUT_DATA = [
    {
        title: 'USA',
        value: '+1(555)',
    },
    {
        title: 'BAN',
        value: '+880',
    },
    {
        title: 'CHN',
        value: '+86',
    },
];

export const USER_ROLE = {
    OWNER: 1,
    DEVELOPER: 2,
    CUSTOMER_SUPPORT: 3,
};

export const USER_STATUS = {
    DISABLE: 3,
    ACTIVE: 1,
    PENDING: 2,
};

// constant key for credit settings handle
export const CREDIT_SETTING_MODAL_TYPE = {
    SMS: {
        type: 'SMS',
        credit: 0.01000,
    },
    MMS: {
        type: 'MMS',
        credit: 0.04000,
    },
    RINGLESS_VOICE_MAIL: {
        type: 'RINGLESS VOICEMAIL',
        credit: 0.02000,
    }
}