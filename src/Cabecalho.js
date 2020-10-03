import React from 'react';

const cabecalho = (props) => {
    return(
        <header>
            <nav>
                <a href="#" onClick={() => props.navegacao('home')}>Home</a>
                {props.loggedin ? null : <a href="#" onClick={() => props.navegacao('formulario')}>Cadastro</a>}
                {props.loggedin ? <a href="#" onClick={() => props.navegacao('perfil')}>Perfil</a> : null}
            </nav>
        </header>
    );
}

export default cabecalho;