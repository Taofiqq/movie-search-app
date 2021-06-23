import React from 'react'
import { useLocation } from 'react-router'
import { NavList, LinkStyled } from './Navs.styled'

const LINKS  = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'},
    
]
const Navbar = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
          <NavList>
             {
                 LINKS.map(item =>  <li key={item.to}><LinkStyled to = {item.to} className = {item.to === location.pathname ? 'active' : ""}> {item.text}</LinkStyled></li> )
             }
           
            </NavList>  
        </div>
    )
}

export default Navbar
