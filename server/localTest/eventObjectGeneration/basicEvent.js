const { v4: uuidv4 } = require("uuid");

let testStaticEvent = false;

const basicEvent = (req) => {
    if (!testStaticEvent) {

        let rawQueryString = '';
        if(Object.keys(req.query).length > 0) {
            rawQueryString = Object.keys(req.query).map(queryKey => {
                return `${queryKey}=${req.query[queryKey] || ''}`
            }).join(',');
        }
        return ({
            "version": "2.0",
            "routeKey": "$default",
            "rawPath": req.url,
            rawQueryString: rawQueryString,
            "headers": {
                "sec-fetch-mode": "cors",
                "referer": "http://localhost/",
                "sec-fetch-site": "cross-site",
                "accept-language": "en-US,en;q=0.5",
                "x-forwarded-proto": "https",
                "origin": "http://localhost",
                "x-forwarded-port": "443",
                "x-forwarded-for": "111.111.111.111",
                "accept": "application/json, text/plain, */*",
                "x-amzn-trace-id": "Root=1abc-123",
                "host": "local",
                "accept-encoding": "gzip, deflate, br",
                "sec-fetch-dest": "empty",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
                ...req.headers
            },
            "queryStringParameters": req.query,
            "requestContext": {
                "accountId": "anonymous",
                "apiId": "abc123",
                "domainName": "abc123.lambda-url.us-east-1.on.aws",
                "domainPrefix": "abc123",
                http: {
                    "method": req.method,
                    "path": req.url,
                    "protocol": "HTTP/1.1",
                    "sourceIp": "111.111.111.111",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0"
                },
                "requestId": uuidv4(),
                "routeKey": "$default",
                "stage": "$default",
                "time": "31/May/2022:15:06:31 +0000",
                "timeEpoch": 1654009591339
            },
            body: req.body,
            "isBase64Encoded": false
        })
    } else {
        return ({
            "version": "2.0",
            "routeKey": "$default",
            "rawPath": "/test/test",
            "rawQueryString": "",
            "headers": {
                "x-forwarded-proto": "https",
                "postman-token": "abc123",
                "x-forwarded-port": "443",
                "x-forwarded-for": "111.111.111.111",
                "accept": "*/*",
                "x-amzn-trace-id": "abc123",
                "x-api-key": "xyz134",
                "host": "abc123.lambda-url.us-east-1.on.aws",
                "cache-control": "no-cache",
                "accept-encoding": "gzip, deflate, br",
                "user-agent": "PostmanRuntime/7.29.0"
            },
            "requestContext": {
                "accountId": "anonymous",
                "apiId": "abc123",
                "domainName": "abc123.lambda-url.us-east-1.on.aws",
                "domainPrefix": "abc123",
                "http": {
                    "method": "GET",
                    "path": "/test/test",
                    "protocol": "HTTP/1.1",
                    "sourceIp": "68.203.129.193",
                    "userAgent": "PostmanRuntime/7.29.0"
                },
                "requestId": "abc123",
                "routeKey": "$default",
                "stage": "$default",
                "time": "02/Jun/2022:01:41:09 +0000",
                "timeEpoch": 1654134069049
            },
            "isBase64Encoded": false
        })
    }
}
    
    module.exports = basicEvent;