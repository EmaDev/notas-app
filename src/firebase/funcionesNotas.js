import firebaseApp from "./config";
import { getFirestore, doc, collection, getDoc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(firebaseApp);

//Traer notas de un usuario
export const getNotas = async (uid) => {

    const docRef = doc(db, 'notas', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return { ok: true, notas: data.notas };
    } else {
        return { ok: false };
    }
}

//Detectar cambios en Notas

export const getNotasTimepoReal = async (uid, setStateNotas) => {

    try {
        onSnapshot(doc(db, 'notas', uid), (doc) => {

            const data = doc.data();
            
            setStateNotas(data.notas);
        });

    } catch (error) {

        return {ok: false, msg: error.message};
    }

}

//Crear nota

export const crearNota = async(uid, titulo='', descripcion, importancia) => {

    try {
        const docRef = doc(db, "notas", uid);

        const data = {
            titulo,
            descripcion,
            importancia,
            fecha: new Date(),
            id: uuidv4(),
        }
        await updateDoc(docRef, {
            notas: arrayUnion({...data})
        });

    } catch (error) {
        console.log(error);
    }

}
