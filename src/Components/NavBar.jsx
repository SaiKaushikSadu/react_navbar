import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Menu from './Menu'

const NavBar = ({toggledrawer,routes}) => {
  return (
    <SNavBar>
        <NavContainer>
            <DrawerButton onClick={toggledrawer}>
                <FaBars></FaBars>
            </DrawerButton>
            <SNavBrand>LOGO</SNavBrand>
            <RightNav>
                <NavRoutes>
                    {routes.map((route)=>{
                        if(route.subroutes){
                            return <Menu route={route} key={route.name}>{route.name}</Menu>
                        }
                        return (<NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>)
                    })}
                <LoginButton>Login</LoginButton>
                </NavRoutes>
            </RightNav>
        </NavContainer>
    </SNavBar>
  )
}

export default NavBar

const DrawerButton=styled.button`
    all:unset;
    color:white;
    font-size:3rem;
    display:grid;
    @media (min-width:768px){
        display:none;
    }
`

const SNavBar=styled.nav`
    background-color: rgb(136, 67, 228);
`
const NavContainer=styled.div`
    height:70px;
    max-width: 1300px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
`
const SNavBrand=styled.h2`
    color: white;
`
const RightNav=styled.div`
    
`
const NavRoutes=styled.div`
    display: flex;
    gap: 3rem;
    font-size: 2rem;
    align-items:center;
    @media (max-width:768px){
        display:none;
    }
`
const NavRoute=styled(Link)`
    text-decoration:none;
    color:white;
    padding: 0.8rem 1rem;
    transition: 0.3s ease;

    &:hover{
        transition: 0.3s ease;
        background-color: white;
        color:rgb(136, 67, 228);
        border: 1px solid black;
        border-radius: 3rem;
    }
`
const LoginButton=styled.button`
    background-color: white;
    color:rgb(136, 67, 228);
    padding: 0.7rem 3rem;
    border: 1px solid black;
    border-radius: 3rem;
    transition: 0.3s ease;

    &:hover{
        transition: 0.3s ease;
        border:1 px solid transparent;
        color: white;
        background-image: linear-gradient(to bottom right, #eebd89,#d13abd);
    }
`

