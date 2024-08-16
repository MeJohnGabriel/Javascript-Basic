function gerarTabela(){

var formValorUm = document.getElementById('valorUm')
var tabuada = document.getElementById('selTab')

if(formValorUm.value.length == 0){
window.alert('[ERRO] Verifique os campos e tente novamente! ')
} else {      
    /*var numberFormValorUm = Number(formValorUm.value)  <--USAND O WHILE -->
    var i = 1
    tabuada.innerHTML = ''
    while(i <= 10){
        var item = document.createElement('option') 
        item.text = `${numberFormValorUm} x ${i} = ${numberFormValorUm * i}`
        item.value = `tab ${i}`
        tabuada.appendChild(item) i = 
        i++       
    }*/ 
        var numberFormValorUm = Number(formValorUm.value) 
        tabuada.innerHTML = ''

        for(var i = numberFormValorUm; i<= 10; i++){
        var item = document.createElement('option')
        item.text = `${numberFormValorUm} x ${i} = ${numberFormValorUm*i}`
        item.value = `tabuada ${i}`
        tabuada.appendChild(item)
         
    
        }
}  

}
