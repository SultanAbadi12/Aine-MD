let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-7001-7326]
│ •  [0857-7001-7326]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
