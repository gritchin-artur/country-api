export const flatHandler = (data) => {
    let output = [];

    for (let i = 0; i < Object.keys(data).length; i++) {
        const key = Object.keys(data)[i];
        output.push(data[key]);
    }
    return output;
};
