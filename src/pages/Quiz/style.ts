import styled from "styled-components";
import {Select, FormControl, Radio} from "@mui/material";

export const WrapperSettingsQuizStyled = styled.div`
  padding: 20px 40px;
  background-color: #322736;
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 5px;
  color: white;

`
export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 20px;
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
    color: white;
  }
`
export const FormControlStyled = styled(FormControl)`
  label {
    color: #1976d2;
  }
`

export const RadioStyled = styled(Radio)`
  color: #1976d2;
  border-color: red;
`
