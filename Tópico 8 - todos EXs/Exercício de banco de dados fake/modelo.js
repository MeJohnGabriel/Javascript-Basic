function mostrarHora(){
var hora = 16

var img = window.document.getElementById('day')
var msg = window.document.getElementById('msg')
var data = new Date()
//var hora = data.getHours()
msg.innerHTML = `AGORA SÃO ${hora} HORAS.`
if (hora >= 0 && hora <= 12) {
    //BOM DIA
    img.src = 'dia.png'
    document.body.style.background = '#65d0eb'
} else if (hora > 12 && hora < 18) {
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#e09538'
} else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#1a2687'
}

}

