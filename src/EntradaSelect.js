import React from 'react';
import ClienteContext from './context/clienteContext';

const entradaSelect = (props) => {
    return(
        
        <ClienteContext.Consumer>
            {context => {
                props.atributos.defaultValue = context.cliente[props.atributos.id];
                return(
                <select {...props.atributos} onChange={context.change}>
                    
                    {props.opcoes.map((opt, i) => {
                        return(
                            <option key={opt.legenda + i} value={opt.value}>{opt.legenda}</option>
                        );
                    })}
                </select>)
            }}
        </ClienteContext.Consumer>
        
    );
}

export default entradaSelect;