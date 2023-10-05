const getFullName = (firstName: string, lastName: string, defaultValue = 'N/A') => {
    let fullName = '';
    if (firstName) fullName += firstName + ' ';
    if (lastName) fullName += lastName;
    return fullName || defaultValue;
};

export default getFullName;
