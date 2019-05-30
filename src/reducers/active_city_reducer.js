export default function(state = null, action) {
  switch (action.type) {
    console.log('activecityreducer');
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
