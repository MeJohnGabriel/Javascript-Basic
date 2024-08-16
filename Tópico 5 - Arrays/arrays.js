let num = [ 4 , 3 , 2 , 1 , 5 ]

num.push(6)
//num.sort()
console.log(num)

let pos = num.indexOf(3)
if(pos == -1){
    console.log(`A posição do valor não existe`)
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}

/*console.log(`Nosso array tem ${num.length} posições`)
//console.log(`O valor nesta posição é ${num[0]}`)
for(let c = 0; c<num.length; c++){    //TESTE LÓGICO: ENQUANTO O "C" NÃO CHEGAR AO FINAL...  ///  "C" neste caso é a posição do elemento
console.log( `A posição ${c} tem o valor de ${num[c]}`)
}


for(let c in num ){
console.log(`A posição ${c} tem o valor de ${num[c]}`)    
}*/

