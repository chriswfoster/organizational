module.exports = {
    error: {
        "statusCode": 500,
        "statusMessage": 'Internal Server Error',
    },
    success: {
        "statusCode": 200,
        "statusMessage": 'OK',
    },
    unauthorized: {
        "statusCode": 401,
        "statusMessage": "Unauthorized"
    },
    notFound: {
        "statusCode": 404,
        "statusMessage": "Not Found"
    },
    methodNotAllowed: {
        "statusCode": 405,
        "statusMessage": "Method Not Allowed"
    }
}