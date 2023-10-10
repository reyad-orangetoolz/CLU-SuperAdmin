const copyFromClipBoard = (htmlCode: string) => {
    navigator.clipboard
        .writeText(htmlCode)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};

export default copyFromClipBoard;
