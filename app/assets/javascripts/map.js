
function main() {
 cartodb.createVis('map', 'https://renemarcelo.cartodb.com/api/v2/viz/bc2f2152-e23b-11e5-8caa-0e3ff518bd15/viz.json', {
     shareable: false,
     title: false,
     description: false,
     search: false,
     tiles_loader: true,
    //  center_lat: 0,
    //  center_lon: 0,
     zoom: 2
 })
 .done(function(vis, layers) {
   // layer 0 is the base layer, layer 1 is cartodb layer
   // setInteraction is disabled by default
   layers[1].setInteraction(true);
   layers[1].on('featureOver', function(e, latlng, pos, data) {
     cartodb.log.log(e, latlng, pos, data);
   });
   // you can get the native map to work with it
   var map = vis.getNativeMap();
   // now, perform any operations you need
   map.setZoom(10);
   map.panTo([41.8, -87.6]);
 })
 .error(function(err) {
   console.log(err);
 });
}
window.onload = main;
