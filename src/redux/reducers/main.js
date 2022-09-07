//add and create all the reducers.. add combine reducer... and now we are send to store..

import { combineReducers } from "redux";
import { cartreducer } from './reducer';

const rootred = combineReducers({
    cartreducer
});

export default rootred;