import styled from "styled-components";

interface IProps {
    right: boolean
}

export const Wrapper = styled.div`
  color: white;
  padding: 2px;
  width: 90%;
  margin: 0 auto;
`

export const TitleStyled = styled.h3`
  width: fit-content;
  font-size: 20px;
  border-bottom: 2px solid #5f2075;
  padding: 2px 16px;
`

export const ItemStyled = styled.div((props: IProps) => {
    return {
        border: '3px solid #5f2075',
        padding: '10px 6px',
        background: props.right ? "#4fe14fc2" : "#dc4444b5"
    }
})
