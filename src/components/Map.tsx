import React, { useEffect } from 'react' 
// import { useQuery } from 'react-query'
// import { getApiData } from '../repository/api'
import L from 'leaflet'
import virus from '../icons/virus.png';
import {cayoDistrict}  from '../geoJson/cayo'

export default function BelizeMap (props:any)  {
  console.log(props)
    // const { data, isLoading, error } = useQuery('mapdata', getApiData);
     useEffect(() => {
      var mymap = L.map('mapid').setView([17.1899, -88.4976], 8);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap);
      let virusIcon = L.icon({
        iconUrl: virus, 
        iconSize:     [20, 20], // size of the icon 
        iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location 
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    let featureCollection: GeoJSON.FeatureCollection<any> = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [...cayoDistrict]
          },
          properties: {}
        }
      ]
    };

    let sanPedroStats = `
      <div>
        <h1>San Pedro</h1>
        <b>confirmed ✅: 324 </b>
        <b>active 🦠: 39 </b>
        <b>deaths ☠️: 1</b>
      </div>
    `;


    let corozalStats = `
      <div>
        <h1>Corozal</h1>
        <b>confirmed ✅: 659 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a</b>
      </div>
    `;


    let orangeWalkStats = `
      <div>
        <h1>Orange Walk</h1>
        <b>confirmed ✅: 1264 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a</b>
      </div>
    `;


    let belizeCityStats = `
      <div>
        <h1>Belize City</h1>
        <b>confirmed ✅: 751 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a</b>
      </div>
    `;


    let cayoStats = `
      <div>
        <h1>Cayo</h1>
        <b>confirmed ✅: 492 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a </b>
      </div>
    `;


    let stannCreekStats = `
      <div>
        <h1>Stann Creek</h1>
        <b>confirmed ✅: 220 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a</b>
      </div>
    `;
     
    
    let toledoStats = `
      <div>
        <h1>Toledo</h1>
        <b>confirmed ✅: 1373 </b>
        <b>active 🦠: n/a </b>
        <b>deaths ☠️: n/a </b>
      </div>
    `;

      L.marker([17.920596087711704, -87.96117782592773], {icon: virusIcon}).addTo(mymap)
        .bindPopup(sanPedroStats).openPopup();

      L.marker([18.391669187688766, -88.39324951171875], {icon: virusIcon}).addTo(mymap)
      .bindPopup(corozalStats).openPopup();

      L.marker([17.25066245705116, -88.77090454101562], {icon: virusIcon}).addTo(mymap)
      .bindPopup(cayoStats).openPopup();

      L.marker([17.499354014646553, -88.19686889648438], {icon: virusIcon}).addTo(mymap)
      .bindPopup(belizeCityStats).openPopup();

      L.marker([16.96486000097799, -88.22296142578125], {icon: virusIcon}).addTo(mymap)
      .bindPopup(stannCreekStats).openPopup();

      L.marker([16.097278567218588, -88.81622314453125], {icon: virusIcon}).addTo(mymap)
      .bindPopup(toledoStats).openPopup();

      L.marker([18.081895438726583, -88.56353759765625], {icon: virusIcon}).addTo(mymap)
      .bindPopup(orangeWalkStats).openPopup();

      L.geoJSON(featureCollection).addTo(mymap);
      


      // var popup = L.popup();

      // function onMapClick(e:any) {
      //   popup
      //     .setLatLng(e.latlng)
      //     .setContent("You clicked the map at " + e.latlng.toString())
      //     .openOn(mymap);
      // }
      // mymap.on('click', onMapClick);

     }, [])
   
    return (
       <div id="mapid"></div>
    );
}