export const arrayEquals = <T>(a: T[], b: T[]) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val) => b.indexOf(val) !== -1);
};

export const isEmptyArray = (arr: unknown[]) => {
    return Array.isArray(arr) && arr.length === 0;
};

export const castArray = <T>(value: T | T[]) => {
    return value ? (Array.isArray(value) ? value : [value]) : [];
};

export const arrayToCommaString = <T>(arr: T[] = []) => {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr.join(',');
    }
    return '';
};

export const removeDuplicates = (arr: unknown[]) => {
    if (!Array.isArray(arr)) return [];
    return [...new Set(arr)];
};
