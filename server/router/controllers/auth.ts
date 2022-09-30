import { FormattedEvent } from "../../interfaces";
const jwt = require ('jsonwebtoken');

require('dotenv').config();



export const login = async(eventObj: FormattedEvent) => {
 
}
export const tokenLogin = async(eventObj: FormattedEvent) => {
    // if I made it here, it's already been checked
    return await succeed(eventObj);
}

async function succeed(eventObj: FormattedEvent) {
    console.log("login sent back");
    let apiKey = eventObj.authToken;
    if(!apiKey || apiKey === 'undefined') {
        apiKey = generateAPIKey();
        console.log("Had to generate apiKey")
    }
    console.log("after apiKey thing")
    let response = {
        apiKey,
        apiToken: apiKey,
    };
    return response
}

function generateAPIKey() {
    return jwt.sign({createdDate: new Date()}, process.env.API_KEY)
}