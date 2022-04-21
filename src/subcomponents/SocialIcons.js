import React from 'react'
import { NavLink} from 'react-router-dom'
import { Linkedin, Github, Instagram } from '../components/AllSvgs'
import styled from 'styled-components'



const Icons = styled.div`

display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottarget=_"" tom: 0;
left: 2rem;

&>*:not(:last-child){
    margin: 0.5rem 0;

}

`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text}
`


const SocialIcons = () => {
  return (
    <Icons>
      <div>   
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:""}}>
          <Linkedin width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <div>   
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:""}}>
          <Github width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <div>   
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:""}}>
          <Instagram width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <Line />
    </Icons>
  )

}

export default SocialIcons

