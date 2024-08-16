var idade = 67
console.log(`Você tem ${idade} anos`)
if ( idade < 16 ){
    console.log(' Não vota ')
} else if ( idade < 18 || idade >= 65) {                   //SE A IDADE N É 16, NÃO É MAIOR OU IGUAL A 16 então:(if(idade >= 16 && idade <18)) é desnecessario 
        console.log(' Voto Opcional ')
} else {                                    //SE A IDADE NÃO É MENOR QUE 18, ELA É MAIOR OU IGUAL A 18; entao nao precisa do if(...). 
        console.log(' Voto obrigatório ')
}
