function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var dia = window.document.getElementById('dia')  
    msg.innerHTML= `Agora sao ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.scr = 'fotomanha.png'
        document.body.style.background = '#e3d0ba'
        dia.innerHTML= `Bom Dia`
        
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#88766a'
        dia.innerHTML= `Boa Tarde`
    
    }
    else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#fca31b'
        dia.innerHTML= `Boa Noite`
    }
}


