let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
if (text.includes('Tebakgambar')){
conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil',MessageType.text, {quoted: m});
}
if (text.includes("tebakgambar")){
axios.get(`https://api.vhtear.com/tebakgambar&apikey=${apivhtear}`).then((res) => {
    imageToBase64(res.data.result.soalImg)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Menulis ⏳ silahkan tunggu', MessageType.text, { quoted: m } )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {quoted: m})
        })
})
}
`.trim(), m)
}
handler.command = /^(tebakgambar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

