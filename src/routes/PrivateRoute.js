import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { firebaseContext } from '../firebase/context';

export const PrivateRoute = ({ children }) => {

    const {usuario} = useContext(firebaseContext);
    return (
        <>
        {
            (usuario) ? 
            <>
            {
                (usuario.ok) ? children
                :
                <Navigate to='/ingresar'/>
            }
            </>
            :
            <h1>Cargando...</h1>
        }
        </>
    )

};
