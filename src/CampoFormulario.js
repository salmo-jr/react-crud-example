import React from 'react';
import Entrada from './Entrada';
import EntradaSelect from './EntradaSelect';

const campoFormulario = (props) => {
    let campo; 
    switch(props.dados.type){
        case 'select':
            campo = <EntradaSelect atributos={props.dados.atributos} opcoes={props.dados.opcoes} />
            break;
        default:
            campo = <Entrada type={props.dados.type} atributos={props.dados.atributos}/>
            break;
    }
    return (
        <div >
            <label
                htmlFor={props.dados.atributos.id}
                
                >{props.dados.label}</label>
            {campo}
        </div>
    );
}

export default campoFormulario;