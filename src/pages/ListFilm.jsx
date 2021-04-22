import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'

import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from '../components/Sidebar';

const ListFilme = ({ modules }) => {

    const ListFilmeKabum = styled.section `
        height: 100vh;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
    `;
    const Content = styled.section `
        padding: 25px 0;
    `;
    const Search = styled.section `
        background-color: #f8f8f8;
        display: flex;
        justify-content: space-between;
        width: 22rem;
        height: 35px;
        margin: 0 auto;
        padding: 0 20px;
        border-radius: 25px;
        align-items: center;
        border: 1px solid #b3b3b3;

        &:hover {
            box-shadow: 0.1em 0.1em 1em #dfdfdf;
        }
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
        height: 18rem;
        width: 30rem;
        margin: 10px; 
        border-radius: 3px;
        display: flex;
    `;
    const Post = styled.section `
        margin: 0 25px;
        display: flex;
        flex-direction: column;
        text-align: center;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify; 
        margin-right: 25px;
        text-overflow: ellipsis;
    `;
    const H1 = styled.h1 `
        font-size: 15px;
        font-weight: 300;
    `;

    return(
        <>
            <ListFilmeKabum>
                <Sidebar Title="Lista Filmes KaBuM" />             

                <Content>
                    <Search>
                        <AiOutlineSearch style={{'fontSize': '22px'}} />
                        <Input type="text" placeholder="Search"/>
                    </Search>
                </Content>

                <PostsContent>
                    {modules.map(module => (
                        <Posts key={module.id}>
                            <Post>
                                <Title key={module.title}>{module.title}</Title>

                                <a href={module.linkFilm} target="blank">
                                    <Image src={module.linkImg} alt="Capa"/>
                                </a>
                            </Post>
                            <Description>
                                <H1><strong>Categoria:</strong> {module.category}.</H1>
                                <H1><strong>Classificação:</strong> {module.class} anos.</H1>
                                <H1><strong>Lançamento:</strong> {module.release}.</H1>
                                <H1><strong>Postado:</strong> {module.postage}.</H1>
                                <H1><strong>Resumo:</strong> {module.abstract}</H1>
                            </Description>
                        </Posts>
                    ))}
                </PostsContent>
            </ListFilmeKabum>
        </>
    );
}

export default connect(state => ({ modules: state }))(ListFilme)
