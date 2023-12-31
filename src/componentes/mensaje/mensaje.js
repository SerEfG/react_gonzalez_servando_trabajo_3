import React, { useState } from "react";
import './mensaje.css';

const Mensaje = () =>{
    //Declaramos el estado 'nombre' con el valor inicial 'Hermione'
    const [nombre, SetNombre] = useState('');
    //Esta función es la que cambia el valor del nombre a Harry
    const CambiaNombre = () => {
        SetNombre (<h2>¡¡Gracias por la compra!!</h2>);
        setTimeout(function() {
            window.location.reload('/home');
        }, 10000);
    }

    return(
        <div>
            <h3>¿Compra todo lo que figura en pantalla?</h3>
            <h4>{nombre}</h4>
            <button className='button' onClick={CambiaNombre}>Comprar</button>
        </div>
        
    );
    
};

export default Mensaje;