import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

`;
export const FormComponent = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

`
export const Input = styled.input`
  width: 100px;
  height: 25px;
  margin-top: 5%;
	border-radius: 5px;
  border-color: #E6E6E6;
	border: 1px solid #D8D8D8;
	outline: none;

`

export const InputSubmit = styled.input.attrs({ type: 'submit' })`

	width: 70px;
  height: 25px;
  margin-top: 5%;
	background-color: #3C2B57;
	border-radius: 5px;
  border-color: white;
	border: 1px solid white;
	color: white;
	outline: none;
`


