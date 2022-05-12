import { Container, Wrapper } from './styles'
import React, { useState } from 'react'
import Map from '../../components/Map'
import Markers from '../../components/Markers';
export default function HomeScreen() {
  const [zoom, setZoom] = useState(1);
  return (

    <Wrapper>
    
      <Map zoom={zoom}>
        <Markers />
      </Map>
      <Container>

</Container>
    </Wrapper>
  )
}
