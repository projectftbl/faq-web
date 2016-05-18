import { combineReducers } from 'redux'; 
import faq from './ducks/faq';  

export default function(data) {
  return combineReducers({
    faq: faq(data)
  });
};