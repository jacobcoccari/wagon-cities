import React, {Component} from 'react';

import City from './city.jsx';

class CityList extends Component {
  renderlist = () => {
    return(props.cities.map((city) => <Flat name={city.name}/>));
  }

  render() {
    return (<div>
      {this.renderlist()}
    </div>);
  }
}

export default CityList;
