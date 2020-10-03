import React from 'react';

const perfil = (props) => {
    return(
        <div>
            <div>
                <div>ID: {props.cliente.id}</div>
                <div>Nome: {props.cliente.nome}</div>
                <div>E-mail: {props.cliente.email}</div>
                <div>CPF: {props.cliente.cpf}</div>
            </div>
            <a href="#" onClick={() => props.navegacao('formulario')}>Editar</a>
            <a href="#" onClick={props.remover}>Excluir</a>
        </div>
    );
}

export default perfil;