var agora = new Date()
var diaSem = agora.getDay()

//console.log(diaSEm)

/*  = domingo 1 = segunda
2 = terca 3 = quarta 4 = quinta 5= sexta 6 = sabado 0*/

switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5: 
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`ERRO: DIA INVALIDO`)


}