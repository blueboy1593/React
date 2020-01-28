import { combinReducers } from 'redux';
import counter from './Counter';

const rootReducer = combinReducers({
    counter
});

export default rootReducer;