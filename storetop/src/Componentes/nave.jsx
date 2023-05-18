import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/navicons/logo.png';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) { /* Estilos para tablet */
    justify-content: center; /* Centraliza os botões */
    flex-grow: 1; /* Ocupa todo o espaço disponível */
  }

  @media (max-width: 480px) { /* Estilos para dispositivos móveis */
    flex-direction: column; /* Alinha os botões em coluna */
    align-items: flex-end; /* Alinha os botões à direita */
  }
`;



const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  width: 10em;

  @media (max-width: 480px) { /* Estilos para dispositivos móveis */
    margin-top: 5px; /* Adiciona espaço entre os botões */
  }
  
`;



export const Nave = () => {
  return (
    <Navbar>
      <Logo src={logoImg} alt="Logo" />
      <NavButtons>
        <NavButton>Sobre</NavButton>
        <NavButton>Contato</NavButton>
        <NavButton>Home</NavButton>
      </NavButtons>
    </Navbar>
  );
};


