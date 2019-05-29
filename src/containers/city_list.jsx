import React, {Component} from 'react';

import City from './city.jsx';

class CityList extends Component {
  renderlist = () => {
    console.log("CityList has rendered  and renderedlist")
    return(this.props.cities.map((city) => <City name={city.name}/>));
  }

  render() {
    return (<div className="list-group-item">
      {this.renderlist()}
    </div>);
  }
}

export default CityList;
