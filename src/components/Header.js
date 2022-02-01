import React from 'react';
import styled from '@emotion/styled';

import { cerrarSesion } from '../firebase/funcionesAuth';

const ContenedorHeader = styled.header`
   margin: 1.5rem auto;
   width: 90%;
   max-width: 900px;
   display: grid;
   grid-template-columns: 80% 20%;
   padding-bottom: 1rem;
   border-bottom: 1.5px solid var(--negro);
`;

const Titulo = styled.div`
   
   h1{
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--blanco);
    margin: 0;
    padding-top: 1rem;
   }

   h2{
       font-size: 2.3rem;
       font-weight: 600;
       color: var(--blanco);
       margin: 0;
       padding: 0;
   }

   button{
       margin: .8rem 0;
       padding: .3rem .6rem;
       color: var(--negro);
       background-color: var(--grisClaro);
       font-size: 1.5rem;
       border-radius: 5px;
   }
   
`

const ImagenUsuario = styled.div`
   width: 65px;
   heigth: 65px;
   margin: auto;
   cursor: pointer;
   img{
       width: 100%;
       border-radius: 100%;
   }
`;

export const Header = () => {

    const handleSignOut = () => {
        cerrarSesion();
    }
    
    return(
        <ContenedorHeader>
            <Titulo>
             <h1>Hola,</h1>
             <h2>Emanuel cisterna</h2>
             <button onClick={handleSignOut}>Cerrar sesion</button>
            </Titulo>
            <ImagenUsuario>
                <img src='https://www.udoi.cl/wp-content/uploads/2016/10/user.png'/>
            </ImagenUsuario>
        </ContenedorHeader>
    )
};
