import {createStore} from 'redux';
import jokesReducer from "../reducers/jokesReducer";

// export default () => {
  const store = createStore(jokesReducer);
//   return store;
// }

export default store;