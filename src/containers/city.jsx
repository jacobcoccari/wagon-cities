import React, {Component} from 'react';

class City extends Component {
  render() {
    return(<div className="city-name" >
      {this.props.name}</div>);
  }
}

export default City;
