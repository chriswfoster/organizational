import DELETE from "./DELETE"
import GET from "./GET"
import POST from "./POST"
import PUT from "./PUT"
import {FormattedEvent} from '../interfaces/index';

const routerControllers: any = {
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE,
}

export default async(event: FormattedEvent) => {
    console.log("Formatted Request Obj: ", event);
    
    const {endpoint, method} = event;
    const splitEndpoint = endpoint.split('?')[0].split('/');
    const controllerPath = splitEndpoint[1];
    const controllerMethod = splitEndpoint[2];
    if(method && routerControllers.hasOwnProperty(method)) {
        if(
            routerControllers[method].hasOwnProperty(controllerPath) &&
            controllerMethod && 
            routerControllers[method][controllerPath].hasOwnProperty(controllerMethod)
        ) { 
                return await routerControllers[method][controllerPath][controllerMethod](event)
        } else {
            console.log("endpoint not found:", endpoint)
            throw 'notFound'
        }
        // return routerControllers[method](event);
    } else {
        throw 'methodNotAllowed'
    }
}