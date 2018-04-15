import assign from 'object-assign';

import { TOGGLE_HELLO_WORLD_COLOR } from './types';

const initialState = {
  color: 'red',
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HELLO_WORLD_COLOR:
      return assign({}, state, {
        color: state.color === 'red' ? 'blue' : 'red',
      });

    default:
      return state;
  }
}
