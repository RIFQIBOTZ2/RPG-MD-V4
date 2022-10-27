let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/1512d842cea8e4b6723f2.jpg'
let text = `PERMINGGU : 2K
PERBULAN : 3K
PERMANENT : 4K
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/6288279268363?text=Hallo admin, saya tertarik untuk menyewa bot yuki adisty'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler
