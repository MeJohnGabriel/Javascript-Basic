function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano){ //verifica se da para realizar a function
        window.alert(' [ERRO] Verifique os dados e tente novamente. ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'bebe-masculino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-oculino.png')
            }else if (idade < 50){
                //Adulto                
                img.setAttribute('src', 'audulto-masculino.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso-masculino.png')
            
        }
    }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=10){
                //Criança
                img.setAttribute('src', 'bebe-feminino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-feminina.png')
            }else if (idade < 50){
                //Adulto                
                img.setAttribute('src', 'adulto-feminina.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso-feminina.png')
        }
    }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

