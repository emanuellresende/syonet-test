import React, { useState } from 'react'
import Markers from '../Markers';
import { FormComponent, Input, Wrapper, InputSubmit } from './styles'

export default function Form() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('')

  function onMark(latitude,longitude){

  }

  function onHandleSubmit(e){
    e.preventDefault();
    
  }
  return (
    <Wrapper>
      <FormComponent onSubmit={onHandleSubmit}>
        <Input type={'number'} id='latitude' onChange={(e) => {
          setLatitude(e.target.value)
        }} value={latitude} placeholder={'Latitude'} />
        <Input type={'number'} value={longitude} placeholder='Longitude' id='longitude' onChange={(e) => {
          setLongitude(e.target.value)
        }} />
        <InputSubmit type="number" value={"Mark"} />
      </FormComponent>
    </Wrapper>
  )
}
