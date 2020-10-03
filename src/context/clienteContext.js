import React from 'react';

const clienteContext = React.createContext({
    cliente: {
        nome: '',
        telefone: '',
        cpf: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        email: ''
    },
    change: () => {},
    create: () => {},
    read: () => {},
    update: () => {},
    delete: () => {}
});

export default clienteContext;