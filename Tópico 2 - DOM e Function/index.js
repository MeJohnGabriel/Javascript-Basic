var p1 = window.document.getElementsByTagName('p')[1]
//Você CHAMANDO o 1º'p' e está pedido para mostrar no 'window.document.write(dom.innerText);'
    window.document.write('Isso é o que está escrito em "p1" : ' + p1.innerHTML)
    p1.style.color = 'yellow'//Estilizando a variável 'p'

    var corpo = window.document.body
    corpo.style.background = 'blue'//Estilizando o corpo
   
    /* COMANDO - chamando a DIV por ID.
    var d = window.document.getElementById('mensagem')
    d.style.background = 'green'
    d.innerText = 'Clica'
    */
   
   /*COMANDO - chamando a DVI por NAME.
   var d = window.document.getElementsByName('mensagem')[0]
    d.style.background = 'red'
    */

    //AQUI 
    var d = window.document.querySelector('div#mensagem')
    d.style.background = 'red'

