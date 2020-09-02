import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    areaDeAtuacao: {
        type: String,
        required: true
    },
    telefone:{
        type: String
    },
    endereco:{
        type: String
    },

});

const Pessoa = mongoose.model('Pessoa', esquema);

export default Pessoa;
