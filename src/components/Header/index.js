import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const ContainerHeader = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

export default function Header(){
    return (
        <ContainerHeader>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </ContainerHeader>
    )
}