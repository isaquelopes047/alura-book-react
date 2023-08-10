import logo from '../../images/logo.svg';
import styled from 'styled-components';

const ContainerLogo = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

export default function Logo() {
    return (
        <ContainerLogo>
            <LogoImg
                src={logo}
                alt='logo'
            />
            <p>Alura Books</p>
        </ContainerLogo>
    )
}