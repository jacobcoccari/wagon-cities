export default function setActiveCity(city) {
  console.log({city});
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}


