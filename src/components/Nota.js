import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import Swal from 'sweetalert2';

const DivNota = styled.div`
   width: 90%;
   max-width: 400px;
   margin: 1rem auto;
   padding: 1.5rem 1rem;
   background-color: var(--blanco);
   background-color: ${props => `var(--${props.bgColor})`}; 
   border-radius: 12px;
   color: var(--negroOscuro);
   

`;

const TextoNota = styled.p`
  text-align: justify;
  margin: .8rem 0;
  padding: .5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const TituloNota = styled.p`
   font-size: 3rem;
   font-weight: 700;
   margin: 0 1rem;
`

const IconoInfo = styled.div`
   width: 90%;
   margin: auto;
   display: flex;
   justify-content: right;
   div{
      cursor: pointer;
   }
`;

const FechaCreacion = styled.p`
   margin: 0;
   color: (--negro);
   text-align: center;
`;

const DivFunciones = styled.div`
    width: 90%;
    display: flex;
    justify-content: center; 
    margin: 2rem 0;
`;
const BotonFuncion = styled.button`
    border-style: none;
    border-radius: 6px;
    margin: 0 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--blanco);
    background-color: ${props => props.bgColor ? 'var(--azul)' : 'var(--rojo)'}
`;

export const Nota = ({ data, editarNota }) => {

   const [stateMostarFunciones, setStateMostarFunciones] = useState(false);

   const handleMostrarFunciones = () => {
      setStateMostarFunciones(ant => !ant);
   }

   const handleDelete = () => {

      Swal.fire({
         title: 'Eliminar',
         text: "Seguro quieres eliminar la nota",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, eliminar!'
       }).then((result) => {
         if (result.isConfirmed) {
           
            //firebase.eliminarNota(id);
            Swal.fire(
             'Eliminado!',
             'Eliminado correctamente.',
             'success'
           )
         }
       });
   }

   const handleEdit = () => {
      editarNota(data);
   }

   return (

      <DivNota bgColor={data.importancia}>
         <IconoInfo onClick={handleMostrarFunciones}><div><MdOutlineMoreHoriz size='3.5rem' color='black' /></div></IconoInfo>

         {(stateMostarFunciones) &&
            <DivFunciones>
               <BotonFuncion bgColor='true' onClick={handleEdit}>Modificar</BotonFuncion>
               <BotonFuncion onClick={handleDelete}>Eliminar</BotonFuncion>
            </DivFunciones>
         }
         {(data.titulo) && <TituloNota>{data.titulo}</TituloNota>}
         <TextoNota>{data.descripcion}</TextoNota>
         <FechaCreacion>10 de diciembre 2021</FechaCreacion>
      </DivNota>

   )
};
