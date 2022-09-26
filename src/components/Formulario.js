import React, { useRef } from 'react'

export const Formulario = () => {

    const nombreValue = useRef();
    const apellidosValue = useRef();
    const emailValue = useRef();
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();

        console.log(nombreValue.current.value);
        console.log(apellidosValue.current.value);
        console.log(emailValue.current.value);

        // mi caja
        console.log(miCaja);
        let { current: caja } = miCaja;
        // cambiando el findo a rojo cuando se da a enviar
        caja.classList.add('fondoRojo');
        // sobreescribiendo el texto que hay dentro cuando se da a enviar
        caja.innerHTML = 'Formulario enviado!!!';

    }

    return (
        <div>
            <h1>Formulario</h1>

            <div ref={miCaja} className='miCaja'>
                <h2>Pruebas con useRef</h2>
            </div>

            <form onSubmit={mostrar}>
                <input type='text' placeholder='Nombre' ref={nombreValue} /> <br/>
                <input type='text' placeholder='Apellidos' ref={apellidosValue} /> <br/>
                <input type='email' placeholder='Correo electronico' ref={emailValue} /> <br/>

                <input type='submit' value='Enviar' />
            </form>

            <button onClick={() => nombreValue.current.select()}>Empezar a rellenar el Formulario</button>

        </div>
    )
}
