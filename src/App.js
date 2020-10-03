import React, {Component} from 'react';
import Cabecalho from './Cabecalho';
import Perfil from './Perfil';
import Formulario from './Formulario';
import FormCad from './formCadCliente.json';
import ClienteContext from './context/clienteContext';

class App extends Component {
  state = {
    pagina: 'home',
    loggedin: false,
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
    }
  };

  handleChange = (event) => {
    const updateCliente = {...this.state.cliente};
    updateCliente[event.target.name] = event.target.value;
    this.setState({cliente: updateCliente});
  }

  navegacao = (alvo) => {
    this.setState({pagina: alvo});
  }

  buscaPerfil = (email) => {
    
    fetch('http://localhost:4000/clientes/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state.cliente)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data[0]);
        this.setState({ cliente:data[0] });
        this.setState({ loggedin:true });
      });
    this.navegacao('perfil');
  }

  createCliente = (event) => {
    //alert('A form was submitted: ' + this.state.cliente.nome);

    fetch('http://localhost:4000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state.cliente)
      }).then(function(response) {
        console.log(response);
        return response.json();
      });

    event.preventDefault();
    this.buscaPerfil(this.state.cliente.email);
  };

  updateCliente = (event) => {
    //alert('A form was submitted: ' + this.state.cliente.nome);

    fetch('http://localhost:4000/clientes/' + this.state.cliente.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state.cliente)
      }).then(function(response) {
        console.log(response);
        return response.json();
      });

    event.preventDefault();
    this.buscaPerfil(this.state.cliente.email);
  };

  deleteCliente = () => {

    fetch('http://localhost:4000/clientes/' + this.state.cliente.id, {
        method: 'DELETE'
      }).then(function(response) {
        console.log(response);
        return response.json();
      });
    this.setState({cliente: {
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
      }
    });
    this.setState({loggedin: false});
    this.navegacao('home');
  };

  
  render(){
    let conteudoPagina = null;

    switch(this.state.pagina){
      case 'formulario':
        conteudoPagina = (
          <ClienteContext.Provider
            value={{
              cliente: this.state.cliente,
              change: this.handleChange
            }}
          >
            <Formulario info={FormCad} submit={this.state.loggedin ? this.updateCliente : this.createCliente} />
          </ClienteContext.Provider>
        );
        break;
      case 'perfil':
        conteudoPagina = (
          <Perfil cliente={this.state.cliente} navegacao={this.navegacao} remover={this.deleteCliente} />
        );
        break;
      default:
        conteudoPagina = (
          <h1>Hi!</h1>
        )
        break;
    }

    return(
      <div>
        <Cabecalho navegacao={this.navegacao} loggedin={this.state.loggedin} />
        {conteudoPagina}
      </div>
    );
  }
}

export default App;
