let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa nggk langsung ke terminalnya ajjh asu?', m)
  else {
    await conn.reply(m.chat, 'Goodbye bot ngentod :\')', m)
    conn.close()
  }
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

