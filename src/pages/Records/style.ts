import styled from "styled-components";
import {Card} from "@mui/material";

export const TitleStyled = styled.h1`
  color: ${props => props.theme.color};
`

export const CardStyled = styled(Card)`
  margin: 5px 10px;
`
