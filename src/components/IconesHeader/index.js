import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil, sacola]

export default function IconesHeader() {
    return (
        <Icones>
          { icones.map((icone, index) => {
            return (
              <Icone>
                <img 
                  src={icone} 
                  key={index}
                  alt='Icones Menu'
                />
              </Icone>
            )
          })}
        </Icones>
    )
}