import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapStyled } from '../../pages/HomeScreen/styles';



export default function Map() {
  const [latitude, setLatitude] = useState(-10);
  const [longitude, setLongitude] = useState(-50);
  const [position, setPosition] = useState([latitude, longitude]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAsWaPP5dQAMBu6ovfr-0XgMoTAP1FTF-g',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyled}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* vou add o mark */}
      <></>
    </GoogleMap>
  ) : <></>
}


const center = {
  lat: -3.745,
  lng: -38.523
};
