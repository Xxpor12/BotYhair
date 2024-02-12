import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*╔══ ≪ JUEGOS ≫ ══╗*
*║* 🎡➺ _${usedPrefix}Abrazo_
*║* 🎡➺ _${usedPrefix}Cumple_
*║* 🎡➺ _${usedPrefix}Cuando_
*║* 🎡➺ _${usedPrefix}Follar_
*║* 🎡➺ _${usedPrefix}Huevo_
*║* 🎡➺ _${usedPrefix}Formartrio_
*║* 🎡➺ _${usedPrefix}Minovia_
*║* 🎡➺ _${usedPrefix}Minovio_
*║* 🎡➺ _${usedPrefix}Sorteo_
*║* 🎡➺ _${usedPrefix}Nalga_
*║* 🎡➺ _${usedPrefix}Sega_
*║* 🎡➺ _${usedPrefix}mates | matemáticas | math_
*║* 🎡➺ _${usedPrefix}lanzar *cara* | *cruz*
*║* 🎡➺ _${usedPrefix}ppt *piedra : papel : tijera*_
*║* 🎡➺ _${usedPrefix}tictactoe | ttt *sala*_
*║* 🎡➺ _${usedPrefix}deltictactoe | delttt_
*║* 🎡➺ _${usedPrefix}topgays_
*║* 🎡➺ _${usedPrefix}topotakus_
*║* 🎡➺ _${usedPrefix}toppajer@s_
*║* 🎡➺ _${usedPrefix}topput@s_
*║* 🎡➺ _${usedPrefix}topintegrantes | topintegrante_
*║* 🎡➺ _${usedPrefix}toplagrasa | topgrasa_
*║* 🎡➺ _${usedPrefix}toppanafrescos | toppanafresco_
*║* 🎡➺ _${usedPrefix}topshiposters | topshipost_
*║* 🎡➺ _${usedPrefix}toplindos | toplind@s_
*║* 🎡➺ _${usedPrefix}topfamosos | topfamos@s_
*║* 🎡➺ _${usedPrefix}topparejas | top5parejas_
*║* 🎡➺ _${usedPrefix}gay | gay *@tag*_
*║* 🎡➺ _${usedPrefix}gay2 *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}lesbiana *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}manca *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}manco *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}pajero *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}pajera *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}puto *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}puta *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}rata *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}love *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}doxear *nombre : @tag*_
*║* 🎡➺ _${usedPrefix}doxxeame_
*║* 🎡➺ _${usedPrefix}pregunta *texto*_
*║* 🎡➺ _${usedPrefix}apostar | slot *cantidad*_
*║* 🎡➺ _${usedPrefix}formarpareja_
*║* 🎡➺ _${usedPrefix}dado_
*║* 🎡➺ _${usedPrefix}verdad_
*║* 🎡➺ _${usedPrefix}reto_
*║* 🎡➺ _${usedPrefix}multijuegos_
*║* 🎡➺ _${usedPrefix}juegos_
*╚══ ≪ •❈• ≫ ══╝*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(MenuJuegos)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
