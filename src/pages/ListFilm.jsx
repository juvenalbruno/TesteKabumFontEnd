import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'

import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from '../components/Sidebar';
import api from '../config/api';
import { useHistory } from 'react-router';

// const ListFilme = ({ modules }) => {


    const ListFilmeKabum = styled.section `
        height: 100vh;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
    `;
    const Content = styled.section `
        padding: 25px 0;
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
    `;
    const Search = styled.form `
        background-color: #f8f8f8;
        display: flex;
        justify-content: space-between;
        width: 22rem;
        height: 35px;
        /* margin: 0 auto; */
        padding: 0 20px;
        border-radius: 25px;
        align-items: center;
        border: 1px solid #b3b3b3;

        &:hover {
            box-shadow: 0.1em 0.1em 1em #dfdfdf;
        }

        `;
    const Filter = styled.input`
        /* background: red; */
    `;
    const Input = styled.input `
        width: 90%;
        height: 90%;
        border: none;
        background-color: transparent;
        font-size: 16px;

        &:focus {
            outline: none;
        }
    `;
    const PostsContent = styled.section `
        padding: 0 12px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;
    const Posts = styled.section `
        background: #ededff;
        padding: 15px;
        height: 18.5rem;
        width: 30rem;
        margin: 10px; 
        border-radius: 3px;
        display: flex;
    `;
    const Post = styled.section `
        margin: 0 25px;
        display: flex;
        flex-direction: column;
    `;
    const Title = styled.h1 `
        font-size: 18px;
        text-overflow: clip;
        height: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0 15px 0;
        line-height: 1;
    `;
    const Image = styled.img `
        max-width: 155px;
        height: 220px;
    `;
    const Description = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify; 
        margin-right: 25px;
    `;
    const H1 = styled.h1 `
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        text-overflow: clip;
    `;
    const Button = styled.button`
        background: transparent;
        color: red;
        border: none;
        padding-bottom: 10px;
        cursor: pointer;
        height: 20px;
        width: 25px;
        display: flex;
        justify-content: center;
        margin: auto;
    `;
    const Select = styled.select`
        margin: 0 5px 0 10px;
        border: none;
        font-size: 16px;
    `;


const ListFilme = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadFilms() {
            const {data} = await api.get('/films')
            setData(data);
        }
        loadFilms()
    }, [])

    {search.length > 0 
        && const {data} = api.get(`/films?title=${search}`)
        console.log(data);
    }
    
    async function handlerDelete(id){
        await api.delete(`/films/${id}`)
        alert('Filme deletado do Catalogo!')
        history.push('/')
    }

    async function handleFilterCategory(category) {
        console.log(category)
    }

    async function handleFilterClassificacao(classif) {
        console.log(classif)
    }

    async function handleFilterData(data) {
        console.log(data)
    }

    return(
        <>
            <ListFilmeKabum>
                <Sidebar Title="Lista Filmes KaBuM" />             

                <Content>
                    <Search>
                        <AiOutlineSearch style={{'fontSize': '22px'}} />
                        <Input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}  />
                    </Search>
                    <Select name="categoria" id="category">
                        <option value="0" hidden>Categoria</option>
                        {data.map(Data=> (
                            <option key={Data.category} value={Data.category} onChange={() => {handleFilterCategory(Data.category)}}>{Data.category}</option>
                        ))}
                    </Select>
                    <Select name="Classificacao" id="Classificacao">
                        <option value="0" hidden>Classificação</option>
                        {data.map(Data=> (
                            <option key={Data.class} value={Data.class} onChange={() => {handleFilterClassificacao(Data.class)}}>{Data.class}</option>
                        ))}
                    </Select>
                    <Select name="Data" id="Data">
                        <option value="0" hidden>Lançamento</option>
                        {data.map(Data=> (
                            <option key={Data.class} value={Data.class} onChange={() => {handleFilterData(Data.release)}}>{Data.release}</option>
                        ))}
                    </Select>
                </Content>

                <PostsContent>
                    {data.map(Data => (
                        <Posts key={Data.id}>
                            <Post>
                                <Title key={Data.title}>{Data.title}</Title>

                                <a href={Data.linkFilm} target="blank">
                                    <Image src={Data.linkImg} alt="Capa"/>
                                </a>
                                <Button onClick={() => handlerDelete(Data.id)}>Excluir</Button>
                            </Post>
                            <Description>
                                <H1><strong>Categoria:</strong> {Data.category}.</H1>
                                <H1><strong>Classificação:</strong> {Data.class} anos.</H1>
                                <H1><strong>Lançamento:</strong> {Data.release}.</H1>
                                <H1><strong>Postado:</strong> {Data.postage}.</H1>
                                <H1><strong>Resumo:</strong> {Data.abstract}</H1>
                            </Description>
                        </Posts>
                    ))}
                </PostsContent>
            </ListFilmeKabum>
        </>
    );
}

export default connect(state => ({ modules: state }))(ListFilme)
