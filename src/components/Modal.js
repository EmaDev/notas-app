import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';

import { firebaseContext } from '../firebase/context';
import {crearNota} from '../firebase/funcionesNotas';

const ContenedorModal = styled.div`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background-color: var(--negro);
   display: grid;
`;
const DivModal = styled.div`
   align-self: center;
   justify-self: center;
   margin: auto;
   width: 90%;
   max-width: 600px;
   padding: 1rem;
   background-color: var(--grisClaro);
   color: var(--negro);
   border-radius: 8px;
`;

const Formulario = styled.form`
   width: 95%;
   margin: auto;
`;
const Div = styled.div`
       display: flex;
       flex-direction: column;
       margin: .8rem 0;

       label{
           font-weight: 700;
           font-size: 2rem;
       }
       span{
           font-weight: 600;
       }
`;

const Input = styled.input`
   width: 100%;
   border-styled: none;
   border-radius: 6px;
   padding: 1rem;
   font-size: 2rem;
`;

const TextArea = styled.textarea`
   width: 100%;
   min-height: 300px;
   border-style: none;
   border-radius: 6px;
   padding: 1rem;
   font-size: 1.8rem;
`;
const Select = styled.select`
  padding: 1rem;
  border-style: none;
  border-radius: 6px;
  color: var(--negro);
  font-size: 1.8rem;
  font-weight: 600;
`;
const Option = styled.option`
   background-color: ${props => `var(--${props.bgColor})`}
`;

const DivBotones = styled.div`
   display: flex;
   justify-content: center;
   margin: 2rem auto;
`;

const Boton = styled.button`
   width: 50%;
   margin: 0 1rem;
   padding: 1rem;
   color: var(--blanco);
   font-size: 2rem;
   background-color: ${props => props.bgColor ? 'var(--verde)' : 'var(--rojo)'};
   border-style: none;
   border-radius: 6px;
`;

export const Modal = ({mostrarModal, data, handleInputChange, reset}) => {
  
    const {usuario} = useContext(firebaseContext);
    const {titulo, importancia, descripcion} = data;

    const handleCancel  = () => {
        mostrarModal();
    }

    const handleCrearNota = (e) => {

        e.preventDefault();
        const uid = usuario.data.uid;
        crearNota(uid, titulo, descripcion, importancia);
        reset();
        mostrarModal();
    }

    return(
        <ContenedorModal>
            <DivModal>
                <h1>Nueva Nota</h1>
                <Formulario onSubmit={handleCrearNota}>
                    <Div>
                    <label>Importancia</label>
                    <Select value={importancia} name='importancia' onChange={handleInputChange}>
                        <Option bgColor='sinImportancia' value='sinImportancia'>Ninguna</Option>
                        <Option bgColor='muyImportante' value='muyImportante'>Muy importante</Option>
                        <Option bgColor='algoImportante' value='algoImportante'>Algo importante</Option>
                        <Option bgColor='pocoImportante' value='pocoImportante'>Poco importante</Option>
                        
                    </Select>
                    </Div>
                    <Div>
                        <label>Titulo <span>{`(*opcional)`}</span></label>
                        <Input placeholder='Un titulo' value={titulo} name='titulo' onChange={handleInputChange}/>
                    </Div>
                    <Div>
                        <label>Descripcion Nota</label>
                        <TextArea placeholder='Ejemplo: aprender programacion'
                        value={descripcion}
                        name='descripcion'
                        onChange={handleInputChange}
                        />
                    </Div>

                    <DivBotones>
                        <Boton type='submit' bgColor='true'>Guardar</Boton>
                        <Boton type='button' onClick={handleCancel}>Cancelar</Boton>
                    </DivBotones>
                </Formulario>
            
            </DivModal>
        </ContenedorModal>
    );
};
