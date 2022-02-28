import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import '../Utils/Styles/AnimationNotFound.css';

export default function NotFound() {
  return (
    <Container>
      <Info>
        <GlitchBloc>
          <p className='invisible-text'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
        </GlitchBloc>

        <p className='txt-info'>Woopsy, this page doesn't existe</p>
        <NavLink to='/home'>Go Home</NavLink>
      </Info>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  height: 100vh;
  background-color: #000;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .txt-info {
    font-family: Roboto Slab, sans-serif;
    color: #f1f1f1;
    line-height: 1.5;
  }

  a {
    font-size: 20px;
  }
`;

const GlitchBloc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .glitchedAnim,
  .invisible-text {
    font-family: Unica One, sans-serif;
    font-size: 250px;
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
  }

  .invisible-text {
    visibility: hidden;
  }

  .glitchedAnim {
    position: absolute;
    top: 0;
    opacity: .9;

    &:nth-child(2){
      color: #f03e3e;
      animation: skewAnim 3s infinite;
    }

    &:nth-child(3){
      color: #3df0cf;
      animation: glitchAnim2 3s infinite;
    }

    &:nth-child(4){
      color: #f1f1f1;
      animation: glitchAnim1 3s infinite;
    }
  }
`;
