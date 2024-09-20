import { composeWithDevTools } from "@redux-devtools/extension";

import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from 'redux-thunk'
import { authReducer } from "./Reducers/auth.reducer";

const rootReducer = combineReducers({
    auth : authReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
export default store;