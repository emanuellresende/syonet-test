import React from 'react'
import { Marker, MarkerClusterer } from '@react-google-maps/api';


function createKey(location) {
  return location.lat + location.lng
}

export default function Markers(props) {
  if (props.isMarked === true) {
    return (

      <MarkerClusterer>
        {(clusterer) =>
          props.locations.map((location) => (

            <Marker key={createKey(location.cord)} position={location.cord} label={location.text} />
          ))
        }
      </MarkerClusterer>
    )
  }

  else {
    return <></>
  }
}

