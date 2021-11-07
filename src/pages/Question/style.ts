import styled from "styled-components";
import {Button} from "@mui/material";

export const WrapperStyled = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 300px;
  border-radius: 5px;
  padding: 4px;

  h4 {
    margin: 0;
    padding: 10px;
    color: ${props => props.theme.color};
    font-size: 20px;
  }

`

export const WrapperAnswersItem = styled.div`
  margin: 6px;
`

export const ButtonStyled = styled(Button)`
  margin: 10px;
  color: red;
  background-color: red;
`
