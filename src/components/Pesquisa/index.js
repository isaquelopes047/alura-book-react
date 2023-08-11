import Input from "../Input";
import styled from 'styled-components';
import { livros } from "./Components/DadosPesquisa";

import { useState } from "react";

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ContainerLivros = styled.div`
    width: 100vw;
    height: auto;
    background-color: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const ContainerCardLivro = styled.div`
    width: 23%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.3s;
    cursor: pointer;

    &&:hover{
        border: 1px solid grey;
    }

    p{
        color: #fff;
    }
`

export default function Pesquisa(){

    const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

    return (
        <>
            <PesquisaContainer>
                <Titulo>Já sabe por onde começar?</Titulo>
                <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
                <Input
                    placeholder="Escreva sua próxima leitura"
                    onBlur={evento => {
                        const textoDigitado = evento.target.value
                        const resultadoPesquisa = livros.filter(livro => livro.nomeDoLivro.includes(textoDigitado))

                        setLivrosPesquisados(resultadoPesquisa)
                    }}
                />
            </PesquisaContainer>

            <ContainerLivros>
                {livrosPesquisados.map((livros, id) => {
                    return (
                        <ContainerCardLivro key={id}>
                            <p> {livros.nomeDoLivro} </p>
                            <img 
                                src={livros.src}
                                alt='Livros'
                            />
                            <p> R$ {livros.valor} </p>
                        </ContainerCardLivro>
                    )
                })}
            </ContainerLivros>
        </>
    )
}