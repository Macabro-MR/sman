const { usuario } = require('./model');
const { limitCount, dinheiroCount, limitPremium } = require('../config.js');

    async function add_usuario(nome, senha, apikey) {
        let obj = { nome, senha, apikey, defaultKey: apikey, premium: null, limit: limitCount, dinheiro: dinheiroCount };
        usuario.create(obj);
    }    
    async function verificar_nome(nome) {
        let usuarios = await usuario.findOne({nome: nome});
        if(usuarios !== null) {
            return usuarios.nome;
        } else {
            return false;
        }
    }    
    async function pegar_apikey(id) {
        let usuarios = await usuario.findOne({_id: id});
        return {apikey: usuarios.apikey, nome: usuarios.nome};
    }        
    async function verifyp(apikey) {
        let db = await usuario.findOne({apikey: apikey});
        if(db === null) {
            return false;
        } else {
            return db.apikey;
        }
    }        
  async function addl(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        let min = key.limit - 1;
        usuario.updateOne({apikey: apikey}, {limit: min}, function (err, res) {
            if (err) throw err;
        })
    }    
  async function verificar_limit(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.limit;
    }
  async function isL(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        if (key.limit <= 0){
            return true;
        } else {
            return false;
        }
    }    
      async function verificar_dinheiro(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.dinheiro;
    }
    async function adicionar_dinheiro(nome, quantia) {
        let key = await usuario.findOne({nome: nome});
        let dindin = key.dinheiro += quantia;
        usuario.updateOne({nome: nome}, {dinheiro: dindin}, function (err, res) {
            if (err) throw err;
        })
    }    
     async function Totalregistrados() {
        let db = await usuario.find({})
        return db.length
    }    
    
        async function resetar_todos_limit() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { premium, nome } = data
            if (premium !== null) {
                return usuario.updateOne({nome: nome}, {limit: limitPremium}, function (err, res) {
                    if (err) throw err;
                })   
            } else {
                return usuario.updateOne({nome: nome}, {limit: limitCount}, function (err, res) {
                    if (err) throw err;
                })
            }
        })
    }
    


//NÃO MEXA    
module.exports.add_usuario = add_usuario;
module.exports.verificar_nome = verificar_nome;
module.exports.pegar_apikey = pegar_apikey;
module.exports.verifyp = verifyp;
module.exports.addl = addl;
module.exports.verificar_limit = verificar_limit;
module.exports.adicionar_dinheiro = adicionar_dinheiro;
module.exports.verificar_dinheiro = verificar_dinheiro;
module.exports.isL = isL;
module.exports.Totalregistrados = Totalregistrados;
module.exports.resetar_todos_limit = resetar_todos_limit;