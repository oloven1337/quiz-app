import {createGlobalStyle} from "styled-components"

declare module 'styled-components' {
    interface DefaultTheme {
        body: string,
        backgroundColor: string,
        color: string
    }
}

export const darkTheme = {
    body: '#271c2b',
    color: '#fff',
    backgroundColor: '#322736'
}

export const lightTheme = {
    body: '#e5e5e5',
    color: '#322736',
    backgroundColor: '#fff'
}
//@ts-ignore
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body}
  }

  * {
    transition: all 150ms;
  }

`

