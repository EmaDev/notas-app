import styled from "@emotion/styled";

export const Contenedor = styled.div`
   margin: auto;
   margin-top: 2rem;
   margin-bottom: 2rem;
   padding: 1rem;
   width: 95%;
   max-width: 500px;
   background-color: var(--negro);
   border-radius: 8px;
   `;

export const Titulo = styled.h1`
   font-size: 3rem;
   font-weight: 700;
   color: var(--blanco);
   margin: 1rem 2rem;
`; 

export const Formulario = styled.form`
   width: 95%;
   margin: auto;
   color: var(--negro);

   label{
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--blanco);
   }

`;

export const Input = styled.div`
   width: 100%;
   padding: .5rem;
   border-radius: 3px;
   display: grid;
   grid-template-columns: 15% 85%;
   color: var(--blanco);
   border-bottom: 2px solid var(--verde);
   margin-bottom: 1rem;

   input{
    border-style: none;
    background: none;
    color: var(--blanco);
    font-size: 1.6rem;
   }
`;

export const Boton = styled.button`
   border-style: none;
   display: block;
   margin: auto;
   margin-top: 3rem;
   margin-bottom: 1rem;
   width: 90%;
   padding: 1rem;
   border-radius: 6px;
   background-color: var(--amarillo);
   color: var(--negro);
   font-size: 1.8rem;
   font-weight: 700;
   text-transform: uppercase;
`

export const Imagen = styled.div`
   width: 60%;
   max-width: 200px;
   margin: auto;

   background-color: var(--gris3);
   border-radius: 90%;
   padding: 0 1rem;
   
`

export const BotonRedes = styled.button`
   display: block;
   margin: auto;
   width: 90%;
   padding: 1rem;
   color: var(--negro);
   background-color: var(--blanco);

`;

export const IngresarConRedes = styled.div`
    width: 95%;
    padding: 1rem;
    margin: auto;

    p{
        font-size: 1.7rem;
        color: var(--grisClaro);
        font-weight: 700;
        margin: 0;
        text-align: center;
    }

    button{
        display: grid;
        grid-template-columns: 10% 90%;
        margin: 1.5rem auto;
        width: 90%;
        padding: 1rem;
        color: var(--negro);
        background-color: var(--blanco);
        border-radius: 8px;
        align-items: center;
        border-style: none;

        p{
            margin: 0;
            color: var(--negro);
        }
    }
`;

export const Href = styled.p`
   margin: auto;
   margin-bottom: 1rem;
   text-align: center;
   color: var(--grisClaro);
   font-size: 1.6rem;
   font-weight: 600;

   span{
       font-weight: 700;
   }
`