import React from 'react';
import CampoFormulario from './CampoFormulario';
import 'bootstrap/dist/css/bootstrap.css';
import './Formulario.css';

const formulario = (props) => {
    return (
        <form className="Form" onSubmit={props.submit}>
            <h1 className="display-1">{props.info.titulo}</h1>
            {props.info.campos.map((campo) => {
                return <CampoFormulario dados={campo} />
            })}
            <button type='submit'>Enviar</button>
        </form>
    );
}

export default formulario;