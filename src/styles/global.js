import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #3a4764;
}
body,
input,
textarea,
button{
  font: 500 1em 'Spartan', sans-serif;
}
`
