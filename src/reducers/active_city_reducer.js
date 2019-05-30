export default function(state = null, action) {
  console.log('activecityreducer');
  switch (action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
