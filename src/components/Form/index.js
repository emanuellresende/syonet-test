import React, { useState } from 'react'
import Markers from '../Markers';
import { FormComponent, Input, Wrapper, InputSubmit } from './styles'

export default function Form() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('')
  const [text, setText] = useState('')

  function onMark(latitude, longitude) {
    return (
      <Markers latitude={latitude} longitude={longitude} text={text} />
    );
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    onMark(latitude, longitude);
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
        <Input type={'text'} value={text} placeholder='Text' id='text' onChange={(e) => {
          setText(e.target.value)
        }} />
        <InputSubmit type="number" value={"Mark"} />
      </FormComponent>
    </Wrapper>
  )
}
