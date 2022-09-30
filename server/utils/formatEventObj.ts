export const formatEventObj = (eventObj: any) => {
    
    return ({
        endpoint: eventObj.rawPath,
        method: eventObj?.requestContext?.http?.method,
        body: eventObj.body || {},
        query: eventObj.queryStringParameters || {},
        authToken: eventObj.headers['x-api-key'] || eventObj.headers.authorization || '',
        headers: eventObj.headers,
    });
}
