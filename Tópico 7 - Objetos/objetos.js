let amigo = {nome: 'José', sexo: 'M', peso: 87.4 ,
engordar(p){
console.log('engordou')
this.peso += p
}
}

amigo.engordar(12)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)
