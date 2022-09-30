const basicEvent = require('./basicEvent');


const generateLambdaEvent = (req) => {
    return basicEvent(req);
}


module.exports = generateLambdaEvent;