export default function selectCity(city) {
  console.log('setactivecity called');
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}


