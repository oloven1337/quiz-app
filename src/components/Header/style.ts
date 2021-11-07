import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperHeaderStyled = styled.ul`
  padding: 0;
  max-width: 300px;
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    margin: 0 10px;
    color: ${props => props.theme.color};

    &:hover {
      transform: scale(1.05);
      transition: all .5s;
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background: #5f2075;
      transition: width .3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`
