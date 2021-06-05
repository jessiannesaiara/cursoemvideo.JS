var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}hrs`)

if (hora <= 5) {
    console.log(`Boa madrugada`)
}
else if (hora <= 18) {
    console.log(`Boa Tarde`)
}
else if (hora <= 5) {
    console.log(`Boa madrugada`)
}
else {
    console.log(`Boa Noite`)
}