import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPassword, MdEmail,MdAccountCircle } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Contenedor, Titulo, Formulario, Input, Boton, Imagen, IngresarConRedes, Href } from '../hooks/useLogin';

export const Registrate = () => {

  /*useEffect( () => {
    if(usuario){
      if(usuario.ok){
        navigate('/');
      }
    }
  }, [usuario]);*/
  return (

    <div className='contenido'>
      <Contenedor>
        <Imagen>
          <img src='https://play-lh.googleusercontent.com/5CVU5FxK4zV4l1v64zULcyjogYToTJjgeN8HN1uID_0MizgBCfC97ixIB0EQ4OHz7zI' />
        </Imagen>
        <Titulo>Registrate</Titulo>
        <Formulario>
          <div>
            <label>Nombe</label>
            <Input>
              <MdAccountCircle size='2.8rem' color='white' />
              <input placeholder='Escribe tu nombre' />
            </Input>
          </div>
          <div>
            <label>Email</label>
            <Input>
              <MdEmail size='2.8rem' color='white' />
              <input placeholder='Escribe tu email' />
            </Input>
          </div>
          <div>
            <label>Contraseña</label>
            <Input>
              <MdPassword color='white' size='2.8rem' />
              <input type='text' placeholder='Escribe contraseña' />
            </Input>
          </div>
          <div>
            <label>Contraseña</label>
            <Input>
              <MdPassword color='white' size='2.8rem' />
              <input type='text' placeholder='Confirma la contraseña' />
            </Input>
          </div>

          <Boton>Registrar</Boton>
        </Formulario>

        <IngresarConRedes>
          <p>O Registrate con...</p>
          <button><FcGoogle size='3rem' /><p>Google</p></button>
        </IngresarConRedes>

        <NavLink to='/'><Href>Tenes cuenta? <span>Inicia sesion</span></Href></NavLink>

      </Contenedor>
    </div>
  )
};
