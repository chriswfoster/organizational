import { FormattedEvent } from "../interfaces";
import { validateToken } from "../utils/auth/passport";
import {login, tokenLogin} from './controllers/auth'; 






export default {
    auth: {
        login: login,
        tokenLogin: (evObj: FormattedEvent) => validateToken(tokenLogin, evObj),
    },
}