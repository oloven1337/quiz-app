import styled from "styled-components";
import {Select, FormControl, Radio} from "@mui/material";

export const WrapperSettingsQuizStyled = styled.div`
  padding: 10px 15px;
  background-color: ${props => props.theme.backgroundColor};
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 5px;
  color: ${props => props.theme.color || 'white'}
`
export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 6px;

  span {
    font-weight: bold;
  }

  div {
    width: 200px;
  }
`
export const TextStyled = styled.h3`
  margin: 0 10px 0 0;
`

export const SelectStyled = styled(Select)`
  div {
    color: ${props => props.theme.color};
  }
`
export const FormControlStyled = styled(FormControl)`
  label {
    color: #1976d2;
  }
`

export const RadioStyled = styled(Radio)`
  color: red;
  background-color: red;
  border-color: red;

  &:not(:checked) {
    color: ${props => props.theme.color};
  }
`
