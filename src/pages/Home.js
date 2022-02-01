import React, { useState } from 'react';

import { useForm } from '../hooks/useForm';
import { Notas } from '../components/Notas';
import { BotonCrear } from '../components/BotonCrear';
import { Modal } from '../components/Modal';
import { Header } from '../components/Header';


export const Home = () => {
  
  const [stateMostrarModal, setStateMostrarModal] = useState(false);
  const [formValues, handleInputChange, reset, setValues] = useForm( {titulo:'', importancia: '', descripcion: ''} );
  
  const mostrarModal = () => {
    setStateMostrarModal(ant => !ant);
  }

  const editarNota = ({titulo, importancia, descripcion, id}) => {
    mostrarModal();
    setValues({
      titulo,
      importancia,
      descripcion
    });
  };


  return (
    <>
    {(stateMostrarModal) && <Modal mostrarModal={mostrarModal} data={formValues} handleInputChange={handleInputChange} reset={reset}/>}
    
    <div className='contenido'>
      <Header/>
      <Notas editarNota={editarNota}/>
      <BotonCrear mostrarModal={mostrarModal}/>
    </div>
    </>
  );
};
