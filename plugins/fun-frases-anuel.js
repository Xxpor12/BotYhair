// By https://github.com/elrebelde21

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁 〕┄⊱\n┊\n *👹 ${pickRandom(global.chiste)} 👹*\n┊\n*╰━━━⊰𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁 ⊱━━━━დ*`)
}
handler.tags = ['humor']
handler.command = ['Anuel']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.anuel = ["Dile Que Se Perdio Una Perla Por Estar Buscando Piedras", "Con Poco Dinero Pero No Es El De Mis Padres", "Que Me Critique Dios Que Es El Unico Que No Es Pecador", "La Sangre Te Hace Pariente Pero La Lealtad Te Hace Familia", "Baby Tu Y Yo Nacimos Pa Morir", "Para Que Darle Amor A Una Mujer Cuando ella Prefiere Un Billete de Cien", "Tu Eres Una Diabla Disfrazada De Mujer", "Hoy Me Ama , Mañana Me Odio Solo Dios Sabe Por Que :(", "Conmigo Te Ve Mejor Que Con El", "Bebecita Estas Mas Rica Que Ayer", "Pa Chingar Tu No Me Tienes Que Amar", "Real Hasta La Muerte Brr"]
