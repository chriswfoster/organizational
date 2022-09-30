import router from './router';
import {formatEventObj} from './utils/formatEventObj';
const responseCodes = require('./utils/responseCodes');
require('dotenv').config();


exports.handler = async(event: any, context: any, callback: any) => {
    console.log('Loading event');
    console.log("Request received:\n", JSON.stringify(event));
    try {
        const formattedEventObj = await formatEventObj(event);
        const data = await router(formattedEventObj);
        const successResponse = responseCodes.success;
        successResponse.body = data;
        // console.log("successResponse : ", successResponse)
        callback(null, successResponse)
    }
    catch(e: any){
        console.log('ERROR: ', e)
        if(typeof e === 'string' && responseCodes.hasOwnProperty(e)) {
            callback(null, responseCodes[e]);
        } else {
            callback(null, responseCodes.error);
        }

    }
    const cleanedEventObj = {};
}