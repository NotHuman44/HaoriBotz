// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

//Waktu
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/HbPRdFCUe6NGtqcditLDKe', ''] // ganti jadi group lu
global.owner = ['6285736178354'] // Put your number here //owner eval
global.kontak = ['6285736178354'] //Ketika ada yang ngetik #owner
global.mods = ['6285736178354'] // Want some help?
global.prems = ['6285736178354'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz', 
  dzx: 'https://api.dhamzxploit.my.id', 
  males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'buy',
  'https://api.lolhuman.xyz': 'buy',
  'https://zahirr-web.herokuapp.com': 'zahirgans'
}

lolkey = 'buy'
xteamkey = 'buy'

//xteam        MIMINETBOT
namaig = 'https://instagram.com/Xiao_yan_21'
namagithub = 'ImYanXiao'
kasihcaption = `Nih kak`
namakontak1 = ''
namakontak2 = ''

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = '▧ ʙʏ' // ganti aja
global.author = 'ᴍᴀᴋɪᴍᴀ ʙᴏᴛᴢ' // ganti aja

//yyy
bc = 'ᴍᴀᴋɪᴋᴀᴍвσтʓ' //King Of Bear Broadcast
footer = '\nHᴀᴏʀɪBᴏᴛᴢ 🔭'
namabot = 'ᴍᴀᴋɪᴍᴀ 𝙱𝚘𝚝𝚣 🐾'
namalu = 'Xiao - Yan'
global.botwm = `ᴍᴀᴋɪᴍᴀ ʙᴏᴛᴢ 🐾`//UBAH JADI NAMAMU


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
