import Cliente from '../model/Cliente';

export default class ClienteController{

    criarCliente (nome, endereco, cpf, telefone){
    
    let cliente = new Cliente(nome, endereco, cpf, telefone);   
    return cliente;
    }
}
