import React from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';
import imageURL from '../../images/MarkerClusterer.png'

const lat = -20.452208
const lng = -45.438752
export default function Markers(props) {
  return (
    <Marker position={center} label="melo" />
  )
}
const center = {
  lat: -20.452208,
  lng: -45.438752
};
