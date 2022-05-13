import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FormComponent, mapStyled, Wrapper, Input, InputSubmit } from './styles';
import Markers from '../Markers'

export default function Map(props) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState({ lat: -20.452208, lng: -45.438752 });
  const [text, setText] = useState('');
  const [isMarked, setisMarked] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_TOKEN_ACCESS_MAP,
  })

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null)

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  function verifyNumber(number) {
    if (isNaN(number) === false) {
      return true;
    }
    else {
      return false;
    }
  }

  function onHandleSubmit(e) {
    e.preventDefault()
    const latFormated = parseFloat(latitude);
    const lngFormated = parseFloat(longitude)
    if (verifyNumber(latFormated) === true && verifyNumber(lngFormated)) {
      if (text === '') {
        alert('Criado ponto de marcacao de cordenada sem texto de descricao')
      }
      setisMarked(true);
      setCenter({ lat: latFormated, lng: lngFormated })
      setLocations(locations => [...locations, { cord: { lat: latFormated, lng: lngFormated }, text: text }]);
    }
    else {
      alert("Digite somente numeros na latitude e longitude")
    }


  }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyled}
      center={center}
      zoom={12}
      onUnmount={onUnmount}
      onLoad={map => setMap(map)}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}

    >
      <Wrapper>
        <FormComponent onSubmit={onHandleSubmit}>
          <Input type={'text'} id='latitude' onChange={(e) => {
            setLatitude(e.target.value)
          }} value={latitude} placeholder={'latitude'} />
          <Input type={'text'} value={longitude} placeholder='longitude' id='longitude' onChange={(e) => {
            setLongitude(e.target.value)
          }} />
          <Input type={'text'} value={text} placeholder='Text' id='text' onChange={(e) => {
            setText(e.target.value)
          }} />
          <InputSubmit type="submit" value={"Mark"} />
        </FormComponent>
      </Wrapper>

      <Markers locations={locations} isMarked={isMarked} label={text} />
    </GoogleMap>
  ) : <></>
}



