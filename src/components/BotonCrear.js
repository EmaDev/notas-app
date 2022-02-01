import React, { useContext } from 'react';
import styled from '@emotion/styled';
import {AiFillFileAdd} from 'react-icons/ai';

const Boton = styled.button`
   position: fixed;
   bottom: 20px;
   right: 15px;
   width: 70px;
   height: 70px;
   padding: 1rem;
   border-radius: 100%;
   border-style: none;
   background-color: var(--verde);
   box-shadow: 3px 5px 7px var(--negro);
   cursor: pointer;
`;

export const BotonCrear = ({mostrarModal}) => {
  
  return (
      <Boton onClick={mostrarModal}><AiFillFileAdd size='4.5rem' color='white'/></Boton>
  )
};
