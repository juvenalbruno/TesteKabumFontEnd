import React from 'react'
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

export default function RegisterFilm() {
    const Register = styled.section `
        height: 100vh;
        max-width: 100vw;
    `;
    const FilmWrapper = styled.section `
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        margin: auto;
    `;
    const FilmContent = styled.section `
        display: flex;
        flex-direction: column;
        margin: 30px 25px;
    `;
    const Input = styled.input `
        width: 250px;
        margin: 0px auto;
        padding: 3px  10px;
        font-size: 14px;
        border: 1px solid grey;
        border-radius: 2px;

        &:focus {
            border: 1px solid #ff5e00;
            outline: none;
            box-shadow: 0.1em 0.1em 1em gray;
        }

        &.Submit {
            margin: 25px auto 55px auto;
            border-radius: 25px;
            width: 155px;
            background: #006eff;
            color: white;
            font-size: 18px;
            padding: 0;
            border: 1px solid #006eff;
            cursor: pointer;
        }

        &.Submit:hover{
            border: 1px solid #ff5e00;
            background: #ff5e00;

        }
    `;
    const Textarea = styled.textarea `
        width: 250px;
        margin: 0px auto;
        padding: 3px  10px;
        font-size: 14px;
        border: 1px solid grey;
        border-radius: 2px;

        &:focus {
            border: 1px solid #ff5e00;
            outline: none;
            box-shadow: 0.1em 0.1em 1em gray;
        }
    `;
    const H1 = styled.h1 `
        margin: auto;
        color: #4e4e4e;
    `;

    return(
        <>
            <Register>
                <Sidebar Title="Cadastre um novo filme!"/>
                <FilmWrapper>
                    <FilmContent>
                        <H1>Filme:</H1>
                        <Input type="text" placeholder="Filme" onChange={() => {}} />
                        <H1>Ano de lançamento:</H1>
                        <Input type="date" onChange={() => {}} />
                        <H1>Data de postagem:</H1>
                        <Input type="date" onChange={() => {}} />
                        <H1>Categoria:</H1>
                        <Input type="text" placeholder="Categoria" onChange={() => {}} />
                    </FilmContent>
                    <FilmContent>
                        <H1>Descrição:</H1>
                        <Input type="number" min="0" max="18" placeholder="Faixa etária" />
                        <H1>Pequeno resumo do filme:</H1>
                        <Textarea type="text" placeholder="Resumo" onChange={() => {}} />
                        <H1>Link do filme:</H1>
                        <Input type="text" placeholder="Link do Filme" onChange={() => {}} />
                        <H1>Link de capa do fime:</H1>
                        <Input type="text" placeholder="Link de Capa do Filme" onChange={() => {}} />
                    </FilmContent>
                        <Input type="submit" className="Submit" value="Cadastrar"/>
                </FilmWrapper>
            </Register>    
        </>
    );
}
