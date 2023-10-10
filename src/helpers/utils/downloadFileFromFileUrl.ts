const downloadFileFromFileUrl = (file_url: string) => {
    try {
        const link = document.createElement('a');
        link.href = file_url;
        link.setAttribute('download', file_url);
        document.body.appendChild(link);
        link.click();
    } catch (e) {
        console.log('Error:: ', e);
    }
};

export default downloadFileFromFileUrl;
