import { FormattedEvent } from "../../interfaces";
import axios from 'axios'
require('dotenv').config();



export const test = async(eventObj: FormattedEvent) => {
	const {
		merchantId,
		authToken,
		sid
	} = eventObj.body;
    return new Promise((resolve, reject) => {
        axios.get('https://swapi.dev/api/people/1/')
        .then(resp => {
            console.log('the resp', resp)
            resolve(resp.data)
        })
        .catch(err => reject("TEH ERR: "+ JSON.stringify(err)));
    })
		
}
