export const compressStringFirst = (str = '', length = 10, showAll = false) => {
    if (showAll) return str;
    if (str && str.length > length) {
        return '...' + str.slice(str.length - length - 1);
    }
    return str;
};

export const compressStringLast = (str = '', length = 10, showAll = false) => {
    if (showAll) return str;
    if (str && str.length > length) {
        return str.slice(0, length) + '...';
    }
    return str;
};

export const compressStringMiddle = (str = '', length = 10, endLength = 5, showAll = false) => {
    if (showAll) return str;
    if (str && str.length > length) {
        return str.slice(0, length - endLength - 3) + '...' + str.slice(str.length - endLength);
    }
    return str;
};
