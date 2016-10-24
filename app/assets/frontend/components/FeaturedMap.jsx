import React, { Component, PropTypes } from 'react';
import { tileLayer } from 'leaflet';
import { Map as ReactMap, BaseTileLayer } from 'react-leaflet';

// from github.com/stamen , https://github.com/stamen/panorama/blob/master/cartodb-tilelayer/es6/index.jsx

// Not possible until CartoDB releases an npm package for the Core API.
// import { Tiles } from 'cartodb';

// Until then, consumer applications must include the cartodb.js script elsewhere,
// e.g. in index.html as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js"></script>

let initialColors = '/** category visualization */ #commareas_chicago { polygon-opacity: 0.7; line-color: #FF6600; line-width: 0.5; line-opacity: 1; } #commareas_chicago[community="BRIGHTON PARK"] { polygon-fill: #A6CEE3; } #commareas_chicago[community="DOUGLAS"] { polygon-fill: #1F78B4; } #commareas_chicago[community="ENGLEWOOD"] { polygon-fill: #B2DF8A; } #commareas_chicago[community="GRAND BOULEVARD"] { polygon-fill: #33A02C; } #commareas_chicago[community="IRVING PARK"] { polygon-fill: #FB9A99; } #commareas_chicago[community="NEAR NORTH SIDE"] { polygon-fill: #E31A1C; } #commareas_chicago[community="SOUTH SHORE"] { polygon-fill: #FDBF6F; } #commareas_chicago[community="WEST ELSDON"] { polygon-fill: #FF7F00; } #commareas_chicago[community="WEST LAWN"] { polygon-fill: #CAB2D6; } #commareas_chicago[community="WOODLAWN"] { polygon-fill: #6A3D9A; } #commareas_chicago { polygon-fill: #DDDDDD; }';

let initialSql = "select * from commareas_chicago";



class CartoDBTileLayer extends BaseTileLayer {

  static propTypes = {
    userId: PropTypes.string,
    sql: PropTypes.string,
    cartocss: PropTypes.string
  };
  //
  // static defaultProps = {
  //   userId: "renemarcelo",
  //   sql: initialSql,
  //   cartocss: initialColors
  // };

  componentWillMount () {

    super.componentWillMount();

    if (!cartodb) {
      throw new Error('CartoDBTileLayer requires `cartodb`. `cartodb` is not currently available as an npm package and therefore must be loaded as a global, e.g. via a CDN script in your index.html, such as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js">');
    }

    this.leafletElement = tileLayer('', this.props);
    console.log(this.leafletElement)

    this._getCartoDBTilesTemplates(function (error, response) {
      if (error) {
        // TODO: handle error
        console.error(error);
      } else {
        this.leafletElement.setUrl(response.tiles[0]);
      }
    }.bind(this));
  }

  _getCartoDBTilesTemplates (callback) {
    cartodb.Tiles.getTiles({
      type: 'cartodb',
      user_name: this.props.userId,
      sublayers: [{
        sql: this.props.sql,
        cartocss: this.props.cartocss
      }]
    },

    function (tiles, error) {
      if (!tiles || error) {
        if (!error) {
          error = 'Empty response.';
        }
        callback(error, tiles);
      } else {
        callback(null, tiles);
      }
      console.error(error);


    });
  }

}

export default class FeaturedMap extends Component {
  render() {
    return (
      <ReactMap h>
        <CartoDBTileLayer
          userId="renemarcelo"
          cartocss={initialColors}
          sql={initialSql} />
      </ReactMap>
    );
  }
}
