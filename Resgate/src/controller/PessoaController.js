import Produto from '../models/Produto';

export default class ContatoController {
    async salvar(pessoa) {
        const pessoaSalvo = await Pessoa.create(pessoa);
        return pessoaSalvo;
    }
    async recuperarTodos() {
        const pessoas = await Pessoa.find();
        return pessoas;
    }
    async recuperarPorNome (descricaoConsulta) {
       const pessoas =  await Pessoa.find({
            descricao: {
                '$regex': descricaoConsulta,
                '$options': 'i'
            }
        });
        return pessoas;

    }
    async recuperPeloId(id){
       const pessoa =  await Pessoa.findById(id);
       return pessoa;
    }
    async remover(id){
     const resposta =  await Pessoa.deleteOne({
            _id:id
        });
        return resposta;
    }
}