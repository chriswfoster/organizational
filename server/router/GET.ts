import {test} from './controllers/test'; 
import {validateToken} from '../utils/auth/passport';
import { FormattedEvent } from '../interfaces';

export default {
    test: {
        test: (evObj: FormattedEvent) => validateToken(test, evObj),
    }
}