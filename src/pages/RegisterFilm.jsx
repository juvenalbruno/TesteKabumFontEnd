import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import api from '../config/api';
import crypto from 'crypto';

const Register = styled.section`
    height: 100vh;
    max-width: 100vw;
`;
const FilmWrapper = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin: auto;
    justify-content: center;
`;
const FilmContent = styled.section`
    display: flex;
    flex-direction: column;
    margin: 30px 25px;
`;
const Input = styled.input`
    width: 250px;
    margin: 0px auto;
    padding: 3px  10px;
    font-size: 15px;
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

    } `;
const Textarea = styled.textarea`
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
const H1 = styled.h1`
    margin: auto;
    color: #4e4e4e;
`;

export default function RegisterFilm() {
    const [title, setTitle] = useState();
    const [release, setRelease] = useState('');
    const [postage, setPostage] = useState('');
    const [category, setCategory] = useState('');
    const [classi, setClassi] = useState('');
    const [abstract, setAbstract] = useState('');
    const [linkFilm, setLinkFilm] = useState('');
    const [linkImg, setLinkImg] = useState('');
    const ID = crypto.randomBytes(4).toString('HEX');

    async function handleSubmit() {
        const films = {
            "id": `${ID}`,
            "title": `${title}`,
            "release": `${release}`,
            "postage": `${postage}`,
            "category": `${category}`,
            "classi": `${classi}`,
            "abstract": `${abstract}`,
            "linkFilm": `${linkFilm}`,
            "linkImg": `${linkImg}`
        }
        alert('Filme adicionado com sucesso!')
        await api.post('/films', films)
        
    }

    return (
        <>
            <Register>
                <Sidebar Title="Cadastre um novo filme!" />
                <FilmWrapper onSubmit={handleSubmit}>
                    <FilmContent>
                        <H1>Filme:</H1>
                        <Input placeholder="Filme" onChange={e => { setTitle(e.target.value) }} required />
                        <H1>Ano de lançamento:</H1>
                        <Input type="date" value={release} onChange={(e) => { setRelease(e.target.value) }} required />
                        <H1>Data de postagem:</H1>
                        <Input type="date" value={postage} onChange={(e) => { setPostage(e.target.value) }} required />
                        <H1>Categoria:</H1>
                        <Input placeholder="Categoria" value={category} onChange={(e) => { setCategory(e.target.value) }} required />
                    </FilmContent>
                    <FilmContent>
                        <H1>Classificação:</H1>
                        <Input type="number" min="0" max="18" placeholder="Faixa etária" value={classi} onChange={(e) => { setClassi(e.target.value) }} required />
                        <H1>Pequeno resumo do filme:</H1>
                        <Textarea placeholder="Resumo" value={abstract} onChange={(e) => { setAbstract(e.target.value) }} required />
                        <H1>Link do filme:</H1>
                        <Input placeholder="Link do Filme" value={linkFilm} onChange={(e) => { setLinkFilm(e.target.value) }} required />
                        <H1>Link de capa do fime:</H1>
                        <Input placeholder="Link de Capa do Filme" value={linkImg} onChange={(e) => { setLinkImg(e.target.value) }} required />
                    </FilmContent>
                    <Input type="submit" className="Submit" value="Adicionar"/>
                </FilmWrapper>
            </Register>
        </>
    );
}
