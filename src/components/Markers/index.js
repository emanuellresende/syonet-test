import React from 'react'
import { Marker } from '@react-google-maps/api';


export default function Markers(props) {
  const lat = props.latitude
  const lng = props.longitude
  return (
    <Marker position={{lat,lng}} text={props.text}/>
  )
}

