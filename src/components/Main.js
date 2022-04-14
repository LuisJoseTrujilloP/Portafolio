import React from 'react'
import styledComponents from 'styled-components'




const MainContainer = styledComponents.div`

background: ${props => props.theme.body};
width: 100vw;
high: 100vh;

`

const Main = () => {
  return (
    <MainContainer>
        Main Component/Page
    </MainContainer>
  )
}

export default Main