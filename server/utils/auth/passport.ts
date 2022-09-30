import {FormattedEvent, ControllerMethod} from '../../interfaces/index';

const jwt = require('jsonwebtoken');
require('dotenv').config()

export const createToken = () => {

}

export const validateToken = (callback: ControllerMethod, eventObj: FormattedEvent) => {
    const authToken: string = eventObj.authToken;
    try {
        jwt.verify(authToken, process.env.API_KEY)
        return callback(eventObj);
    }
    catch(e) {
        console.log("uh oh e", e)
        throw 'unauthorized';
    }
}