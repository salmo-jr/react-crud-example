import React from 'react';
import ClienteContext from './context/clienteContext';

const entrada = (props) => {
    /* const attr = (type) => {
        return {...props.atributos, type}
    }; */
    const type = props.type;
    const attr = {...props.atributos, type}
    return (
    <ClienteContext.Consumer>
        { context => {
            attr.value = context.cliente[attr.id];
        return <input {...attr} onChange={context.change} /> }}
    </ClienteContext.Consumer>
    );
}

export default entrada;