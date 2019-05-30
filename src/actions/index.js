// TODO: add and export your own actions

import { cities } from '../cities.js'

export function setCities() {
  console.log('setcities has been called');
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}
