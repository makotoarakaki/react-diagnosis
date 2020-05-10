/*
import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS

} from '../actions'
*/
const events = (state = [], action) => {
  const event = {
    count: action.count,
    insei: action.insei,
    chuyou: action.chuyou,
    yousei: action.yousei,
  }
  console.log('event', event);

  const length = state.length;
  const id = length === 0 ? 1 : state[length - 1].id + 1;
  return [...state, { id, ...event}];
/*
  switch (action.type) {
    case CREATE_EVENT:
//      const event = { title: action.title, body: action.body }
console.log('events.CREATE_EVENT', action.count);
      const event = { count: action.count }
console.log('event', event);
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event}];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
*/
}

export default events;
