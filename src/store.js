import { combineReducers } from 'redux';
import { createStore } from 'redux';

const setActiveSidebarItemReducer = (state = null, action) => {
  switch (action.type) {
    case 'ACTIVE_SIDEBAR_ITEM':
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  activeItem: setActiveSidebarItemReducer
});

const store = createStore(allReducers);

export default store;
