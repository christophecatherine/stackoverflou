import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <i className='fa-brands fa-2x fa-stack-overflow'></i>
        <span>
          stack<strong>overflou</strong>
        </span>
        <div className='navigation'>
          <p>About</p>
          <p>Produts</p>
          <p>For Teams</p>
        </div>
      </LogoContainer>
      <SearchContainer>
        <label htmlFor='search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </label>
        <input type='search' id='search' placeholder='Search' />
      </SearchContainer>
      <ConnexionContainer>
        <NavLink to='/login' className='login'>
          Log in
        </NavLink>
        <NavLink to='/signup' className='SignUp'>
          Sign up
        </NavLink>
      </ConnexionContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Liberation Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f8f9f9;
`;

const LogoContainer = styled.div`
  font-family: Roboto Slab, sans-serif;

  display: flex;
  align-items: center;
  span {
    margin-left: 0.5em;
  }

  .navigation {
    display: flex;
    margin: 0 15px;
  }

  p {
    margin: 0 10px;
    color: #5c6269;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  z-index: 10;
  position: relative;
  width: 500px;
  border: 1px solid #babfc4;
  line-height: 30px;

  & > * {
    border: 0;
    padding: 0 0 0 10px;
    background-color: #f8f9f9;
    border-radius: 0;
    outline: none;
  }

  label {
    color: #5c6269;
  }

  input[type='search'] {
    flex-basis: 500px;
    padding-right: 10px;
    cursor: pointer;
  }
`;

const ConnexionContainer = styled.nav`
  margin: 0 15px;

  a {
    padding: 8px 10px;
    margin: 0 2px;
    min-width: 60px;
    cursor: pointer;
    border: 0.5px solid #4fa9e0;
    border-radius: 3px;
    text-decoration: none;
    font-size: 12px;
  }

  .login {
    color: #4fa9e0;
    background-color: #e1ecf4;
    border: 0.5px solid #4fa9e0;
    border-radius: 3px;

    &:hover {
      background-color: #b3d3ea;
      color: #3a739c;
    }
  }

  .SignUp {
    color: #f1f1f1;
    background-color: #0a95ff;

    &:hover {
      color: #c6e6ff;
      background-color: #0074cc;
    }
  }
`;
