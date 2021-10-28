import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;
  width: 100px;

  &::after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #5f2075;
    transition: .25s all ease;
    pointer-events: none;
  }

  &:hover::after {
    color: #f39c12;
  }

  select {
    width: 100px;
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 10px;
    color: white;
    font-weight: bold;
    background-color: #5f2075;
    background-image: none;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }
`
