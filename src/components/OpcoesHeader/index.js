import styled from 'styled-components';

const ContainerOpcoes = styled.ul`
  display: flex;
`

const OpcoesLi = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function OpcoesHeader(){
    return (
        <ContainerOpcoes>
            { textoOpcoes.map((texto, index) => {
            return (
                <OpcoesLi key={index}>
                    <p> {texto} </p>
                </OpcoesLi>
            )
            } )}
        </ContainerOpcoes>
    )
}