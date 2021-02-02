let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔═══════════════════════
╠═〘 *INFO BOT* 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ *AUTHOR*: _Muhammad Iqbal_
╠➥ *VERSION*: _1.0.1_
╠➥ *DESIGNER*: _BIJI ONTA_
╠➥ *DONASI*: _085781406716_
║
╠═〘 *Media Sosial* 〙 ═
╠➥ Twiteer: @_miqbal22_
╠➥ Link Tw: 'https://twitter.com/_miqbal22_'
╠➥ Instagram: @_miqbal.22
╠➥ Link Ig: 'https://instagram.com/_miqbal.22'
╠➥ Facebook: Teh Pucuk Harum
╠➥ Link Fb: 'https://facebook.com/yaellah.bal'
╠➥ YouTube: Iqbal XD
╠➥ Link Yt: 'https://m.youtube.com/channel/UCb6qlya4nhSYqNBdSQVes-A'
║
╠═〘 *Thanks To* 〙 ═
╠➥ Nurotomo/Drawl Nag
╠➥ MfarelS
╠➥ ArugaZ
╠➥ ST4RZ
╠➥MhankBarbar
╠➥ Dan kawan yang lain :)
║
╠═〘 *DONASI* 〙 ═
╠➥ Indosat: 0857-8140-6716
║>Request? Wa.me/6285745376798
║
╠═〘 Jingan BOT 〙 ═
╚═══════════════════════
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

