import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = styled.section`
    background-color: white;
    padding-top: 15px;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
        margin: 0 30% 0 15%;
    }

`;
const H1 = styled.h1`
    font-size: 32px;
    color: #ff5e00;
    font-style: italic;
`;
const Nav = styled.section`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #cecece;
`;
const A = styled(Link)`
    text-decoration: none;
    background-color: #ff5e00;
    color: white;
    margin: 0 20px;
    width: 230px;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    font-size: 18px;

    &:hover {
        background-color: #006eff;
    }
`;


export default function Sidebar(props) {
    return (
        <>
            <Header>
                <a href="https://www.kabum.com.br/" target="blank" alt="KaBuM!">
                    <img src={logo} alt="KaBuM" />
                </a>
                <H1>{props.Title}</H1>
            </Header>
            <Nav>
                <A to="/">Lista de Filmes</A>
                <A to="/register">Cadastre Novos Filmes Aqui!</A>
            </Nav>
        </>
    )
}

