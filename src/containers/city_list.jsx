import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index.js';

import City from './city.jsx';

class CityList extends Component {
  renderlist = () => {
    console.log("CityList has rendered  and renderedlist")
    return(this.props.cities.map((city) => <City name={city.name}/>));
  }

  componentWillMount() {
    //dispatch an action to fetch all of the cities
  }

  render() {
    return (<ul className="list-group cities">
      {this.renderlist()}
    </ul>);
  }
}

export default CityList;
