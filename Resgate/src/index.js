import * as db from './config/db';
import PessoaController from './controller/PessoaController';
import Pessoa from './model/Pessoa';

const pessoaCtlr = new PessoaController;

let recuperarPessoas = async () => {
    db.conectarBD();
     const pessoas =await pessoaCtlr.recuperarTodos();
     pessoas.forEach(produto=>console.log(pessoa));
   const pessoa = new Pessoa({
      nome: 'Maria',
      areaDeAtuacao: 'TI',
      telefone:'9999-9999',
      endereco:'Rua 13 de maio, 123'
   });
   const pessoaSalvo = await PessoaController.salvar(pessoa);
   console.log(pessoaSalvo);


db.desconectarBD();
}
recuperarPessoas();

