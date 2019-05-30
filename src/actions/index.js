// TODO: add and export your own actions
import { combineReducers } from 'redux';
import CitiesReducer from '../reducers/cities_reducer';

const rootReducer = combineReducers({
  setCities: CitiesReducer,
});

export default rootReducer;


