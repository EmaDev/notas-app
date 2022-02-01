import React, {useContext, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {GoListUnordered} from 'react-icons/go';
import { Nota } from './Nota';

import { firebaseContext } from '../firebase/context';
import {getNotas, getNotasTimepoReal} from '../firebase/funcionesNotas';



const ContenedorNotas = styled.div`
  @media(min-width: 768px){
      display: grid;
      grid-template-columns: 50% 50%;
  }
`;

const ContenedorTitulo = styled.div`
    width: 85%;
    margin: 1rem auto;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--blanco);
        margin: 0;
        padding: 0;
    }
    div{
        cursor: pointer;
    }


`;


export const Notas = ({editarNota}) => {
    
    const {usuario} = useContext(firebaseContext);
    const [stateNotas, setStateNotas] = useState([]);
    
    const agregarNuevasNotas = (notas) => {
        
        //const stateNotas

        setStateNotas([
            ...notas
        ]);
    }

    useEffect( async() => {
    
        const uid = usuario.data.uid;
        const resp = await getNotasTimepoReal(uid, agregarNuevasNotas);
        
    }, []);
    
    return (
        <>
        <ContenedorTitulo>
            <h2>Tus notas</h2>
            <div><GoListUnordered size='3rem' color='white'/></div>
        </ContenedorTitulo>
        <ContenedorNotas>
            {stateNotas.map((dta, i) => (
                <Nota key={i} data={dta} editarNota={editarNota}/>
            ))
            }
        </ContenedorNotas>
        </>
    );
};
