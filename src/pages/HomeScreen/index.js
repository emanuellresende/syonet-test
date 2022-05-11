import { Container, Wrapper } from './styles'
import React, { useState } from 'react'
import Map from '../../components/Map'
export default function HomeScreen() {
  const [zoom, setZoom] = useState(14);
  return (
    <Wrapper>
      <Container>
        <Map zoom={zoom}>

        </Map>
      </Container>
    </Wrapper>
  )
}
