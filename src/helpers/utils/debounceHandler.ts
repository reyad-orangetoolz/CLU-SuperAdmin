export const debounceHandler = <T>(fn: (...args: T[]) => void, delay: number) => {
    // @ts-ignore
    let timerId: NodeJS.Timeout;
    return (...args: T[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
