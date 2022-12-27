exports.handler = async (event) => {
    try {
    console.log('Hello World!');
    //console.error('Hello World! - 1');
        throw new Error("error");
        
    } catch (e) {
        console.error(e)
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!'),
    };
    return response;
};
