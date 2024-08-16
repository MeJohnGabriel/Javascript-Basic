//FUNCTION #001         (VERFICA SE O N É PAR OU ÍMPAR)
function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

//let res = parimp(2)
console.log(parimp(2))



//FUNCTION #002     (SOMA A PARTIR DE PARÂMETROS)
function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(1 , ))



//FUNCTION #003   (VARIÁVEL RECEBENDO UMA FUNÇÃO)
let v = function(x){
    return x*2
}
console.log(v(4))


                                         
//FUNCTION #004  (FATORIAL DE UM NÚMERO; EX: 5! = 5 x 4 x 3 x 2 x 1 = 120 )
function fatorial(n){
    let fat = 1 
    for(let c = n; c > 1; c--){
        fat *= c 
    }
    return fat
}
console.log(fatorial(5))

//FUNCTION #005     (RECURSIVIDADE)
function fatorial(n){
    if(n==1){
        return 1 
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))