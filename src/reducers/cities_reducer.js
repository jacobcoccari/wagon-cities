export default function(state, action) {
  console.log('cities_reducer has been called');
  //compute and return the new state.
  if (state === undefined) {
    return []
  }

  switch(action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
  //handle actions
}
