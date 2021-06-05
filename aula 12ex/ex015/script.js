function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(' ERRO Verifique os dados digitados')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 50) {
                // jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 50) {
                // jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)


    }
}
