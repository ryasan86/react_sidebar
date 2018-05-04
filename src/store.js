import { combineReducers } from 'redux';
import { createStore } from 'redux';

// reducers
const changeThemeReducer = (state = 'blue', action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: changeThemeReducer
});

// store
export const store = createStore(allReducers);
