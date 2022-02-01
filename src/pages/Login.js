import React, { useEffect } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { MdPassword, MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';


import { Contenedor, Titulo, Formulario, Input, Boton, Imagen, IngresarConRedes, Href } from '../hooks/useLogin';
import { useForm } from '../hooks/useForm';

import logo from '../source/logo.png'
import {ingresarConEmail} from '../firebase/funcionesAuth';


export const Login = ({usuario}) => {


  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({ email: '', password: '' });
  const { email, password } = formValues;
  
  useEffect( () => {
    if(usuario){
      if(usuario.ok){
        navigate('/');
      }
    }
  }, [usuario]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email.trim() === '' || password.trim() === ''){
      console.log('completar');
    }

    const resp = await ingresarConEmail(email, password);
    console.log(resp);
  }

  return (

    <div className='contenido'>
      <Contenedor>
        <Imagen>
          <img src={logo}/>
        </Imagen>
        <Titulo>Iniciar Sesion</Titulo>
        <Formulario onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Input>
              <MdEmail size='2.8rem' color='white' />
              <input
                placeholder='Escribe tu email'
                type='email'
                value={email}
                name='email'
                onChange={handleInputChange} />
            </Input>
          </div>
          <div>
            <label>Contraseña</label>
            <Input>
              <MdPassword color='white' size='2.8rem' />
              <input type='text'
                placeholder='Escribe contraseña'
                type='password'
                value={password}
                name='password'
                onChange={handleInputChange} />
            </Input>
          </div>

          <Boton type='submit'>Iniciar sesion</Boton>
        </Formulario>

        <IngresarConRedes>
          <p>O ingresa con...</p>
          <button><FcGoogle size='3rem' /><p>Google</p></button>
        </IngresarConRedes>

        <NavLink to='/registrate'><Href>No tenes cuenta? <span>Registrate aqui</span></Href></NavLink>

      </Contenedor>
    </div>
  )
};
