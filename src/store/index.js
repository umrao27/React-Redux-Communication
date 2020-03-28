import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer'
import thunk from "redux-thunk";

/**
 * combineReducers - For combining the multiple Reducer and pass to store
 */
const AllReducers = combineReducers({person:personReducer, game:gameReducer, users:userReducer});

/**
 * To Set the initial values to the Reducer
 */
const initialState = {
   person:{name:'Rahul',email:'vit.rahul@gmail.com'},
   game:{name:'Football'},
   users:[]
 }

 /**
  *  thunk - For making the async calls 
  */
const middleware = [thunk];
const store = createStore(AllReducers,initialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;