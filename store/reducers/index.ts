import { combineReducers } from 'redux'
import userReducer from './userReducer'
import propsReducer from './propsReducer'

export default combineReducers({
  usersList: userReducer,
  propsList: propsReducer
})