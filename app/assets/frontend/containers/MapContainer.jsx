import React, { Component } from 'react';

export default class MapContainer extends Component {
  constructor() {
    super();
    this.state = { initialMap: true, useSearchMap: false }
  }


  render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    );
  }
}
