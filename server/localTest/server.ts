const express = require('express');
const cors = require('cors');
const {json} = require('body-parser')
const generateLambdaEvent = require('./eventObjectGeneration/generateLambdaEvent');
const lambdaFn = require('../index');

const PORT = 3358;

const app = express();
app.use(cors());
app.use(json());

const handleEvent = async(req: any, res: any) => {
    const eventObj = generateLambdaEvent(req);
    // console.log("eventObj: ", eventObj)
    const contextObj: any = {
        succeed: (responseObj: any) => {
            res.send(responseObj);
        }
    }

    const callbackFn = (errMsg: string, responseObj: any) => {
        // console.log("the resp obj: ", responseObj)
        res.status(responseObj.statusCode).send(responseObj.body);
    }

    await lambdaFn.handler(eventObj, contextObj, callbackFn);
}

app.all('*', handleEvent);



app.listen(PORT, ()=> console.log("Running on port: ", PORT))