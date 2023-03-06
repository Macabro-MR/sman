
// APP_USR-6946846670395658-021211-b841149e71656b60f486701163e27ceb-1036874538

// access_token: 'TEST-6946846670395658-021211-ee13f7fbaf1e0d86b31f9bb1743b662e-1036874538'
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'TEST-6946846670395658-021211-ee13f7fbaf1e0d86b31f9bb1743b662e-1036874538'
});
/*
//API MERCADO PAGO
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'APP_USR-6946846670395658-021211-b841149e71656b60f486701163e27ceb-1036874538'
});
*/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
//const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const ms = require('parse-ms')
const toMs = require('ms')
const request = require('request');
const primbon = new Primbon()
const { color, bgcolor } = require('./funçoes/lib/color')
const { getHashedPassword, randomText } = require('./funçoes/function');
const { verifyp, addl, isL, verifyL, verificar_nome, add_usuario, verificar_limit } = require("./funçoes/db");
const { checkPremium, addPremium, deletePremium, changeKey } = require("./funçoes/premium");
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./funçoes/lib/myfunc')
const { ia } = require('./funçoes/lib/ia')
const { apiInstagram } = require('./funçoes/lib/g-curtidas')
const historico = JSON.parse(fs.readFileSync('./funçoes/lib/consultas/historico.json'))
const antidoc = JSON.parse(fs.readFileSync('./funçoes/antitravas/antidoc.json'))
const anticon = JSON.parse(fs.readFileSync('./funçoes/antitravas/anticon.json'))
const antiloc = JSON.parse(fs.readFileSync('./funçoes/antitravas/antiloc.json'))
const anticat = JSON.parse(fs.readFileSync('./funçoes/antitravas/anticat.json'))
const antifigu = JSON.parse(fs.readFileSync('./funçoes/antitravas/antifigu.json'))
const antifoto = JSON.parse(fs.readFileSync('./funçoes/antitravas/antifoto.json'))
const antiaudio = JSON.parse(fs.readFileSync('./funçoes/antitravas/antiaudio.json'))
const antivideo = JSON.parse(fs.readFileSync('./funçoes/antitravas/antivideo.json'))
const antilink = JSON.parse(fs.readFileSync('./funçoes/antilink/antilink.json'))
const config_prefixo = JSON.parse(fs.readFileSync('./funçoes/prefixo/prefixo.json'))
const premium = require("./funçoes/lib/premium");
const premiumgp = require("./funçoes/lib/premiumgp");
const _tpendent = JSON.parse(fs.readFileSync('./funçoes/tokens/token_pendente.json'))
const _premium = JSON.parse(fs.readFileSync('./funçoes/usuarios/premium.json'));
const _premiumgp = JSON.parse(fs.readFileSync('./funçoes/grupo/premium.json'));
const dinheiro = JSON.parse(fs.readFileSync('./funçoes/usuarios/dinheiro.json'))
const vip_expiradogp = JSON.parse(fs.readFileSync('./funçoes/grupo/vip_expiradogp.json'))
let termos = JSON.parse(fs.readFileSync('./funçoes/usuarios/termo.json'))
const _level = JSON.parse(fs.readFileSync('./funçoes/level/level.json'))
const pix_pend = JSON.parse(fs.readFileSync('./funçoes/tokens/pix_pendentes.json'))
const pix_pago = JSON.parse(fs.readFileSync('./funçoes/tokens/pix_pago.json'))
const pix_gerados = JSON.parse(fs.readFileSync('./funçoes/tokens/tokens_pix.json'))
const compra_atual_usuario = JSON.parse(fs.readFileSync('./funçoes/historico/compra_atual_usuario.json'))
const compra_atual_grupo = JSON.parse(fs.readFileSync('./funçoes/historico/compra_atual_grupo.json'))
const compras_usuario = JSON.parse(fs.readFileSync('./funçoes/historico/compras_usuarios.json'))
const compras_grupo = JSON.parse(fs.readFileSync('./funçoes/historico/compras_grupos.json'))


const varping = speed();
const ping = speed() - varping
const tempo_de_consulta = "30000"//ms
fake = "TheCybers Robot️ ©"
// https://www.whatsapp.com/otp/copy/
let vote = db.data.others.vote = []
let userr2 = global.db.data.users[m.sender]
const semreg = `┏━「 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗘 - 𝗦𝗘 」┓
┃Olá, você não está registrado!
┃Para se registrar digite: /𝗿𝗴
┗━━━━━━━━━━━━━━━┛`  
let prem2 = [
`554891089432@s.whatsapp.net`,
`558981457096@s.whatsapp.net`
//`559992155537@s.whatsapp.net`
]

let premGp =[
`554884555584-1603065897@g.us`, // GRUPO TESTE
`994409567740-1621113533@g.us`, // GRUPO DO BOT 
`120363042407070358@g.us` // GP TESTE CMD
] 

let gpvip1 = `994409567740-1621113533@g.us`

module.exports = client = async (client, m, chatUpdate, store) => {
    try {                
        let usuario = global.db.data.users[m.sender]
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' 
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefixo = "/"
        const isCmd = body.startsWith(prefixo)
        const command = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Desconhecido"
        const botNumber = await client.decodeJid(client.user.id)
        const isDono = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const texto = q = args.join(" ")
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // GRUPO
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isDoc = m.isGroup ? antidoc.includes(m.chat) : false       
        const isCon = m.isGroup ? anticon.includes(m.chat) : false        
        const isLoc = m.isGroup ? antiloc.includes(m.chat) : false
        const isCat = m.isGroup ? anticat.includes(m.chat) : false  
        const isFig = m.isGroup ? antifigu.includes(m.chat) : false        
        const isFoto = m.isGroup ? antifoto.includes(m.chat) : false
        const isAd = m.isGroup ? antiaudio.includes(m.chat) : false 
        const isVide = m.isGroup ? antivideo.includes(m.chat) : false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false  
        const isVipExpiradoGp = m.isGroup ? vip_expiradogp.includes(m.chat) : false 
        const isVid = (m.mtype === 'videoMessage')
        const isDocumento = (m.mtype === 'documentMessage')
        const isAud = (m.mtype === 'audioMessage')
        const isContato = (m.mtype === 'contactsArrayMessage')
        const isContatox = (m.mtype === 'contactMessage')
        const isLocalização = (m.mtype === 'locationMessage')
        const isCatalogo = (m.mtype === 'productMessage')  
        const isFigu = (m.mtype === 'stickerMessage')
        const ImgMessa = (m.mtype === 'imageMessage')
        const videoo = isVide ? '✓' : '✗'
        const figurinhaa = isFig ? '✓' : '✗' 
        const fotoo = isFoto ? '✓' : '✗'   
        const audioo = isAd ? '✓' : '✗'   
        const catalogoo = isCat ? '✓' : '✗' 
        const localizacaoo = isLoc ? '✓' : '✗'   
        const contatoo = isCon ? '✓' : '✗'   
        const documentoo = isDoc ? '✓' : '✗' 
        const antlinkk = isAntiLink ? '✓' : '✗'        
        const isPremium = premium.checkPremiumUser(m.sender, _premium)
        const isPremiumgp = premiumgp.checkPremiumGp(m.chat, _premiumgp)           
        const isCompraAtualGp = m.isGroup ? compra_atual_grupo.includes(m.chat) : true    
        const isPremium2 = prem2.includes(m.sender)
    	const premm2 = isPremium2 ? '✅' : '❌' 	
    	const isPremiumGp = m.isGroup ? premGp.includes(m.chat) : true
        const isTermo = termos.includes(m.sender)        
        const nmrp = m.sender.replace("@s.whatsapp.net", "")
    	const premmGp = isPremiumGp ? 's' : 'n'  
        const tokenvip = 'zzz8ZlgWmrYD'   	        
    	let sender = m.isGroup ? m.participant : m.key.remoteJid	
        const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
        const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
        const horario = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
        const msg_espera = `➥ Aguarde ${pushname}, estou consultando os dados...`     
        const txt_button = `👋 Olá ${pushname}!\n━━━━━━━━━━━━━━━━\n• 𝘗𝘢𝘳𝘢 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘳 𝘢𝘴 𝘤𝘰𝘯𝘴𝘶𝘭𝘵𝘢𝘴 𝘥𝘦𝘴𝘥𝘦 𝘣𝘰𝘵, 𝘷𝘰𝘤𝘦̂ 𝘱𝘳𝘦𝘤𝘪𝘴𝘢 𝘢𝘤𝘦𝘪𝘵𝘢𝘳 𝘰𝘴 𝘴𝘦𝘨𝘶𝘪𝘯𝘵𝘦𝘴 𝘵𝘦𝘳𝘮𝘰𝘴 𝘥𝘦 𝘶𝘴𝘰 𝘨𝘦𝘳𝘢𝘪𝘴!

~> 𝘼𝙤 𝙪𝙨𝙖𝙧 𝙚𝙨𝙨𝙚 𝙗𝙤𝙩, 𝙫𝙤𝙘𝙚̂ 𝙘𝙤𝙣𝙘𝙤𝙧𝙙𝙖 𝙘𝙤𝙢 𝙖 𝙇𝙚𝙞 𝙣° 13.709/2018 (𝘓𝘦𝘪 𝘎𝘦𝘳𝘢𝘭 𝘥𝘦 𝘗𝘳𝘰𝘵𝘦𝘤̧𝘢̃𝘰 𝘥𝘦 𝘋𝘢𝘥𝘰𝘴 𝘗𝘦𝘴𝘴𝘰𝘢𝘴 "𝘓𝘎𝘗𝘋").

~> 𝙉𝙖̃𝙤 𝙨𝙚𝙧𝙖́ 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙣𝙚𝙣𝙝𝙪𝙢𝙖 𝙩𝙚𝙣𝙩𝙖𝙣𝙩𝙞𝙫𝙖 𝙙𝙚 𝙛𝙧𝙖𝙪𝙙𝙚 𝙣𝙖𝙨 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙨, 𝙞𝙣𝙘𝙡𝙪𝙞𝙣𝙙𝙤 𝙖 𝙚𝙭𝙩𝙧𝙖𝙘̧𝙖̃𝙤 𝙙𝙚 𝙙𝙖𝙙𝙤𝙨.

 ⚠️『 𝗔𝗩𝗜𝗦𝗢 』⚠️
 
 • Não nos responsabilizamos por qualquer tipo de uso indevido dos dados obtidos através do bot.
━━━━━━━━━━━━━━━━`     
 
        const sinal1 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `📍 𝗦𝗶𝗻𝗮𝗹 𝗖𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝗱𝗼 📍️`, 'jpegThumbnail': fs.readFileSync('./funçoes/media/logo.jpg')}}}  

        const TheCyberss = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗧𝗵𝗲𝗖𝘆𝗯𝗲𝗿𝘀 𝗥𝗼𝗯𝗼𝘁️ 🤖`, 'jpegThumbnail': fs.readFileSync('./funçoes/media/logo.jpg')}}}                  
         
        const selo_termo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `🚩 𝗧𝗘𝗥𝗠𝗢𝗦 𝗗𝗘 𝗨𝗦𝗢 🚩`}}} 
 
        const selo23 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗦𝗲𝗷𝗮 𝘃𝗶𝗽 𝗲 𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗲 𝘀𝗲𝗺 𝗹𝗶𝗺𝗶𝘁𝗲𝘀! 💡`}}}            
        
        const selo24 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗢𝗯𝗿𝗶𝗴𝗮𝗱𝗼 𝗽𝗼𝗿 𝘀𝗲𝗿 𝗽𝗿𝗲𝗺𝗶𝘂𝗺! 👑`}}}     
           
        const selo25 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗢𝗯𝗿𝗶𝗴𝗮𝗱𝗼 𝗽𝗼𝗿 𝗳𝗮𝘇𝗲𝗿 𝗽𝗮𝗿𝘁𝗲 𝗱𝗲𝘀𝘀𝗲 𝗴𝗿𝘂𝗽𝗼! 👑`}}}     
                  
        const selo26 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `💌 CONVITE 💌️\n➥ Grupo: ${groupMetadata.subject}`, 'jpegThumbnail': fs.readFileSync('./funçoes/media/logo.jpg')}}}   
                
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!isNumber(user.consultas)) user.consultas = -1  
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limite_comprado)) user.limite_comprado = 0                
                if (!isNumber(user.limite)) user.limite = limitUser                
                if (!isNumber(user.carteira)) user.carteira = 0
                if (!isNumber(user.token_pix)) user.token_pix = 0
                if (!isNumber(user.pendente)) user.pendente = 0
                if (!isNumber(user.limite_restante)) user.limite_restante = 0
            } else global.db.data.users[m.sender] = {
                afkReason: '',
                afkTime: -1,
                consultas: -1,
                limite_restante: 0,
                limite_comprado: 0,
                limite: limitUser,
                carteira: 0,
                pendente: 0,
                token_pix: 0
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('boasvindas' in chats)) chats.boasvindas = false
            } else global.db.data.chats[m.chat] = {                
                mute: false,
                antilink: false,                
                boasvindas: false
                
            }
                        		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    	    
        } catch (err) {
            console.error(err)
        }
	    
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}	    
        // PRIVADO E PUBLICO
        if (!client.public) {
            if (!m.key.fromMe) return
        }

if (!m.isGroup && isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━╮', 'magenta')}\n${color('┃', 'magenta')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'white')}\n${color('┃', 'magenta')} ${color('Nome:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'magenta')} ${color('Data:', 'yellow')} ${color(hr, 'white')}\n${color('┃', 'magenta')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'magenta')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━╯', 'magenta')}`)
if (!m.isGroup && !isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━╮', 'magenta')}\n${color('┃', 'magenta')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'white')}\n${color('┃', 'magenta')} ${color('Nome:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'magenta')} ${color('Data:', 'yellow')} ${color(hr, 'white')}\n${color('┃', 'magenta')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'magenta')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━╯', 'magenta')}`)
if (m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━╮', 'magenta')}\n${color('┃', 'magenta')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'white')}\n${color('┃', 'magenta')} ${color('Nome:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'magenta')} ${color('Data:', 'yellow')} ${color(hr, 'white')}\n${color('┃', 'magenta')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'magenta')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'white')}\n${color('┃', 'magenta')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━╯', 'magenta')}`)
if (!m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━╮', 'magenta')}\n${color('┃', 'magenta')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'white')}\n${color('┃', 'magenta')} ${color('Nome:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'magenta')} ${color('Data:', 'yellow')} ${color(hr, 'white')}\n${color('┃', 'magenta')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'magenta')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'white')}\n${color('┃', 'magenta')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━╯', 'magenta')}`)        
	
	// RESETAR LIMITE A 12 HORAS
        let cron = require('node-cron')
        cron.schedule('45 13 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) {
                global.db.data.users[jid].limit = limitUser
                global.db.data.users[jid].limit += global.db.data.users[jid].limit_comprado 
                console.log('Limite Resetado')                
                client.sendMessage(`${jid.id.split('@')[0]}` + "@s.whatsapp.net", {text: `🔔 Seu limite foi resetado!`})
            }
            
        }, {
            scheduled: true,
            timezone: "America/Sao_Paulo"
        }) 

	    
      // MUTAR
      if (db.data.chats[m.chat].mute && !isAdmins && !isDono) {
      return
      }
const getTokenPixPendRandomId = () => {
return pix_pend[Math.floor(Math.random() * pix_pend.length)].id
}
const addTokenPixPendente = (token, numero, valor, data, hora) => {
const obj = { id: token, numero: numero, valor: valor, data: data, hora: hora}
pix_pend.push(obj)
fs.writeFileSync('./funçoes/tokens/pix_pendentes.json', JSON.stringify(pix_pend))
}
const getTokenPixRandomId = () => {
return pix_gerados[Math.floor(Math.random() * pix_gerados.length)].id
}
const addTokenPix = (token, numero, valor, data, hora) => {
const obj = { id: token, numero: numero, valor: valor, data: data, hora: hora}
pix_gerados.push(obj)
fs.writeFileSync('./funçoes/tokens/tokens_pix.json', JSON.stringify(pix_gerados))
}
const getTokenPagoRandomId = () => {
return pix_pago[Math.floor(Math.random() * pix_pago.length)].id
}
const addTokenPago = (token, numero, valor, data, hora) => {
const obj = { id: token, numero: numero, valor: valor, data: data, hora: hora}
pix_pago.push(obj)
fs.writeFileSync('./funçoes/tokens/pix_pago.json', JSON.stringify(pix_pago))
}
const addCompraAtualUser = (userid, data, hora, valor, validade, compra) => {
const obj = { id: userid, data: data, hora: hora, valor: valor, validade: validade, compra: compra}
compra_atual_usuario.push(obj)
fs.writeFileSync('./funçoes/historico/compra_atual_usuario.json', JSON.stringify(compra_atual_usuario))
}
const addCompraUser = (userid, data, hora, valor, validade, compra) => {
const obj = { id: userid, data: data, hora: hora, valor: valor, validade: validade, compra: compra}
compras_usuario.push(obj)
fs.writeFileSync('./funçoes/historico/compras_usuarios.json', JSON.stringify(compras_usuario))
}
const addCompraAtualGp = (grupo, data, hora, valor, validade, compra) => {
const obj = { id: grupo, data: data, hora: hora, valor: valor, validade: validade}
compra_atual_grupo.push(obj)
fs.writeFileSync('./funçoes/historico/compra_atual_grupo.json', JSON.stringify(compra_atual_grupo))
}
const addCompraGp = (userid, data, hora, valor, validade, compra) => {
const obj = { id: userid, data: data, hora: hora, valor: valor, validade: validade}
compras_grupo.push(obj)
fs.writeFileSync('./funçoes/historico/compras_grupos.json', JSON.stringify(compras_grupo))
}

        // RESPONDER COMANDO COM MEDIA
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
        }
	      // FUNÇOES
      const noprem = (texto) => {
      var buttons7 = [
      {buttonId: `${prefixo}preços`, buttonText: {displayText: 'Adquerir Plano 👑'}, type: 1}
      ]
      let buttonMessage7 = {
      text: `${texto}`,
      buttons: buttons7,
      headerType: 2
      }
      client.sendMessage(m.chat, buttonMessage7, {quoted: m})
}
      const nopremgp = (texto) => {
      var buttons7 = [
      {buttonId: `${prefixo}preços`, buttonText: {displayText: 'Adquerir Plano 👑'}, type: 1}
      ]
      let buttonMessage7 = {
      text: `${texto}`,
      buttons: buttons7,
      headerType: 2
      }
      client.sendMessage(m.chat, buttonMessage7, {quoted: m})
}
     const cliente = (texto) => {  
     client.sendMessage(m.chat, { text: texto }, {quoted: selo22})
}
     const cliente1 = (texto) => {  
     MsgAguarde(m.sender);
     if (global.db.data.users[m.sender].limite_restante < 5) {
     client.sendMessage(m.chat, { text: texto }, {quoted: m})
     } else {
     client.sendMessage(m.chat, { text: texto }, {quoted: selo23})
     }
}
     const clientevip = (texto) => {  
     client.sendMessage(m.chat, { text: texto }, {quoted: selo24})
}
     const clientegp = (texto) => {  
     client.sendMessage(m.chat, { text: texto }, {quoted: selo25})
}
           const MsgAguarde = async (sender) => {   
               if (!m.key.fromMe) {
                   if (!isDono) {
          //   m.reply(msg_espera)                     
                   let user2 = global.db.data.users[m.sender]
                   user2.consultas = + new Date
                   await sleep(tempo_de_consulta)
                   user2.consultas = -1
                   console.log(nmrp + " Eliminado do tempo de espera")
                   }
               }
           }
        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return client.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return client.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return client.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return client.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return client.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }		                    
     const enviar = (texto) => {
     client.sendMessage(m.chat, { text: texto }, {quoted: m})
}

         const delay = async (texto) => {
             client.sendMessage(m.chat, {text: `${texto}`})
             await sleep(50)
              exec("npm update")
             
         }
            const reagir = (id, key, emoji) => {
                const reactionMessage3 = {
                    react: {
                        text: emoji,
                        key: key
                    }
                }
                client.sendMessage(id, reactionMessage3)
                }         
         
const enviarbuton = (from, text, footer, buttons) => {
return client.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons })
}         
         
         // ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
    buttonMessage = {
    image: {url: img1},
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
    }
    client.sendMessage(id, buttonMessage, {quoted: m})
    }
    const reply = (texto) => {
        client.sendMessage(m.chat, { text: texto }, {quoted: m})
        }

  const comunicado = async (id, msg) => { // FEITO POR DARK
    const groupMetadata5 = m.isGroup ? await client.groupMetadata(id).catch(e => {}) : ''
    const participants5 = m.isGroup ? await groupMetadata5.participants : ''
      for (let mem of participants5) {
      client.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", {text: `${msg}`},{quoted: selo23})
      }
  }  

         const consult = async (texto) => {
            var buttons7 = [
            {buttonId: `del`, buttonText: {displayText: 'APAGAR 🗑️'}, type: 1},
            {buttonId: `copiar ${texto}`, buttonText: {displayText: 'CÓPIAR 📜'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(2000)
            await reagir(m.chat, m.key, "✅️")
            client.sendMessage(m.chat, buttonMessage7, {quoted: m})
            
            if (historico.includes(sender)) {
              return console.log("Enviando consulta..")
            } else {
            historico.push(`${sender.split('@')[0]}@s.whatsapp.net`)
            fs.writeFileSync('./funçoes/lib/consultas/historico.json', JSON.stringify(historico))
            await sleep(300000).then(res => {
            console.log(sender +" " + "apagado do historico")
            var dellhis = sender
            var positiovc = historico.indexOf(dellhis)
            historico.splice(positiovc, 1)
            fs.writeFileSync('./funçoes/lib/consultas/historico.json', JSON.stringify(historico))
            })
            }
            }
            const consultavip = async (texto) => {
            var buttons7 = [
            {buttonId: `copytext ${texto}`, buttonText: {displayText: 'CÓPIAR 📜'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            footer: `👑 Usuário: ${pushname}\n🔛 BY: ${fake}`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(5000)
            await reagir(m.chat, m.key, "✅️")
            client.sendMessage(m.chat, buttonMessage7, {quoted: m})          
            }
            const consultavipgp = async (texto) => {
            var buttons7 = [
            {buttonId: `copytext ${texto}`, buttonText: {displayText: 'CÓPIAR 📜'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(5000)
            await reagir(m.chat, m.key, "✅️")
            client.sendMessage(m.chat, buttonMessage7, {quoted: m})          
            }
            const consulta_comum = async (texto) => {
            var buttons7 = [
            {buttonId: `copytext ${texto}`, buttonText: {displayText: 'CÓPIAR 📜'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            footer: `👤 Usuário: ${pushname}\n🔛 BY: ${fake}`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(5000)
            await reagir(m.chat, m.key, "✅️")
            client.sendMessage(m.chat, buttonMessage7, {quoted: m}) 
            }  
            const botao_termo = async (texto) => {
            
            var buttons7 = [
            {buttonId: `sim_concordo_com_os_termos`, buttonText: {displayText: 'Sim, Concordo!'}, type: 2},
            {buttonId: `nao_concordo_com_os_termos`, buttonText: {displayText: 'Não Concordo!'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${txt_button}`,
            footer: `• 𝘊𝘢𝘴𝘰 𝘷𝘰𝘤𝘦̂ 𝘯𝘢̃𝘰 𝘤𝘰𝘯𝘤𝘰𝘳𝘥𝘦 𝘤𝘰𝘮 𝘯𝘰𝘴𝘴𝘰𝘴 𝘵𝘦𝘳𝘮𝘰𝘴 𝘥𝘦 𝘶𝘴𝘰 𝘷𝘰𝘤𝘦̂ 𝘯𝘢̃𝘰 𝘵𝘦𝘳𝘢́ 𝘢𝘤𝘦𝘴𝘴𝘰 𝘢𝘴 𝘤𝘰𝘯𝘴𝘶𝘭𝘵𝘢𝘴!`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(5000)
            await reagir(m.chat, m.key, "📚")
            client.sendMessage(m.chat, buttonMessage7, {quoted: selo_termo}) 
            }   
            const botao_ver_consultas = async (texto) => {
            
            var buttons7 = [
            {buttonId: `menu`, buttonText: {displayText: 'Ver Menu 📋'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            buttons: buttons7,
            headerType: 2
            }
            await sleep(5000)
            await reagir(m.chat, m.key, "🔓")
            client.sendMessage(m.chat, buttonMessage7, {quoted: selo_termo}) 
            }                                     
             
            const enviar_botão_compra_premium = async (texto) => {
            var buttons7 = [
            {buttonId: `menu`, buttonText: {displayText: 'Menu 📋'}, type: 2},
            {buttonId: `perfil`, buttonText: {displayText: 'Perfil 👤'}, type: 2},
            {buttonId: `recarregar`, buttonText: {displayText: 'Recarregar 💵'}, type: 2}
            
            ]
            let buttonMessage7 = {
        //    image: fs.readFileSync('./funçoes/media/logo.jpg'),
            text: `${texto}`,
            footer: fake,
            buttons: buttons7,
            headerType: 2
            }
            client.sendMessage(m.chat, buttonMessage7)       
            }            
    
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`O premium do usuário ${_dir[position].id} expirou`)  
            msgmr(`O premium do usuário ${_dir[position].id} expirou`)   
                               
        //    client.sendMessage(`${_dir[position].id.split("@")[0]}`, `PREMIUM ACABOU, BYE BYE 😎`)
            
           
            let gbot = `120363027131059748@g.us`
     //       client.groupLeave(gbot).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
        //    client.groupParticipantsUpdate(gbot, [_dir[position].id], 'remover').then((res) => m.reply(`➥ Usuário ${_dir[position].id.split("@")[0]}} adicionado no grupo com sucesso!`).catch((err) => m.reply(`➥ Erro ao lhe adicionar no grupo!\n\n➥ Foi enviado o link do grupo no seu privado, entre no grupo manualmente!`)))	
            _dir.splice(position, 1)
            fs.writeFileSync('./funçoes/usuarios/premium.json', JSON.stringify(_dir))
        }
    }, 1000)
} 
const expiredCheckGp = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`O  premium do Grupo ${_dir[position].id} expirou`)     
            
            let gvip = `${_dir[position].id}`  
            msgmr(`O ${gvip} premium do Grupo ${_dir[position].id} expirou`)              
    //        client.sendMessage(_dir[position].id, {text: `PREMIUM DESSE GRUPO ACABOU, BYE BYE 😎`}, {quoted: m})
            let msg_vipexpiradagp =  ` ⚠️「 𝗔𝗩𝗜𝗦𝗢 」⚠\n━━️️━━️━━━━️️━━️━━️━━\n• O plano do grupo vendeu! O bot será removido do grupo em 30 minutos se o grupo não tiver um plano ativo.\n━━️️━━️━━━━️️━━️━━️━━`
            var buttons7 = [
            {buttonId: `precovipgp`, buttonText: {displayText: 'Renovar Plano 👑'}, type: 2},
            
            ]
            let buttonMessage7 = {
        //    image: fs.readFileSync('./funçoes/media/logo.jpg'),
            text: msg_vipexpiradagp,
            footer: fake,
            buttons: buttons7,
            headerType: 2
            }
            client.sendMessage(_dir[position].id, buttonMessage7)          
           
            _dir.splice(position, 1)
            fs.writeFileSync('./funçoes/grupo/premium.json', JSON.stringify(_dir))
            vip_expiradogp.push(gvip)
   fs.writeFileSync('./funçoes/grupo/vip_expiradogp.json', JSON.stringify(vip_expiradogp))
        }
    }, 1000)
}			
            const add_dinheiro_padrão = (sender) => {
        	const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./funçoes/usuarios/dinheiro.json', JSON.stringify(dinheiro))
        }
        
premium.expiredCheck(_premium)     
expiredCheckGp(_premiumgp)  
        
        const add_dinheiro = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./funçoes/usuarios/dinheiro.json', JSON.stringify(dinheiro))
            }
        }                                                  
        const retirar_dinheiro = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./funçoes/usuarios/dinheiro.json', JSON.stringify(dinheiro))
            }
        }                
        
        const verificar_dinheiro = (sender) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
            const confirma_dinheiro = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./funçoes/usuarios/dinheiro.json', JSON.stringify(dinheiro))
            }
        }
                

/*            
const consults = async (texto) => {
            var buttons7 = [
            {buttonId: `${prefixo}del`, buttonText: {displayText: '🗑️ APAGAR'}, type: 1},
            {buttonId: `${prefixo}copiar ${texto}`, buttonText: {displayText: '📜 COPIAR'}, type: 2}
            ]
            let buttonMessage7 = {
            text: `${texto}`,
            footer: fake,
            buttons: buttons7,
            headerType: 2
            }
           // client.sendMessage(m.chat, buttonMessage7, {quoted: m})
//let messagex = await prepareWAMessageMedia({ image: fs.readFileSync('./funçoes/media/preços.png') }, { upload: client.waUploadToServer })
const templatex = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
//imageMessage: messagex.imageMessage,
hydratedContentText: texto,
hydratedButtons: [{
urlButton: {
displayText: 'COPIAR 🔗',
url: "https://www.whatsapp.com/otp/copy/" + `${texto}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, templatex.message, { messageId: templatex.key.id })      
await reagir(m.chat, m.key, "✅️")     
            }      */      
          const msgmr = (texto) => {
            client.sendMessage(`554891089432@s.whatsapp.net`, { text: texto })
        //    client.sendMessage(`558588631124@s.whatsapp.net`, { text: texto })
     //       client.sendMessage(`554891997578@s.whatsapp.net`, { text: texto })
            }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afkTime
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`Não marque ele, ele esta offline\nMotivo: ${reason ? '' + reason : 'Não especificado.'}

Offline por ${clockString(new Date - afkTime)}`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
    let user = global.db.data.users[m.sender]
    m.reply(`${pushname}, Você saiu do AFK!\nSeja bem vindo de volta!`.trim())
    user.afkTime = -1
    user.afkReason = ''
}


if (ImgMessa) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isFoto) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`) 
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x️] FOTO DETECTADO [x️]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')				
  await sleep(700)
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }
  if (isVid) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isVide) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`)  
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x️] VÍDEO DETECTADO [x️]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')				
  await sleep(700)
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }			
  if (isDocumento) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isDoc) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`) 
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x️] DOCUMENTO DETECTADO [x️]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')				
  await sleep(700)
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }
  if (isAud) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isAd) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`)  
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x️] ÁUDIO DETECTADO [x️]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')				
  await sleep(700)
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }			
  if (isFigu) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isFig) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`) 
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x] FIGURINHA DETECTADO [x]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')	
  await sleep(700)			
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }			
  if (isContatox) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isCon) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`) 
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x] CONTATO DETECTADO [x]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')	
  await sleep(700)			
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }
  if (isContato) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isCon) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`)  
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x] CONTATO DETECTADO [x]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')	
  await sleep(700)			
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 } 
  if (isLocalização) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isLoc) return
 if (isDono) return m.reply(`➥ Voce é meu dono, então pode! :)`)  
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)	
 m.reply('[x️] LOCALIZAÇÃO DETECTADA [x]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')
  await sleep(700)				
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
 }			
 if (isCatalogo) {
if (!m.key.fromMe){
 if (!m.isGroup) return
 if (!isCat) return
 if (isCreator) return m.reply(`➥ Voce é meu dono, então pode! :)`)
 if (isAdmins) return m.reply(`➥ Você é adm, fica tranquilo que não vou te remover!`)
 m.reply('[x] CATALOGO DETECTADO [x]')
 await sleep(200)
 m.reply('[x] VOCE SERÁ BANIDO [x]')	
  await sleep(700)
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply("➥ Usuário banido por quebrar as regras do grupo!")).catch((err) => m.reply("➥ Erro ao banir o usuário ❌"))
 }
}

        switch(command) {  
/*━━━━━━━ INICIO DOS COMANDOS ━━━━━━━━*/
/* case 'users': 
                if (!isDono) return m.reply("Somente meu dono pode usar esse comando, desculpe.")
                let user23 = Object.keys(global.db.data.users) //coletando todos os users da db
                tkks = `╭────「 *USUARIOS 👤* 」\n\nTotal: ${user23.length}\n`
                for (let i of user23) { //for para pegar TODOS os dados.
                  numero = i.replace("@s.whatsapp.net", "")
                  tkks += `│ Numero: ${numero}\n`
                client.sendMessage(`${i.split('@')[0]}` + "@s.whatsapp.net", {text: texto})
                }
                tkks += `╰────────────────╯`
                var buttons = [
                  {buttonId: `${prefixo}sendmail`, buttonText: {displayText: `📧 Comunicar por Email`}, type: 1},
              ]
                  var buttonMessage = {
                  text: tkks.trim(),
                  footer: "*Dados armazenados em banco de dados (seguro).*",
                  buttons: buttons,
                  headerType: 4
                  }
                  
                  client.sendMessage(m.chat, buttonMessage, { quoted: m })

break 


case 'listaprem':
              case 'listapremium': 
               atakk = `🏅USURÁRIOS PREMIUM🏅\nTotal : ${_premium.length}\n\n`
                let men = [];
                for (let i of _premium){
                    men.push(i.id)
                    let veriprems = ms(i.expired - Date.now())
                    atakk += `*ID :* @${i.id.split("@")[0]}\n*Expira em :* ${veriprems.days} dia(s) ${veriprems.hours} hora(s) ${veriprems.minutes} minuto(s) ${veriprems.seconds} segundo(s)\n\n`
                }
                client.sendTextWithMentions(m.chat, atakk, m, men)
                break
 
            case 'confirmarplano': case 'cp': {
          if (!isRegistrar) return m.reply(semreg)
          if (isPremium) return enviar(`❌ Você já tem um plano vip ativo!`)            
          if (args[0] === '1d') {  
          planovip = 3
          validade = "24 Horas"
          compra = "Plano Vip"
          if (verificar_dinheiro(m.sender) < planovip) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)       
  retirar_dinheiro(m.sender, planovip)
  premium.addPremiumUser(m.sender, '1d', _premium)
//  addCompraAtualUser(m.sender, data, hr, planovip, validade, compra)
  addCompraUser(m.sender, data, hr, planovip, validade, compra)
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$3
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 24 horas
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do seu plano digite: /𝘃𝗲𝗿𝘃𝗶𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '7d') {
          planovip7 = 7
          validade = "7 Dias"
          compra = "Plano Vip"
          if (verificar_dinheiro(m.sender) < planovip7) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)   
          retirar_dinheiro(m.sender, planovip7)
  premium.addPremiumUser(m.sender, '7d', _premium)
//  addCompraAtualUser(m.sender, data, hr, planovip7, validade, compra)
  addCompraUser(m.sender, data, hr, planovip7, validade, compra)
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$7
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 7 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do seu plano digite: /𝘃𝗲𝗿𝘃𝗶𝗽

━━━━━━━━━━━━━━`)
          } else if (args[0] === '15d') {
          planovip15 = 15
          validade = "15 Dias"
          compra = "Plano Vip"
          if (verificar_dinheiro(m.sender) < planovip15) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)   
          retirar_dinheiro(m.sender, planovip15)
  premium.addPremiumUser(m.sender, '15d', _premium)
//  addCompraAtualUser(m.sender, data, hr, planovip15, validade, compra)
  addCompraUser(m.sender, data, hr, planovip15, validade, compra)
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$15
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 15 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do seu plano digite: /𝘃𝗲𝗿𝘃𝗶𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '30d') {
          planovip30 = 30
          validade = "30 Dias"
          compra = "Plano Vip"
          if (verificar_dinheiro(m.sender) < planovip30) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)    
          retirar_dinheiro(m.sender, planovip30)
  premium.addPremiumUser(m.sender, '30d', _premium)
//  addCompraAtualUser(m.sender, data, hr, planovip30, validade, compra)
  addCompraUser(m.sender, data, hr, planovip30, validade, compra)
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$30
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 30 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do seu plano digite: /𝘃𝗲𝗿𝘃𝗶𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '90d') {
          planovip60 = 60
          validade = "90 Dias"
          compra = "Plano Vip"
          if (verificar_dinheiro(m.sender) < planovip60) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)          
          retirar_dinheiro(m.sender, planovip60)
  premium.addPremiumUser(m.sender, '90d', _premium)
//  addCompraAtualUser(m.sender, data, hr, planovip60, validade, compra)
  addCompraUser(m.sender, data, hr, planovip60, validade, compra)
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$60
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: 30d Gratis
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 90 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do seu plano digite: /𝘃𝗲𝗿𝘃𝗶𝗽

━━━━━━━━━━━━━━`)
}
}
          break

          case 'confirmarplanogp':  {
          if (!isRegistrar) return m.reply(semreg)
          if (!m.isGroup) return enviar(`❌️ Transação negada, para ativar o plano é preciso que o bot estaja no grupo!`)
          if (isPremiumgp) return enviar(`❌ Esse grupo já tem um plano vip ativo!`)  
          if (verificar_dinheiro(m.sender) < 6) return enviar(`⚠️ Saldo insuficiente, recarregue agora usando o comando /𝗿𝗲𝗰𝗮𝗿𝗿𝗲𝗴𝗮𝗿`)       
          if (args[0] === '1d') {  
          planovip = 6
          validade = "24 horas"
          compra = "Plano Vip"
  retirar_dinheiro(m.sender, planovip)
  premiumgp.addPremiumGp(m.chat, '1d', _premiumgp)
//   addCompraAtualGp(m.sender, data, hr, planovip, validade, compra)
  addCompraGp(m.sender, data, hr, planovip60, validade, compra)  
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗚𝗿𝘂𝗽𝗼: ${groupName}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$6
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 24 horas
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do plano do grupo digite: /𝘃𝗲𝗿𝘃𝗶𝗽𝗴𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '7d') {
          planovip7 = 12
          validade = "7 Dias"
          compra = "Plano Vip"
          retirar_dinheiro(m.sender, planovip7)
  premiumgp.addPremiumGp(m.chat, '7d', _premiumgp)
//  addCompraAtualGp(m.sender, data, hr, planovip, validade, compra)
  addCompraGp(m.sender, data, hr, planovip60, validade, compra)  
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗚𝗿𝘂𝗽𝗼: ${groupName}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$12
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 7 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do plano do grupo digite: /𝘃𝗲𝗿𝘃𝗶𝗽𝗴𝗽

━━━━━━━━━━━━━━`)
          } else if (args[0] === '15d') {
          planovip15 = 25
          validade = "15 Dias"
          compra = "Plano Vip"
          retirar_dinheiro(m.sender, planovip15)
  premiumgp.addPremiumGp(m.chat, '15d', _premiumgp)
//  addCompraAtualGp(m.sender, data, hr, planovip, validade, compra)
  addCompraGp(m.sender, data, hr, planovip60, validade, compra)  
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗚𝗿𝘂𝗽𝗼: ${groupName}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$25
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 15 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do plano do grupo digite: /𝘃𝗲𝗿𝘃𝗶𝗽𝗴𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '30d') {
          planovip30 = 50
          validade = "30 Dias"
          compra = "Plano Vip"
          retirar_dinheiro(m.sender, planovip30)
  premiumgp.addPremiumGp(m.chat, '30d', _premiumgp)
//  addCompraAtualGp(m.sender, data, hr, planovip, validade, compra)
  addCompraGp(m.sender, data, hr, planovip60, validade, compra)  
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗚𝗿𝘂𝗽𝗼: ${groupName}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$50
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: Não 
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 30 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do plano do grupo digite: /𝘃𝗲𝗿𝘃𝗶𝗽𝗴𝗽

━━━━━━━━━━━━━━`)
          } else if(args[0] === '90d') {
          planovip60 = 100
          validade = "90 Dias"
          compra = "Plano Vip"
          retirar_dinheiro(m.sender, planovip60)
  premiumgp.addPremiumGp(m.chat, '90d', _premiumgp)
//  addCompraAtualGp(m.sender, data, hr, planovip, validade)
  addCompraGp(m.sender, data, hr, planovip60, validade)  
  enviar_botão_compra_premium(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━

> 𝗚𝗿𝘂𝗽𝗼: ${groupName}
> 𝗗𝗮𝘁𝗮: ${data}
> 𝗛𝗼𝗿𝗮̃𝗿𝗶𝗼: ${hr}
> 𝗩𝗮𝗹𝗼𝗿: R$100
> 𝗦𝘁𝗮𝘁𝘂𝘀: Aprovado
> 𝗕𝗼̂𝗻𝘂𝘀: 30d Gratis
> 𝗩𝗮́𝗹𝗶𝗱𝗮𝗱𝗲: 90 Dias
> 𝗦𝗮𝗹𝗱𝗼 𝗮𝘁𝘂𝗮𝗹: R$${verificar_dinheiro(m.sender)}

• 𝗡𝗢𝗧𝗔: Para saber o tempo restante do plano do grupo digite: /𝘃𝗲𝗿𝘃𝗶𝗽𝗴𝗽

━━━━━━━━━━━━━━`)
}
}
          break
case 'servip': {
if (!isDono) return enviar(msg.dono)
premium.addPremiumUser(m.sender, '365d', _premium)
enviar(`Vip adiconado`)
}
break
     case 'verpremgp': case 'verplanogrupo': case 'verplanogp':
     case 'verificarpremiumgp': case 'vervipgrupo': case 'vervipgp':
     case 'veripremgp': case 'verivipgp': case 'veriplanogp': {
           if (!isPremiumgp) return enviar(`Somente usuário premium`)
             veriprem = ms(await premiumgp.getPremiumExpired(m.chat, _premiumgp) - Date.now())
        txtvipgp = `━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━\n\n`
        txtvipgp += `> 𝗚𝗿𝘂𝗽𝗼: ${groupName}\n`
        txtvipgp += `> 𝗗𝗶𝗮𝘀 𝗿𝗲𝘀𝘁𝗮𝗻𝘁𝗲𝘀: ${veriprem.days}\n`
        txtvipgp += `> 𝗛𝗼𝗿𝗮𝘀 𝗿𝗲𝘀𝘁𝗮𝗻𝘁𝗲𝘀: ${veriprem.hours}:${veriprem.minutes}:${veriprem.seconds}\n\n`
        txtvipgp += `━━━━━━━━━━━━━━━━`             
             enviar(`━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━\n> *Tempo restante :* ${veriprem.days} dia(s) ${veriprem.hours} hora(s) ${veriprem.minutes} minuto(s) ${veriprem.seconds} segundo(s)`)
             }
            break
    case 'verprem': case 'vervip': case 'verplano':
    case 'verificarpremium': case 'verificarvip': case 'verificarplano':
    case 'veriprem': case 'verivip': case 'veriplano': {
        if (!isPremium) return enviar(`Somente usuário premium`)
        veriprem = ms(await premium.getPremiumExpired(m.sender, _premium) - Date.now())
        txtvip = `━「 𝗣𝗟𝗔𝗡𝗢 𝗔𝗧𝗜𝗩𝗢 」━\n\n`
        txtvip += `> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${nmrp}\n`
        txtvip += `> 𝗟𝗶𝗺𝗶𝘁𝗲: ${usuario.limite_restante}/${usuario.limite}\n`
        txtvip += `> 𝗗𝗶𝗮𝘀 𝗿𝗲𝘀𝘁𝗮𝗻𝘁𝗲𝘀: ${veriprem.days}\n`
        txtvip += `> 𝗛𝗼𝗿𝗮𝘀 𝗿𝗲𝘀𝘁𝗮𝗻𝘁𝗲𝘀: ${veriprem.hours}:${veriprem.minutes}:${veriprem.seconds}\n\n`
        txtvip += `━━━━━━━━━━━━━━━━`
        enviar(txtvip)                   
    }
    break

    case 'delpremium': case 'delprem': case 'delvip': case 'delplano': {            	             		    		
        i_nfo = premium.checkPremiumUser(m.sender, _premium)
        if (!i_nfo) return enviar(`👋 Esse usuário não tem plano vip!`)
        _premium.splice(premium.getPremiumPosition(m.sender, _premium), 1)
        fs.writeFileSync('./funçoes/usuarios/premium.json', JSON.stringify(_premium))
        const xc = JSON.parse(fs.readFileSync('./funçoes/historico/compra_atual_usuario.json')) 
        for (let hx of xc) {
            if(hx.id === sender) {             
                var ini = xc.indexOf(hx.id)
                xc.splice(ini, 1)
                fs.writeFileSync('./funçoes/historico/compra_atual_usuario.json', JSON.stringify(xc))
               enviar('premium deletado')
            }
        }
    }
    break   
   
                      case 'delpremiumgp': case 'delpremgp': {            	         //    	if (!isCreator) throw mess.owner
             usuario = m.chat
            i_nfo = premiumgp.checkPremiumGp(usuario, _premiumgp)
            if (!i_nfo) return enviar(`Este Grupo não e premium`)
            _premiumgp.splice(premiumgp.getPremiumPosition(usuario, _premiumgp), 1)
            fs.writeFileSync('./funçoes/grupo/premium.json', JSON.stringify(_premiumgp))
            enviar('premium deletado')
            }
            break      */  

/*           case 's': case 'fig': case 'f': case 'figu': case 'figurinha': {
                const mdon = `Dono: (48) 9108-9432`      
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: `${fake}\n`, author: mdon })
                await fs.unlinkSync(encmedia)
            } else {
                enviar(`Envie um video ou uma imagem com a legenda ${prefix + command}\nVideos no maximo 9 segundos`)
                }
            }
            break */
/*
          case 'pvip': case 'preçovip': case 'vip': case 'precovip': case 'cvip': case 'comprarvip': {
   // if (!isRegistrar) return m.reply(semreg)
   sections = [
{
title: "~> 𝙋𝙇𝘼𝙉𝙊 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝙑𝙀𝙇 👑",
rows: [
{title: `📅 Plano Diário`, rowId: "/confirmarplano 1d", description: "Validade: 1 Dia\nValor: R$3"},
{title: `📅 Plano Semanal`, rowId: "/confirmarplano 7d", description: "Validade: 7 Dias\nValor: R$7"},
{title: `📅 Plano Quinzenal`, rowId: "/confirmarplano 1d", description: "Validade: 15 Dias\nValor: R$15"},
{title: `📅 Plano Mensal`, rowId: "/confirmarplano 30d", description: "Validade: 30 Dias\nValor: R$30"},
{title: `📅 Plano Plus +30 Dias Grátis`, rowId: "/confirmarplano 90d", description: "Validade: 60 Dias\nValor: R$60"},
]
}
]

 txtf = `━━━━━━━━━━━━━━━

• 𝘊𝘭𝘪𝘲𝘶𝘦 𝘯𝘰 𝘣𝘰𝘵𝘢̃𝘰 𝘢𝘣𝘢𝘪𝘹𝘰 𝘦 𝘷𝘦𝘫𝘢 𝘰 𝘷𝘢𝘭𝘰𝘳 𝘥𝘰𝘴 𝘱𝘭𝘢𝘯𝘰𝘴 𝘥𝘪𝘴𝘱𝘰𝘯𝘪𝘷𝘦𝘭, 𝘢𝘰 𝘤𝘭𝘪𝘤𝘢𝘳 𝘯𝘰 𝘣𝘰𝘵𝘢̃𝘰 𝘥𝘰 𝘱𝘭𝘢𝘯𝘰 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘫𝘢 𝘢𝘥𝘲𝘶𝘦𝘳𝘪𝘳, 𝘴𝘦𝘳𝘢 ́𝘥𝘦𝘴𝘤𝘰𝘯𝘵𝘢𝘥𝘰 𝘶𝘮 𝘷𝘢𝘭𝘰𝘳 𝘥𝘰 𝘴𝘦𝘶 𝘴𝘢𝘭𝘥𝘰 𝘥𝘦 𝘢𝘤𝘰𝘳𝘥𝘰 𝘤𝘰𝘮 𝘰 𝘱𝘭𝘢𝘯𝘰 𝘦𝘴𝘤𝘰𝘭𝘩𝘪𝘥𝘰.

━━「 FUNÇÕES 」━━━

> 𝘾𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙨 𝙨𝙚𝙢 𝙙𝙚𝙡𝙖𝙮
> 𝙂𝙚𝙧𝙖𝙙𝙤𝙧 𝙙𝙚 𝙚𝙢𝙖𝙞𝙡
> 𝙂𝙚𝙧𝙖𝙙𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙩𝙖𝙨

━━━━━━━━━━━━━━━`
listMessage = {
   
  text: txtf,
  footer: fake,
  title: "👑️ 𝗣𝗟𝗔𝗡𝗢 𝗩𝗜𝗣 👑️",
  buttonText: "Ver preço️ 💸️", 
  sections
}

client.sendMessage(m.chat, listMessage, {quoted: m})
}  
break
          case 'pvipgp': case 'vipgp': case 'vipgrupo': case 'preçovipgp': case 'precovipgp': case 'cvipgp': case 'comprarvipgp': {
    if (!isRegistrar) return m.reply(semreg)
   sections = [
{
title: "~> 𝙋𝙇𝘼𝙉𝙊 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝙑𝙀𝙇 👑",
rows: [
{title: `📅 Plano Diário`, rowId: "/confirmarplanogp 1d", description: "Validade: 1 Dia\nValor: R$6"},
{title: `📅 Plano Semanal`, rowId: "/confirmarplanogp 7d", description: "Validade: 7 Dias\nValor: R$12"},
{title: `📅 Plano Quinzenal`, rowId: "/confirmarplanogp 1d", description: "Validade: 15 Dias\nValor: R$25"},
{title: `📅 Plano Mensal`, rowId: "/confirmarplanogp 30d", description: "Validade: 30 Dias\nValor: R$50"},
{title: `📅 Plano Plus +30 Dias Grátis`, rowId: "/confirmarplanogp 90d", description: "Validade: 60 Dias\nValor: R$100"},
]
}
]

 txtf = `━━━━━━━━━━━━━━━

• 𝘊𝘭𝘪𝘲𝘶𝘦 𝘯𝘰 𝘣𝘰𝘵𝘢̃𝘰 𝘢𝘣𝘢𝘪𝘹𝘰 𝘦 𝘷𝘦𝘫𝘢 𝘰 𝘷𝘢𝘭𝘰𝘳 𝘥𝘰𝘴 𝘱𝘭𝘢𝘯𝘰𝘴 𝘥𝘪𝘴𝘱𝘰𝘯𝘪𝘷𝘦𝘭, 𝘢𝘰 𝘤𝘭𝘪𝘤𝘢𝘳 𝘯𝘰 𝘣𝘰𝘵𝘢̃𝘰 𝘥𝘰 𝘱𝘭𝘢𝘯𝘰 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘫𝘢 𝘢𝘥𝘲𝘶𝘦𝘳𝘪𝘳, 𝘴𝘦𝘳𝘢 ́𝘥𝘦𝘴𝘤𝘰𝘯𝘵𝘢𝘥𝘰 𝘶𝘮 𝘷𝘢𝘭𝘰𝘳 𝘥𝘰 𝘴𝘦𝘶 𝘴𝘢𝘭𝘥𝘰 𝘥𝘦 𝘢𝘤𝘰𝘳𝘥𝘰 𝘤𝘰𝘮 𝘰 𝘱𝘭𝘢𝘯𝘰 𝘦𝘴𝘤𝘰𝘭𝘩𝘪𝘥𝘰.

━━「 FUNÇÕES 」━━━

> 𝘾𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙨 𝙘𝙤𝙢 𝙙𝙚𝙡𝙖𝙮
> 𝙂𝙚𝙧𝙖𝙙𝙤𝙧 𝙙𝙚 𝙚𝙢𝙖𝙞𝙡
> 𝙂𝙚𝙧𝙖𝙙𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙩𝙖𝙨

━━━━━━━━━━━━━━━`
listMessage = {
   
  text: txtf,
  footer: fake,
  title: "👑️ 𝗣𝗟𝗔𝗡𝗢 𝗩𝗜𝗣 👑️",
  buttonText: "Ver preço️ 💸️", 
  sections
}

client.sendMessage(m.chat, listMessage, {quoted: m})
}  
break
*/
    case 'sim_concordo_com_os_termos': {
        if (isTermo) return enviar(`⚠️ Você ja concordou com os termos de uso!`)
        botao_ver_consultas(`🔔 ${pushname}, Você concordou com os termos, as consultas foram liberadas!`)
        termos.push(m.sender)
        fs.writeFileSync('./funçoes/usuarios/termo.json', JSON.stringify(termos))
    }
    break
    case 'nao_concordo_com_os_termos': {
        if (isTermo) return enviar(`⚠️ Você ja concordou com os termos de uso!`)
        enviar(`⚠️ Ok, ao não concordar com nossos termos você não poderá realizar consultas!`)
    }
    break
    case 'menu': {  
        await sleep(1000)   
        await reagir(m.chat, m.key, "📖")    
        txtf = `━━━━━━━━━━━━━━━━\n> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${pushname}\n> 𝗗𝗮𝘁𝗮: ${data}\n> 𝗛𝗼𝗿𝗮̀𝗿𝗶𝗼: ${hr}\n\n• 𝙀𝙨𝙨𝙖 𝙫𝙚𝙧𝙨𝙖̃𝙤 𝙚𝙨𝙩𝙖́ 𝙚𝙢 𝙛𝙖𝙨𝙚 𝙙𝙚 𝙙𝙚𝙨𝙚𝙣𝙫𝙤𝙡𝙫𝙞𝙢𝙚𝙣𝙩𝙤. 𝙌𝙪𝙖𝙡𝙦𝙪𝙚𝙧 𝙚𝙧𝙧𝙤 𝙤𝙪 𝙗𝙪𝙜 𝙚𝙣𝙩𝙧𝙚 𝙚𝙢 𝙘𝙤𝙣𝙩𝙖𝙩𝙤 𝙘𝙤𝙢 𝙤 𝙙𝙤𝙣𝙤!\n━━━━━━━━━━━━━━━`       
        sections = [
        {
            title: "~> 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙎 🕵️",
            rows: [
                {title: `➻ Telefone️`, rowId: "/tel", description: "/tel - Consulta simples."},
                {title: `➻ Telefone2`, rowId: "/tel2", description: "/tel2 - Consultas simples."},
                {title: `➻ Telefone3`, rowId: "/tel3", description: "/tel3 - Consultas simples."},
                {title: `➻ Cpf️ [🔴] - OFF`, rowId: "/cpf", description: "/cpf - Consulta simples."},
                {title: `➻ Cpf1`, rowId: "/cpf1", description: "/cpf1 - Consulta média."},
                {title: `➻ Cpf2`, rowId: "/cpf2", description: "/cpf2 - Consulta completa."},
                {title: `➻ Cpf3`, rowId: "/cpf3", description: "/cpf3 - Consulta completa."},
                {title: `➻ Nome️`, rowId: "/nome", description: "/nome - Consulta simples."},
                {title: `➻ Score️`, rowId: "/score", description: "/score - Consulta simples."},
                {title: `➻ Benefícios️`, rowId: "/beneficios", description: "/beneficios - Consulta simples."},
                {title: `➻ Cns️ [🔴] - OFF`, rowId: "/cns", description: "/cns - Consulta completa."},
                {title: `➻ Cnpj`, rowId: "/Cnpj", description: "/cnpj - Consulta completa."},
                {title: `➻ Cnpj2`, rowId: "/Cnpj2", description: "/cnpj2 - Consulta completa."},
                {title: `➻ Placa`, rowId: "/placa", description: "/placa - Consulta simples."},
                {title: `➻ Placa2`, rowId: "/placa2", description: "/placa2 - Consulta completa."},
                {title: `➻ Vizinhos`, rowId: "/vizinhos", description: "/vizinho - Consulta simples."},
                {title: `➻ Parentes`, rowId: "/parentes", description: "/parentes - Consultas simples."},
                {title: `➻ Ip️`, rowId: "/ip", description: "/ip - Consulta simples."},
                {title: `➻ Bin`, rowId: "/bin", description: "/bin - Consultas simples."},
                {title: `➻ Cep`, rowId: "/cep", description: "/cep - Consultas simples."},                    
           ]
        },
        {
            title: "~> 𝘾𝙃𝙀𝘾𝙆𝙀𝙍𝙎 ️⚙️",
            rows: [
                {title: `➻ Chk️`, rowId: "/chk", description: "/chk - Consulta simples."},
           ]
        },                
        {
            title: "~> 𝙎𝙐𝙋𝙊𝙍𝙏𝙀 𝘿𝙊 𝘽𝙊𝙏 🤖",
            rows: [
                {title: "➧ Eqp TheCybers ⚡", rowId: "/suporte", description: "/suporte"},
            ]
        }]
        listMessage = {   
            text: txtf,
            footer: `➻ ${fake}\n➻ Versão: 2.0.1`,
            title: "📋 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 📋",
            buttonText: "Ver Consultas 🔍️", 
            sections
        }
        client.sendMessage(m.chat, listMessage, {quoted: m})    
    }  
    break

    case 'ia': {
        //if (!isRegistro) return enviar(resposta.registro)
        if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} quem criou o minecraft?`)
        enviar (msg.aguarde)
        try {
            let openai = await ia(q) // Defina a key do chatgpt no arquivo ia.js ele está dentro da pasta js
            let response = openai[0].resposta
            await sleep(1000)
            enviar(response)
        } catch(e) {
            console.log(e)
            enviar('*🧸Oops, não e possível utilizar o comando até a key do chatgpt seja definida...*')
        }
    }
    break    
 	case 'ficarafk': {  
 	    if (!isDono) return enviar(msg.dono)
	//    if (!isRegistrar) return enviar(semreg) 
//	    if (global.db.data.users[m.sender].limite_restante < 1) return enviar(msg.limitemsg)     
        let user = global.db.data.users[m.sender]
        user.afkTime = + new Date
        user.afkReason = text
        usuario.limite_restante -= 1
        m.reply(`━━「 𝗠𝗢𝗗𝗢 𝗔𝗙𝗞 」━━\n\nRecurso AFK 𝗮𝘁𝗶𝘃𝗮𝗱𝗼 com sucesso!\n> 𝗡𝗼𝗺𝗲: ${m.pushName}\n> 𝗠𝗼𝘁𝗶𝘃𝗼: ${text ? '' + text : 'Não específicado.'}\n> 𝗗𝗮𝘁𝗮: ${data}\n> 𝗛𝗼𝗿𝗮: ${hr}\n\n• 𝗡𝗢𝗧𝗔: Para sair do modo afk basta enviar uma mensagem!\n\n━━━━━━━━━━━━━━`)
    }
    break
    case 'burlar': {
        if (!isDono) return m.reply(`➥ Somente usuário premium pode utilizar esse comando!`)
        usuario.consultas = -1
        console.log("Eliminado do tempo de espera")
        m.reply(`➥ Você burlou o tempo de espera com sucesso!`)
    }
    break
          
    case 'desbug': {
        if (!isDono) return m.reply(msg.dono)              
        let uers = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'' 
        let user99 = global.db.data.users[uers]
        let nmrmencionado = uers.replace("@s.whatsapp.net", "")
        if (!nmrmencionado) return m.reply(`➥ Marque um usuário ou digite o número!`)
        user99.consultas = -1
        console.log(nmrmencionado + " Eliminado do tempo de espera")
        m.reply(`➥ Você resetou o tempo de espera do usuário ${nmrmencionado}!`)
    }
    break

    case 'revendedores': case 'suport': case 'suporte': case 'dono': case 'criador': {
        client.sendContact(m.chat, global.owner, m)
    }
    break

/*    case 'gen': {
        if (!isRegistrar) return m.reply(semreg)	
        var query = texto
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('/').join('')
        .split('|').join('')
        let api_gen_cc = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_gen&q=${query}&token=${tokenvip}`) 
        enviar(`${msg_espera}`)
        if (api_gen_cc.resultado != undefined) {
            await sleep(60000)
            await client.sendMessage(m.chat, {text: `${api_gen_cc.resultado}`}, {quoted: m})
           consultavip(`═════════════════════
🔄️ 𝗖𝗔𝗥𝗗𝗦 𝗚𝗘𝗥𝗔𝗗𝗢𝗦 🔄
═════════════════════

${api_gen_cc.resultado.base64}

═════════════════════`) 
        } else {
            enviar(`❌ Erro ao gerar os cards`)
        }
    }
    break */
// COMANDOS DE CONSULTAS  

    case 'tel': case 'telefone': {
        if (!isTermo) return botao_termo(` `)
        var query = texto
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('(').join('')
        .split(')').join('');
        var resultad2 = texto.replace("55", "");
        var resultad3 = resultad2.replace(/(\d{2})/, "$19")
        let api_de_tel = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_tel1&q=${query}&token=${tokenvip}`)  
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {     
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do telefone incluindo o 9.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 11932853601
━━━━━━━━━━━━━━━━`)            
            if (query.length >= 12) return m.reply(`➥ Número inválido ou incorreto!`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O número que você digitou está inválido ou incorreto!

❌ Errado: ${resultad2}
✅️ Correto: ${resultad3}

• Use o comando novamente com o número no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} ${resultad3}
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o telefone', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_tel.resultado != undefined && api_de_tel.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘 🕵️
═════════════════

${api_de_tel.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
            }            
        }                      
    }
    break
    case 'tel2': case 'telefone2': {
        if (!isTermo) return botao_termo(` `)   	
        var query = texto
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('(').join('')
        .split(')').join('');
        var resultad2 = texto.replace("55", "");
        var resultad3 = resultad2.replace(/(\d{2})/, "$19")
        let user3 = global.db.data.users[m.sender]
        let api_de_tel = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_tel2&q=${query}&token=${tokenvip}`)  
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else { 
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")            
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do telefone incluindo o 9.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 11932853601
━━━━━━━━━━━━━━━━`)            
            if (query.length >= 12) return m.reply(`➥ Número inválido ou incorreto!`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O número que você digitou está inválido ou incorreto!

❌ Errado: ${resultad2}
✅️ Correto: ${resultad3}

• Use o comando novamente com o número no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} ${resultad3}
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o telefone', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (api_de_tel.resultado != undefined && api_de_tel.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘 🕵️
═════════════════

${api_de_tel.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
            }            
        }                      
    }
    break

    case 'tel3': case 'telefone3': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('(').join('')
        .split(')').join('');
        var resultad2 = texto.replace("55", "");
        var resultad3 = resultad2.replace(/(\d{2})/, "$19")
        let api_de_tel = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_tel3&q=${query}&token=${tokenvip}`)  
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")             
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do telefone incluindo o 9.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 11932853601
━━━━━━━━━━━━━━━━`)            
            if (query.length >= 12) return m.reply(`➥ Número inválido ou incorreto!`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O número que você digitou está inválido ou incorreto!

❌ Errado: ${resultad2}
✅️ Correto: ${resultad3}

• Use o comando novamente com o número no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} ${resultad3}
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o telefone', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (api_de_tel.resultado != undefined && api_de_tel.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗙𝗘𝗙𝗢𝗡𝗘 🕵️
═════════════════

${api_de_tel.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
            }            
        }                      
    }
    break

    case 'score': {
        if (!isTermo) return botao_termo(` `)   
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
             var query = texto
            .split('.').join('')
            .split('-').join('')
            .split(' ').join('');   
            let api_de_score = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_score&q=${query}&token=${tokenvip}`) 
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")                 
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗦𝗖𝗢𝗥𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do cpf que você deseja consultar o score.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00000000868
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o score', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (api_de_score.resultado != undefined && api_de_score.resultado != "Não encontrado") {         
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗦𝗖𝗢𝗥𝗘 🕵️
═════════════════

${api_de_score.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ SCORE NÃO ENCONTRADO!`)     
            }
        }   
    }
    break

    case 'beneficios': {
        if (!isTermo) return botao_termo(` `)   
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
             var query = texto
            .split('.').join('')
            .split('-').join('')
            .split(' ').join('');   
            let api_de_beneficios = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_beneficios&q=${query}&token=${tokenvip}`)   
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")               
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗘𝗡𝗘𝗙𝗜𝗖𝗜𝗢𝗦:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do cpf que você deseja consultar os benefícios.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00000000868
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o benefícios', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (api_de_beneficios.resultado != undefined && api_de_beneficios.resultado != "Não encontrado") {         
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗘𝗡𝗘𝗙𝗜𝗖𝗜𝗢𝗦 🕵️
═════════════════

${api_de_beneficios.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ BENEFÍCIOS NÃO ENCONTRADO!`)     
            }
        }   
    }
    break
    case 'parentes': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('');   
        let api_de_cpf = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_parentes&q=${query}&token=${tokenvip}`)             
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗣𝗔𝗥𝗘𝗡𝗧𝗘𝗦:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do CPF.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 08385265783
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cpf', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_cpf.resultado != undefined && api_de_cpf.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗣𝗔𝗥𝗘𝗡𝗧𝗘𝗦 🕵️
═════════════════

${api_de_cpf.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ PARENTES NÃO ENCONTRADO!`)
            }
        }   
    }
    break

    case 'vizinhos': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('');   
        let api_de_cpf = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_vizinhos&q=${query}&token=${tokenvip}`)             
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗭𝗜𝗡𝗛𝗢𝗦:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do CPF.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 08385265783
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cpf', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)   
            await sleep(1000)
            await reagir(m.chat, m.key, "🕗") 
            await MsgAguarde(m.sender);               
            if (api_de_cpf.resultado != undefined && api_de_cpf.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗭𝗜𝗡𝗛𝗢𝗦 🕵️
═════════════════

${api_de_cpf.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ VIZINHOS NÃO ENCONTRADO!`)
            }            
        }   
    }
    break

    case 'cpf': {
        if (!isTermo) return botao_termo(` `)   
        enviar(`⚠️ Comando off para manutenção na api!`)
/*        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('');   
        let api_de_cpf = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_${command}&q=${query}&token=${tokenvip}`)             
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗣𝗙:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do CPF.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 08385265783
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cpf', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)    
            await MsgAguarde(m.sender);               
            await reagir(m.chat, m.key, "🕗")
            if (api_de_cpf.resultado != undefined) {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗣𝗙 🕵️
═════════════════

${api_de_cpf.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ CPF NÃO ENCONTRADO!`) 
            }
        }   */
    }
    break
        case 'cpf1':
            case 'cpf2': 
                case 'cpf3': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('');   
        let api_de_cpf = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_${command}&q=${query}&token=${tokenvip}`)             
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗣𝗙:  
╰──────────────

Você precisa digitar o comando e em seguida, digitar os 11 números do CPF.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 08385265783
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cpf que você digitou não tem 11 dígitos!

❌ Formato incorreto:

014.414.520-01

✅ Formato correto:

01441452001

• Use o comando novamente com o cpf no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 00017500389
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cpf', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (api_de_cpf.resultado != undefined && api_de_cpf.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗣𝗙 🕵️
═════════════════

${api_de_cpf.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ CPF NÃO ENCONTRADO!`) 
            }
        }   
    }
    break
/*
    case 'nome':
case 'name': {
if (!isPremiumGp && !isPremium2) return noprem(`Somente usuário premium pode utilizar comandos de consultas!`)
let user3 = global.db.data.users[m.sender]
if (user3.consultas != -1) {
tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
 } else {
if (!text) return m.reply(`🔍 CONSULTA VIP 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗡𝗢𝗠𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o nome completo da vítima que deseja procurar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} Jair Messias Bolsonaro
━━━━━━━━━━━━━━━━`)
await cliente(msg_espera)
await sleep(500)
await reagir(m.chat, m.key, "🕗")
console.log(`~> Consultando o nome ${text}`)
api = await fetchJson(`https://mr-ubutu.herokuapp.com/puxar?type=api_nome&q=${text}&token=${tokenvip}`)
try {
var encodedStringAtoB = `${api.resultado.base64}`
var decodedStringAtoB = atob(encodedStringAtoB);
if (api.resultado.base64 == undefined) {
if (api.resultado == undefined) {
    m.reply("⚠️ NOME NÃO ENCONTRADO!")
} else {
ress = api.resultado
codando = ress.replace("𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗡𝗢𝗠𝗘", `═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗡𝗢𝗠𝗘 🕵️
═════════════════`).replace("🔛 BY: @Skynet02Robot", "")
consult(codando + "\n\n═════════════════")
}
} else {
consult(('═════════════════\n🕵️  CONSULTA REALIZADA  🕵️\n═════════════════\n\n• Nome(s) encontrado(s) na mnha db:\n' + decodedStringAtoB.replace(/\,|â¢/gi, "")))
}
} catch {
m.reply(`⚠️ NOME NÃO ENCONTRADO!`) //caso o tempo de resposta for excedido
}
}
}
  break */
  
    case 'nome':
        case 'name': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto   
        let api_de_nome = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_nome&q=${query}&token=${tokenvip}`)             
        amount = Number(args.join(" ").replace(',', '.').replace(/[^\d\.]+/g, ''))     
        if(amount) return enviar(`⚠️ NOME INVÁLIDO!!!️`)        
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗡𝗢𝗠𝗘:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o nome completo que deseja procurar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} Maria Pereira
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 40) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O nome que você digitou precisa ter no mínimo 11 caracteres e no máximo 40, para que a consulta agilize com facilidade digite o nome completo!

❌ Formato incorreto:

Maria Pereira

✅ Formato correto:

Maria Aparecida Pereira 

• Use o comando novamente com o nome completo e no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} Maria Aparecida Pereira
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o nome', 'pink')} ${color(`${texto}`, 'white')}`)                     
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_nome.resultado != undefined && api_de_nome.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗡𝗢𝗠𝗘 🕵️
═════════════════

${api_de_nome.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ NOME NÃO ENCONTRADO!`)
            }
        }   
    }
    break

    case 'placa': case 'placa2': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('');   
        let api_de_placa = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_${command}&q=${query}&token=${tokenvip}`)             
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(query.length < 7 || query.length > 11) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗣𝗟𝗔𝗖𝗔:  
╰──────────────

Você precisa digitar o comando e em seguida, digite a placa do veículo que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} JJK1960
━━━━━━━━━━━━━━━━`)               
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando a placa', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_placa.resultado != undefined && api_de_placa.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗣𝗟𝗔𝗖𝗔 🕵️
═════════════════

${api_de_placa.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ PLACA NÃO ENCONTRADO!`)
            }            
        }   
    }
    break

    case 'cns': {
        if (!isTermo) return botao_termo(` `)   
        await sleep(1000)   
        await reagir(m.chat, m.key, "⚠️")
        enviar(`⚠️ Comando off para manutenção na api!`)
/*        var query = texto
        .split('/').join('')
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('(').join('')
        .split(')').join('');
        let api_de_cns = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_cns&q=${query}&token=${tokenvip}`)
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            if (!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗦:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o cns da vítima que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 703106349459960
━━━━━━━━━━━━━━━━`)
            if (query.length < 15 || query.length > 20) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cns que você digitou não tem 15 dígitos!

✅ Formato correto:

703106349459960

• Use o comando novamente com o cns no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 703106349459960
━━━━━━━━━━━━━━━━`)       
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cns', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_cns.resultado != undefined && api_de_cns.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗦 🕵️
═════════════════

${api_de_cns.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ CNS NÃO ENCONTRADO!`) 
            }
        } */  
    }
    break 

    case 'cnpj': {      
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('/').join('')
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        let api_de_cnpj = await fetchJson(`https://webapi.herokuapp.com/puxar?type=api_cnpj&q=${query}&token=${tokenvip}`)        
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗣𝗝:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o cnpj da empresa que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 39708509000129
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 18) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cnpj que você digitou não tem 14 dígitos!

❌ Formato incorreto:

39.708.509/0001-29

✅ Formato correto:

39708509000129

• Use o comando novamente com o cnpj no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 39708509000129
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cnpj', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_cnpj.resultado != undefined && api_de_cnpj.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗣𝗝 🕵️
═════════════════

${api_de_cnpj.resultado}

═════════════════`)
            } else {
                    await reagir(m.chat, m.key, "❌️")
                    m.reply(`⚠️ CNPJ NÃO ENCONTRADO!`)       
            }
        }   
    }
    break

    case 'cnpj2': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('/').join('')
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        .split('(').join('')
        .split(')').join('');
        res = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${query}`);
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗣𝗝:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o cnpj da empresa que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 39708509000129
━━━━━━━━━━━━━━━━`)
            if (query.length < 11 || query.length > 18) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

O cnpj que você digitou não tem 14 dígitos!

❌ Formato incorreto:

39.708.509/0001-29

✅ Formato correto:

39708509000129

• Use o comando novamente com o cnpj no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 39708509000129
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o cnpj', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (res.cnpj != undefined) {
                let atvpr = `═════════════════\n🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗣𝗝 (2) 🕵️\n═════════════════\n\n✍ CNPJ: ${res.cnpj != null ? res.cnpj : "SEM INFORMAÇÕES"}\n\n📝 ATIVIDADE PRINCIPAL:\n`
for(let i of res.atividade_principal){
                atvpr += `\n- TIPO: ${i.text ? i.text : "SEM INFORMAÇÕES"}`
                atvpr += `\n- CODIGO: ${i.code ? i.code : "SEM INFORMAÇÕES"}\n`
   }
   
                consulta = `\n📞 DADOS INFORMATIVOS:\n\nDATA: ${res.data_situacao != null ? res.data_situacao : "SEM INFORMAÇÕES"} 
COMPLEMENTO: ${res.complemento != null ? res.complemento : "SEM INFORMAÇÕES"} 
TIPO: ${res.tipo != null ? res.tipo : "SEM INFORMAÇÕES"} 
NOME: ${res.nome != null ? res.nome : "SEM INFORMAÇÕES"} 
UF: ${res.uf != null ? res.uf : "SEM INFORMAÇÕES"} 
TELEFONE: ${res.telefone != null ? res.telefone : "SEM INFORMAÇÕES"} 
EMAIL: ${res.email != null ? res.email : "SEM INFORMAÇÕES"}\n`

                teks = `\n👥 ATIVIDADES SECUDARIAS:\n\n`
 for(let i of res.atividades_secundarias){
                teks += `- TIPO: ${i.text ? i.text : "SEM INFORMAÇÕES"}`
                teks += `\n- CODIGO: ${i.code ? i.code : "SEM INFORMAÇÕES"}\n`
}

                let qsa = `\n👑 SÓCIOS ADMINISTRATIVOS:\n\n`
                for(let i of res.qsa){
                qsa += `\n- QUAL: ${i.qual ? i.qual : "SEM INFORMAÇÕES"}`
                qsa += `\n- NOME: ${i.nome ? i.nome : "SEM INFORMAÇÕES"}`
                qsa += `\n- REPRESENTANTE LEGAL: ${i.qual_rep_legal ? i.qual_rep_legal : "SEM INFORMAÇÕES"}`
                qsa += `\n- NOME REP. LEGAL: ${i.nome_rep_legal ? i.nome_rep_legal : "SEM INFORMAÇÕES"}\n`
                }
   
                consulta2k = `\n🏬 DADOS & LOCALIZAÇÃO\n\nSITUAÇÃO: ${res.situacao != null ? res.situacao : "SEM INFORMAÇÕES"}
BAIRRO: ${res.bairro != null ? res.bairro : "SEM INFORMAÇÕES"}
LOGRADOURO: ${res.logradouro != null ? res.logradouro : "SEM INFORMAÇÕES"}
NÚMERO: ${res.numero != null ? res.numero : "SEM INFORMAÇÕES"}
CEP: ${res.cep != null ? res.cep : "SEM INFORMAÇÕES"}
MUNICIPIO: ${res.municipio != null ? res.municipio : "SEM INFORMAÇÕES"}
ABERTURA: ${res.abertura != null ? res.abertura : "SEM INFORMAÇÕES"}
NATUREZA JURIDICA: ${res.natureza_juridica != null ? res.natureza_juridica : "SEM INFORMAÇÕES"}
ULTIMA ATUALIZAÇÃO: ${res.ultima_atualizacao != null ? res.ultima_atualizacao : "SEM INFORMAÇÕES"}
STATUS: ${res.status != null ? res.status : "SEM INFORMAÇÕES"}
FANTASIA: ${res.fantasia != null ? res.fantasia : "SEM INFORMAÇÕES"}
EFR: ${res.efr != null ? res.efr : "SEM INFORMAÇÕES"}
SITUAÇÃO: ${res.motivo_situacao != null ? res.motivo_situacao : "SEM INFORMAÇÕES"}
SITUAÇÃO ESPECIAL: ${res.situacao_especial != null ? res.situacao_especial : "SEM INFORMAÇÕES"}
DATA DA SITUAÇÃO ESPECIAL: ${res.data_situacao_especial != null ? res.data_situacao_especial : "SEM INFORMAÇÕES"}
CAPITAL SOCIAL: ${res.capital_social != null ? res.capital_social : "SEM INFORMAÇÕES"}

━━━━━━━━━━━━━━━━`
                consulta_comum(atvpr + consulta + teks + qsa + consulta2k)  
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ CNPJ NÃO ENCONTRADO!`)     
            }
        }   
    }
    break
    case 'chk': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto        
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗛𝗘𝗖𝗞𝗘𝗥 𝗚𝗚:  
╰──────────────

Testador de Cartões de Crédito ou Débito gerados, testa a validade do cartão e obtém os detalhes do emissor (como onde ele está localizado) e os detalhes do cartão (como tipo, a bandeira e a categoria).

Bandeiras Suportadas:
MASTERCARD e VISA

Formato:
4984069234151378|02|2022|377

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 4984069234151378|02|2022|377
━━━━━━━━━━━━━━━━`)

            var kls = text
            var kls1 = kls.split("|")[0];
            if (!kls1) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

A cc que você digitou está no formato errado ou está faltando algum número ou símbolo.

❌ Formato incorreto:

4984069234151378 02 2022 377

✅ Formato correto:

4984069234151378|02|2022|377

• Use o comando novamente com a cc no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 4984069234151378|02|2022|377
━━━━━━━━━━━━━━━━`)
            var kls2 = kls.split("|")[1];
            if (!kls2) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

A cc que você digitou está no formato errado ou está faltando algum número ou símbolo.

❌ Formato incorreto:

4984069234151378 02 2022 377

✅ Formato correto:

4984069234151378|02|2022|377

• Use o comando novamente com a cc no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 4984069234151378|02|2022|377
━━━━━━━━━━━━━━━━`)
            var kls3 = kls.split("|")[2];
            if (!kls3) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

A cc que você digitou está no formato errado ou está faltando algum número ou símbolo.

❌ Formato incorreto:

4984069234151378 02 2022 377

✅ Formato correto:

4984069234151378|02|2022|377

• Use o comando novamente com a cc no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 4984069234151378|02|2022|377
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Checkando a cc', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            let api_de_chk = await fetchJson(`https://webapi.herokuapp.com/puxar?type=chk&q=${kls}&token=${tokenvip}`)
            if (api_de_chk.resultado != undefined && api_de_chk.resultado != "Inválido") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗛𝗘𝗖𝗞𝗘𝗥 𝗚𝗚 🕵️
═════════════════

${api_de_chk.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ NADA ENCONTRADO!`)
            }
        }   
    }
    break

    case 'ip': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('/').join('')
        .split('+').join('')
        .split('-').join('')
        .split(' ').join('')
        hehe = await fetchJson(`http://ip-api.com/json/${query}`)
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗜𝗣:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o ip que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 204.152.203.157
━━━━━━━━━━━━━━━━`)           
            if (query.length < 11 || query.length > 18) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

Consulta o número de IP, obtém dados do IP, como qual é o provedor, ip reverso, país, estado, cidade e as coordenadas de onde ele está localizado.

❌ Formato incorreto:

204152203157

✅ Formato correto:

204.152.203.157

• Use o comando novamente com o ip no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 204.152.203.157
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando o ip', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera)  
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);               
            if (hehe.country != undefined) {
                consulta = `═════════════════════
🔍 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗜𝗣 🔍
═════════════════════

• 𝗣𝗮𝗶̄𝘀: ${hehe.country}
• 𝗦𝗶𝗴𝗹𝗮: ${hehe.countryCode}
• 𝗥𝗲𝗴𝗶𝗮̃𝗼: ${hehe.regionName}
• 𝗖𝗶𝗱𝗮𝗱𝗲: ${hehe.city}
• 𝗖𝗲𝗽: ${hehe.zip}
• 𝗟𝗮𝘁: ${hehe.lat}
• 𝗟𝗼𝗻: ${hehe.lon}
• 𝗙𝘂𝘀𝗼 𝗛𝗼𝗿𝗮̀𝗿𝗶𝗼: ${hehe.timezone}
• 𝗡𝗲𝘁: ${hehe.isp}

👤 Usuário: ${pushname}

🔛 BY: ${fake}

━━━━━━━━━━━━━━━━`
                consulta_comum(consulta) 
                await sleep(4000)
                await client.sendMessage(m.chat, { location: { degreesLatitude: hehe.lat, degreesLongitude: hehe.lon }, m})                   
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ IP NÃO ENCONTRADO!`) 
            }
        }   
    }
    break

    case 'bin': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('')
        let api_de_bin = await fetchJson(`https://webapi.herokuapp.com/puxar?type=bin&q=${query}&token=${tokenvip}`)        
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗜𝗡:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o cnpj da empresa que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 498408
━━━━━━━━━━━━━━━━`)
            if (query.length < 5 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

Consulta de BIN, obtém os detalhes do emissor (como qual banco ou instituição financeira emitiu o cartão e onde ele está localizado), o tipo, a bandeira e a categoria do cartão.

❌ Formato incorreto:

498-408

✅ Formato correto:

498408

• Use o comando novamente com a bin no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 498408
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando a bin', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (api_de_bin.resultado != undefined && api_de_bin.resultado != "Não encontrado") {
                consulta_comum(`═════════════════
🕵️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗜𝗡 🕵️
═════════════════

${api_de_bin.resultado}

═════════════════`)
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ BIN NÃO ENCONTRADO!`)    
            }
        }   
    }
    break

    case 'cep': {
        if (!isTermo) return botao_termo(` `)   
        var query = texto
        .split('.').join('')
        .split('-').join('')
        .split(' ').join('')
        cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${query}`)        
        let user3 = global.db.data.users[m.sender]
        if (user3.consultas != -1) {
            tempo_de_espera = clockString(new Date - user3.consultas).replace("00:00:", " ")
            m.reply(`➥ Aguarde 30 segundos para consultar novamente!\n\nTempo já passado: ${tempo_de_espera} segundos ⌛`)
        } else {
            await sleep(1000)   
            await reagir(m.chat, m.key, "🔍")        
            if(!texto) return m.reply(`🔍 CONSULTA FREE 🔍
━━━━━━━━━━━━━━━━
╭──────────────
┇   𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗘𝗣:  
╰──────────────

Você precisa digitar o comando e em seguida, digite o cep que deseja consultar.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 70040010
━━━━━━━━━━━━━━━━`)
            if (query.length < 4 || query.length > 11) return m.reply(`⚠️ FORMATO INCORRETO ⚠️
━━━━━━━━━━━━━━━━

nConsulta de CEP, obtém informações sobre os logradouros (como nome de rua, avenida, alameda, beco, travessa, praça etc), nome de bairro, cidade e estado onde ele está localizado.

❌ Formato incorreto:

7004.0010

✅ Formato correto:

70040010 ou 70040-010

• Use o comando novamente com o cep no formato correto.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
${prefixo+command} 70040010
━━━━━━━━━━━━━━━━`)
            console.log(`${color(`• [CONSULTA FREE] ~>`, 'blue')} ${color('Consultando a cep', 'pink')} ${color(`${texto}`, 'white')}`)
            enviar(msg_espera) 
            await sleep(1000)  
            await reagir(m.chat, m.key, "🕗")
            await MsgAguarde(m.sender);
            if (cer.cep != undefined) {
                consulta = `═════════════════
🔍 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗘𝗣 🔍
═════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

━━━━━━━━━━━━━━━━`
                consulta_comum(consulta)
                await sleep(4000)
                await client.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
            } else {
                await reagir(m.chat, m.key, "❌️")
                m.reply(`⚠️ CEP NÃO ENCONTRADO!`)    
            }
        }   
    }
    break      

/*━━━━━━━ COMANDOS DE PAGAMENTOS PIX ━━━━━━━━*/
/*
    case 'cpag': {
    if (!isRegistrar) return enviar(semreg)
    if (!isDono) return enviar(msg.dono)  
    let users101 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+''     
    let user102 = global.db.data.users[users101]
    if (!m.quoted) return enviar(`❗Marque o @user do usuário!`)
    if (!global.db.data.users[users101].pendente === 0) return enviar(`❗Nenhum token encontrado!`)      
    enviar(`❗Pagamento cancelado com sucesso!\n\nUsuario: ${users101}`)    
    user102.token_pix = 0
    user102.pendente = 0   
}
break

    case 'recarregar': {
    if (!isRegistrar) return enviar(semreg)
    if (m.isGroup) return enviar(msg.privado)
    if (!global.db.data.users[m.sender].pendente === 0) return enviar(`💡Você jà tem um pagamento em andamento, caso já tenha realizado o pagamento digite /𝗰𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝗿𝗽𝗮𝗴 ou para cancelar contate ao suporte!`)
    if(!texto) return m.reply("❗Digite o valor do pix que deseja gerar!\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: /recarregar 10")       
    let amount = text
	amount = Number(args.join(" ").replace(',', '.').replace(/[^\d\.]+/g, ''))	

    const email = 'usuario@gmail.com'; // qualquer email
    let nome_user = pushname
	const payment_data = {
            transaction_amount: amount,
            description: 'Pagamentos Via DMS',
            payment_method_id: 'pix',
            payer: {
               email,
                first_name: nome_user
            }
        };
    if(amount < 5 || amount > 4000) return enviar(`❌ Transação negada!\n\n> Depósito mínimo: R$5\n> Depósito máximo: R$4000`)  
    let user = global.db.data.users[m.sender]
    const randomnumber = Math.floor(Math.random() * 999) 
    const data = await mercadopago.payment.create(payment_data);
    const base64_img = data.body.point_of_interaction.transaction_data.qr_code_base64
    const buf = Buffer.from(base64_img, 'base64');
    const dateStr = data.body.date_of_expiration;
    const date = new Date(dateStr);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    const datax = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
    const hrx = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    fs.writeFileSync(`./qr_code_${randomnumber}.png`, buf);
    user.pendente += amount
    user.token_pix = `${data.body.id}` 
    let tPendente = `${data.body.id}` 
    let tStatus = "Pendente"
//    xtoken.addTokenUser(m.sender, '30m', _tpendent)
    addTokenPix(tPendente, sender, amount, datax, hrx)
    addTokenPixPendente(tPendente, sender, amount, datax, hrx)
    buttons = [
        {buttonId: `${prefixo}confirmarpag ${data.body.id}`, buttonText: {displayText: `JA PAGUEI ✅`}, type: 1},
    
        ]
         buttonMessage = {
         image: fs.readFileSync(`./qr_code_${randomnumber}.png`),
        caption: `━「 𝗗𝗘𝗣𝗢𝗦𝗜𝗧𝗢 𝗩𝗜𝗔 𝗣𝗜𝗫 」━\n\n✅ 𝗣𝗜𝗫 𝗴𝗲𝗿𝗮𝗱𝗼 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼!\n\n> 💰 𝗩𝗮𝗹𝗼𝗿: R$${payment_data.transaction_amount}\n> 🆔 𝗧𝗼𝗸𝗲𝗻: ${data.body.id}\nValidade: ${unixTimestamp}\n\n• 𝗡𝗢𝗧𝗔: Para confirmar o pagamento digite o seguinte comando: /𝗰𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝗿𝗽𝗮𝗴 [𝘁𝗼𝗸𝗲𝗻]\n\n━━━━━━━━━━━━━━━━`,
        buttons: buttons,
        headerType: 2
        }        
        await msgmr(`━「 𝗗𝗘𝗣𝗢𝗦𝗜𝗧𝗢 𝗩𝗜𝗔 𝗣𝗜𝗫 」━\n\n> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${pushname}\n> 𝗡𝘂́𝗺𝗲𝗿𝗼: ${nmrp}\n> 𝗗𝗮𝘁𝗮: ${datax}\n> 𝗛𝗼𝗿𝗮: ${hr}\n> 𝗩𝗮𝗹𝗼𝗿: R$${payment_data.transaction_amount}\n> 𝗧𝗼𝗸𝗲𝗻: ${data.body.id}\n\n• 𝗡𝗢𝗧𝗔: Para verificar o status do pagamento digite o seguinte comando: /𝗰𝗵𝗲𝗰𝗸𝗽𝗮𝗴 [𝘁𝗼𝗸𝗲𝗻]\n\n━━━━━━━━━━━━━━━━`)        
        await client.sendMessage(m.chat, buttonMessage, { quoted: m })
        await m.reply(`${data.body.point_of_interaction.transaction_data.qr_code}`)
 
    fs.unlinkSync(`./qr_code_${randomnumber}.png`)  
   
    await sleep(5000)
///    if(usuario.token_pix != 0) {
        mercadopago.payment.get(tPendente, mercadopago, (error, response) => {
            if (error) {
                enviar(`❗Token inválido ou expirado!`)
                console.log(error);
            } else {  
                const pagamentoStatus = response.body.status;
                if (pagamentoStatus !== 'approved') { 
                let valorPago = payment_data.transaction_amount;
                enviar(`⚠️ Pagamento expirado! Você demorou muito pra realizar o pagamento.`)
          //          add_dinheiro(m.sender, payment_data.transaction_amount)
                } else {
                }
            }
        })
//    } 
}
    break 

    case 'confirmarpag': {
      if (!isRegistrar) return enviar(semreg)     
      if (global.db.data.users[m.sender].pendente === 0) return enviar(`❗Token de pagamento não encontrado!`)      
      let user = global.db.data.users[m.sender]
      const datax = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
      const hrx = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
      let amount = text
      amount = Number(args.join(" ").replace(',', '.').replace(/[^\d\.]+/g, '')) 
      if(!amount) return enviar(`❌ Digite o token de transação!\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: /confirmarpag 52801700000`)
        var id = texto
        var filtro = {
          "order.id": id
        }
       	const payment_data = {
            transaction_amount: id,
            description: 'Pagamentos Via DMS',
            payment_method_id: 'pix',
        };
        mercadopago.payment.get(id, mercadopago, (error, response) => {
          if (error){
              enviar(`❗Token inválido ou expirado!`)
              console.log(error);
          }else{
            const pagamentoStatus = response.body.status;
            if (pagamentoStatus === 'approved') {  
            let tPendente = `${id}` 
            let tValor = user.pendente
            addTokenPago(tPendente, sender, tValor, datax, hrx)            
            m.reply(`✅ Pagamento aprovado com sucesso!`)
            msgmr(`━「 𝗔𝗗𝗗 𝗦𝗔𝗟𝗗𝗢 」━\n\n> 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: ${pushname}\n> 𝗡𝘂́𝗺𝗲𝗿𝗼: ${nmrp}\n> 𝗗𝗮𝘁𝗮: ${datax}\n> 𝗛𝗼𝗿𝗮: ${hr}\n> 𝗩𝗮𝗹𝗼𝗿: R$${user.pendente}\n> 𝗧𝗼𝗸𝗲𝗻: ${id}\n\n• 𝗡𝗢𝗧𝗔: Para verificar o status do pagamento digite o seguinte comando: /𝗰𝗵𝗲𝗰𝗸𝗽𝗮𝗴 [𝘁𝗼𝗸𝗲𝗻]\n\n━━━━━━━━━━━━━━━━`) 
            user.carteira += user.pendente     
            user.token_pix = 0
            user.pendente = 0
            } 

            else if (pagamentoStatus !== 'approved') {
    
            m.reply('❗Você não realizou o pagamento!')
            }    
          }})

        }
        break
*/
case 'gtoken': {
       if (!isDono) return enviar(msg.dono)
           if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
//     name2x = randomText(8)
      key2x = randomText(12)
      add_usuario(key2x, "usuariommmsds", key2x);
      txt = `❗「 TOKEN GERADO 」❗
      
🗝️ TOKEN: *${key2x}*

🕵️ APIS DE CONSULTAS 🕵️

TELEFONE

https://webapi.herokuapp.com/puxar?type=api_tel1&q=11932853601&token=${key2x}

TELEFONE (2)

https://webapi.herokuapp.com/puxar?type=api_tel2&q=11932853601&token=${key2x}

TELEFONE (3)

https://webapi.herokuapp.com/puxar?type=api_tel3&q=11932853601&token=${key2x}

CPF - [OFF] ❌

https://webapi.herokuapp.com/puxar?type=api_cpf&q=45317828791&token=${key2x}

CPF1

https://webapi.herokuapp.com/puxar?type=api_cpf1&q=45317828791&token=${key2x}

CPF2

https://webapi.herokuapp.com/puxar?type=api_cpf2&q=08385265783&token=${key2x}

CPF3

https://webapi.herokuapp.com/puxar?type=api_cpf3&q=45317828791&token=${key2x}

SCORE

https://webapi.herokuapp.com/puxar?type=api_score&q=08385265783&token=${key2x}

NOME

https://webapi.herokuapp.com/puxar?type=api_nome&q=Jair%20Messias%20Bolsonaro&token=${key2x}

PLACA

https://webapi.herokuapp.com/puxar?type=api_placa&q=JYE9708&token=${key2x}

CNPJ

https://webapi.herokuapp.com/puxar?type=api_cnpj&q=39708509000129&token=${key2x}

CNS - [OFF] ❌

https://webapi.herokuapp.com/puxar?type=api_cns&q=703106349459960&token=${key2x}

VIZINHOS

https://webapi.herokuapp.com/puxar?type=api_vizinhos&q=08385265783&token=${key2x}

PARENTES

https://webapi.herokuapp.com/puxar?type=api_parentes&q=08385265783&token=${key2x}

BENEFÍCIOS

https://webapi.herokuapp.com/puxar?type=api_beneficios&q=08385265783&token=${key2x}

CHK

https://webapi.herokuapp.com/puxar?type=chk&q=5335820303875229|12|2023|665&token=${key2x}

BIN

https://webapi.herokuapp.com/puxar?type=bin&q=498409&token=${key2x}`

  buttons = [
  {buttonId: `${prefixo}deltoken ${key2x}`, buttonText: {displayText: `DELETAR TOKEN 🗑️`}, type: 1},
  {buttonId: `${prefixo}copiartk ${txt}`, buttonText: {displayText: `COPIAR 📋`}, type: 1}
  ]
   buttonMessage = {
  text: txt,
  footer: `Para deletar use: /deltoken ${key2x}`,
  buttons: buttons,
  headerType: 2
  }
  client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
    break
    case 'deltoken': {
       if (!isDono) return enviar(msg.dono)
           if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
      reload = randomText(99)
      await changeKey(`${text}`, `${reload}off_`)
      m.reply(`➥ Token deletado com sucesso!`)      
    }
  break
  case 'copiartk': {
     if(!isDono) return enviar(msg.dono)
     // if (!isRegistrar) return m.reply(semreg)
     client.sendMessage(m.chat, {text: `${texto}`})
     }
     break           
 
case 'idget': {
    if (!texto) return m.reply('➥ Mande um link de grupo!')
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('➥ Link inválido!')   
    let result = args[0].split('https://chat.whatsapp.com/')[1]
    await client.groupAcceptInvite(result).then(res2 => {
    var geitdd = res2.replace(`""`, ``);
    m.reply(geitdd)
    })
}
    break            
 
     case 'copytext': {
     if (m.isGroup) {
     client.sendMessage(m.sender, {text: `${texto}`})
     await sleep(2500)
     m.reply(`➥ Consulta enviada em texto no seu privado!`)
     let { chat, fromMe, id, isBaileys } = m.quoted
//     if (!isBaileys) return m.reply('➥ Mencione uma mensagem do bot para ser deletada!')
     await sleep(120000)
     console.log(`~> Consulta apagada no histórico de mensagem!`)
     client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }) 
     } else {
     client.sendMessage(m.sender, {text: `${texto}`})
     await sleep(120000)
     console.log(`~> Consulta apagada no histórico de mensagem!`)
     client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }) 
     }
     }
     break

case 'ping':
case 'speed':
await client.sendMessage(m.chat, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${ping.toFixed(4)}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`  }, caption: `${ping.toFixed(4)}` }, { quoted: m })
break                    

case 'hidetag': {
if (!m.isGroup) return m.reply (msg.grupo)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins && !isDono) return m.reply(semadm)
client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break    

			case 'setbio': {			
				if (!isDono && !mek.key.fromMe) return m.reply(msg.dono)
				if (args.length < 1) return m.reply(`➥ Digite a mensagem da biografia!`)
					client.setStatus(`${texto}`)
					m.reply(`➥ Sucesso ao mudar a biografia do bot!`)
					}
					break
case 'entrar': {
 if (!isDono) return enviar(msg.dono)
 if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
if (!texto) return m.reply(`➥ Mande um link do grupo!`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(`➥ Link inválido`)
m.reply(msg.aguarde)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result).then((res) => m.reply(`➥ Pronto ✔️`)).catch((err) => m.reply(`➥ Erro ❌`))
}
break

case 'sair': {
 if (!isDono) return enviar(msg.dono)
 if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
await client.groupLeave(m.chat).then((res) => m.reply("➥ Pronto ✔️")).catch((err) => m.reply("➥ Erro ❌"))
}
break

case 'seradm': {
if (!m.isGroup) return m.reply (msg.grupo)
if (!isDono) return enviar(msg.dono)
if (!isBotAdmins) return m.reply(msg.botAdmin)   
await client.groupParticipantsUpdate(m.chat, [sender], 'promote')
m.reply(`➥ Agora voce é adm do grupo!`)
}
break
case 'sermembro': {
if (!m.isGroup) return m.reply (msg.grupo)
 if (!isDono) return enviar(msg.dono)          
if (!isBotAdmins) return m.reply(msg.botAdmin)
await client.groupParticipantsUpdate(m.chat, [sender], 'demote')
m.reply(`➥ Agora você è um membro comum!`)
}
break	
             
            default:
                if (budy.startsWith('=>')) {
                     if (!isDono) return enviar(msg.dono)
           if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                     if (!isDono) return enviar(msg.dono)
           if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                if (!isDono) return enviar(msg.dono)
                if (m.isGroup) return enviar(`Esse comando so pode ser utilizado no privado!`)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Arquivos Atualizados ${__filename}`))
	delete require.cache[file]
	require(file)
})
