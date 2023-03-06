
const fs = require('fs')
const chalk = require('chalk')

global.owner = ['554891089432','558588631124']
global.premium = ['554891089432']
global.packname = 'Flay Bot Figurinhas'
global.author = 'Dono: +55 48 9108-9432'
global.sessionName = 'conexao'
global.prefa = '/'
global.sp = '⭔'
global.msg = {
    sucesso: '➥ Comando executado com sucesso!',
    admin: '➥ Apenas Admins pode usar esse comando!',
    botAdmin: '➥ Eu preciso ser admin para executar esse comando!',
    dono: '➥ Apenas meu dono pode utilizar esse comando!',
    grupo: '➥ Esse comando só pode ser usado em grupos!',
    privado: '➥ Esse comando só pode ser usado no privado do bot!',
    bot: '➥ Recurso especias do usuário do número do bot!',
    aguarde: '➥ Aguarde alguns segundos!',
    limitemsg: '➥ Seu limite diário acabou, o limite será redefinindo a cada 12 horas!'    
}

global.limitawal = {
    premium: 50,
    free: 10
}
global.limite_restante = {
    premium: "Infinito",
    restante: 50
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = {
    port: '5000',
    apikeypremium: 'flayvipprivx',
    limitCount: 0,
    dinheiroCount: 10,
    limitPremium: 900,
    tokens: 'adms_ofcs',    
    dbURI: 'mongodb+srv://MRROOTS:Pietro0211@cluster0.dxicbwi.mongodb.net/?retryWrites=true&w=majority' 
};
 