import styled from "styled-components";

export const RadioStyled = styled.label`
  label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;

    input {
      position: absolute;
      left: -9999px;

      &:checked + span {
        background-color: mix(#fff, #5f2075, 84%);

        &:before {
          box-shadow: inset 0 0 0 0.4375em #5f2075;
        }
      }
    }

    span {
      display: flex;
      color: ${props => props.theme.color};
      align-items: center;
      padding: 0.375em 0.75em 0.375em 0.375em;
      border-radius: 99em; // or something higher...
      transition: 0.25s ease;

      &:hover {
        background-color: mix(#fff, #00005c, 84%);
      }

      &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: white;
        border: 1px solid #b0afaf;
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        margin-right: 0.375em;
        transition: 0.25s ease;
        //box-shadow: inset 0 0 0 0.125em #00005c;
      }
    }
  }


  //input[type=radio] {
  //  display: none;
  //  padding: 2px 4px;
  //  margin: 2px 4px;
  //  border: 2px solid #5f2075;
  //  border-radius: 2px;
  //  -webkit-appearance: none;
  //
  //  &::-webkit-outer-spin-button,
  //  &::-webkit-inner-spin-button {
  //    -webkit-appearance: none;
  //  }
  //}
  //
  //&::before {
  //  content:'';
  //  border: 2px solid #0079bf;
  //  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  //  padding: 10px;
  //  display: inline-block;
  //  position: relative;
  //  vertical-align: middle;
  //  cursor: pointer;
  //  margin-right: 5px;
  //}
`
