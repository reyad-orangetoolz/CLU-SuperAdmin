const emailPattern = /^\w+([\\.-\\+]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const registerPattern = {
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
    password: {
        required: 'Password is required',
        minLength: {
            value: 6,
            message: 'Password must have at least 6 characters',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },

    first_name: {
        required: 'First name is required',
        maxLength: {
            value: 50,
            message: 'First name must have less than 50 characters!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
    last_name: {
        required: 'Last name is required',
        maxLength: {
            value: 50,
            message: 'Last name must have less than 50 characters!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
    phone: {
        required: 'Phone number is required',
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
    web_site_url: {
        required: false,
        pattern: {
            value: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,
            message: 'Invalid website url!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },

    client_secret: {
        required: 'Client Secret key is required.',
        pattern: {
            value: /^\S*$/,
            message: 'White space is not allow',
        },
    },
    charge_amount: {
        required: 'Stripe Payment Charge is required.',
        pattern: {
            value: /^\d*[.]?\d*$/,
            message: 'Invalid charge amount value !',
        },
        max: {
            value: 50,
            message: 'Payment Charge must be less than 50',
        },
    },

    topUp_amount: {
        required: 'Amount is required.',
        pattern: {
            value: /^\d*[.]?\d*$/,
            message: 'Invalid amount value !',
        },
        min: {
            value: 10,
            message: 'Minimum amount value is 10',
        },
    },

    sender_address: {
        required: 'Sender address is required',
        pattern: {
            value: /^[0-9]+$/,
            message: 'Invalid sender address!',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
    formTitle: {
        required: 'Form title is required!',
        pattern: {
            value: /^(?!\s*$).+/,
            message: 'Form title is empty',
        },
        maxLength: {
            value: 30,
            message: 'Form title cannot be longer than 30 characters',
        },
        setValueAs: (v: string) => (v ? v.trim() : ''),
    },
};

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
