import styled from "styled-components";

interface IProps {
    right: boolean
}

export const Wrapper = styled.div`
  color: white;
`

export const WrapperItem = styled.div((props: IProps) => {
    return {
        border: '1px solid black',
        background: props.right ? "#4fe14fc2" : "#dc4444b5"
    }
})
