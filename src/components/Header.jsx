import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pami-logo.png";
import styled,{ keyframes } from "styled-components";

const HeaderContainer = styled.header`
width: 100%;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,142,203,1) 100%, rgba(0,212,255,1) 100%);
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat', sans-serif;
position: fixed;
top: 0;
left: 0;

img{
    width: 8rem;
    margin-left: 1rem;
}

nav{
    margin-right: 4rem;
    a{
        color: #1B1B3A;
        text-decoration: none;
        margin-left: 4rem;
        font-size: 1.2rem;

        &:hover {
        color: white;
        transition: color 0.3s ease; 
        &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: #white; 
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
        

        }    
    }
}

`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
            <nav>
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
            </nav>
        </HeaderContainer>
    );
}
export default Header;