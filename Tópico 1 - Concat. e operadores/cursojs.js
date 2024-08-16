var idade = Number(window.prompt('Insira sua idade:')) 
//COMANDO//var n2 = Number(window.prompt('Insira ser valor bancário 2:'))
//COMANDO//var resultado = idade>=18 ? 'APTO PARA TIRAR CARTEIRA DE HABILITAÇÃO' : 'INAPTO PARA TIRAR CARTEIRA DE HABILITAÇÃO'
var resultado = idade>= 18 && idade<= 17 ? 'APTO,' : 'INAPTO,'
//Aqui estão sendo utilizado os operadores relacionais:'>='(maior ou igual) e ternários: ":" "?"
//COMANDO//var soma = n1 + n2

document.writeln('Você está ' + resultado )//O 'document.write escreve na tela


//COMANDO//var nome = Window.prompt("qual Seu Nome") 

//COMANDO//document.write(`seu nome tem ${nome.length} Letras`) 
/*ANT: O [$](placeholder) está
chamando a variável nome e está usando o comando "lenght" para dizer quantos caracteres
a palavra tem.*/                

//var j = 'Javascript'
//document.writeln(' Estou aprendendo ' +  j)  

var nome = (window.prompt('Insira seu nome:'))
//window.alert(' Olá ' + nome)
document.write('Olá ' + nome + ' !')
//document.write(' Olá '  + nome + '  seu salário total é de:  '+ soma + '!')
//document.write(`Seu nome: ${nome}, em maiscúlo é ${nome.toUpperCase()}`)

