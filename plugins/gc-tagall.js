let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `${pesan}`
let teks = `╭┄〔 *𝗧𝗲𝗮𝗺 𝗛𝘆𝗱𝗿𝗮 𝗕𝗼𝘁* 〕┄⊱\n┆\n┆ 𝘼𝙘𝙩𝙞𝙫𝙚𝙣𝙨𝙚 𝙥𝙡𝙖𝙣𝙩𝙖𝙨 ღ${oi}\n┆\n`
for (let mem of participants) {
teks += `┆ღ @${mem.id.split('@')[0]}\n`}
teks += `└𝗧𝗲𝗮𝗺 𝗛𝘆𝗱𝗿𝗮 𝗕𝗼𝘁\n\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
