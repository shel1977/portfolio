

export const required = value => {
    if (value) return undefined;
    return 'required field'
};
export const email = value => {
   return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
};