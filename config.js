const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '0712155147';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'em5092002@gmail.com' ;
global.location = 'Kenyan' ;
global.timezone  = process.env.TIME_ZONE || 'Kenya/Nairobi'
global.gurl = 'https://youtube.com/c/Elian Tech-vv2ne' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '923184474176'; ;
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/memelord050/Memelord-md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "SESSION_06_53_05_12_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVWRStlSHJGUnQ3bXE3SG9uTWtHSkhoWkZPOTQ4UWtvZm90WFREOVVGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGh5RGJtdkQrcUgwb1hTc2hETmdYd1psL1RDdmJnbzhHajhFd0dIbDcxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSElvbHNrdS85UmEvS0xHREdDb2tkMTViZlQ4YW9hQ1p1MStaTEhoQzIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzakxQQ3l0dGhzWlVGeUVmclpYSVpGNlR6T1JRVkU5aFppVFBJa1dZOUVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCZFNLa0FDd2pWNEZ0VHFSTnRkTkhZWllTZFZsa1F0T0xTc2NXTTB1MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3b2VkUndyTStsS2lCTWVUc0M1OHl0Qng3dFpXZ0dYK3UrajIxbEJWMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0c0VllXOHJZQVpVTjVNdDM1VlZBenpJME1pM2o1VTV2bko0dmQyYWdIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3grVzZSTDhUVUJyOWZZRmVrcnlYSllRNzhudWVBUUVhdlRLakJMRzdoOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2QlQ1eWJaOE9icTNGSkNTNHJqQnFPMEdnT2tXSFkva3ZLNXB3SENXZWlkb0V6NDMrZWJDRGNZQXAxWXBnc3JDeGE5NllDMFA4YklqY2F5LzNDOEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJzR1Q4YjlEWnNPQVhreEY1N3IvQ0RtdnhFN01rc25RSHVMUmZTWXNBb0RvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxMjE1NTE0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNjc4Nzc1ODU4Q0ZDNkQ4OTk1NTVDMzUzQzA5OEY0RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1NDk2ODAyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4emd5ODN5clJGeXhtSWVPOVAwSUpBIiwicGhvbmVJZCI6Ijg5ZGYyZTEyLWJkOTMtNDhjYS04YmU4LTVlMTFmMzUyYWUyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6Tlg2TXhSR2ZXWm9BbjdqU2w4OUZUS01vMlk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJkV0FFYzc3RUNhWXY5Q3UyMXF6MkJIajhVdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2eDIrQUZFTnJPZ2JJR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllpMS9zRUZzbVRIUTRTWnNRaFNONFRqeGV5MFNlU2RicUk0aDQrR0xiSG89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNScndLa0dFWlJZSUZ3TnN4akg5NCtRdzN2c0lsakFDY2VTNjcxV2J4NmNlZ2U5VngrT3p6RHJBK1QzV0hsTW9lTWRZQ2x1c09IQkpTR3ZVczB2RUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYNndyS29HTWlXWitrYXNIOHlxU3U0bzJHdWV6bUZaeW42ek43K1NlOTRHNW1ydVA3MTIzTkc4dzErWWsxQkRsNFB4VlpXUlB5b2tWQU1qZ1VURHdCdz09In0sIm1lIjp7ImlkIjoiMjU0NzEyMTU1MTQ3OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTcOqbcOqbMO4cmQg4oSiIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMjE1NTE0Nzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldJdGY3QkJiSmt4ME9FbWJFSVVqZUU0OFhzdEVua25XNmlPSWVQaGkyeDYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTU0OTY3OTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlkyIn0=",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'MEMELORD-ᴍᴅ',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `It'x Suhail`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'true',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || 'available', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3000,
  disablepm: process.env.DISABLE_PM || "false",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ MEMELORD²²¹-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • Eliam Tech』*\n youtube.com/@Eliam Tech-vv2ne"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.2.2',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
