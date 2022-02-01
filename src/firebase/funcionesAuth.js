import firebaseApp from "./config";
import {getAuth,signInWithEmailAndPassword,signOut} from "firebase/auth";

const auth = getAuth(firebaseApp);


//inicair sesion con email y contrasena
export const ingresarConEmail = async(email, password) => {
    
    try {

        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
        
    } catch (error) {
        console.log(error);
        return error.message;
    }
} 

//cerrar sesion
export const cerrarSesion = () => {
    signOut(auth);
}



