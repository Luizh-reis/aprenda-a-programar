let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandalia", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
    console.log(`${produtoA.nome}  ${produtoA.valor * 1.2}`)

} else {
    console.log(`${produtoA.nome}  ${produtoA.valor * 1.12}`)
}
    
if (produtoB.internacional == true) {
    console.log(`${produtoB.nome} ${produtoB.valor * 1.2}`)

} else {
    console.log(`${produtoB.nome} ${produtoB.valor * 1.12}`)
}

if (produtoC.internacional == true) {
    console.log(`${produtoC.nome}  ${produtoC.valor * 1.2}`)
   
} else {
    console.log(`${produtoC.nome}  ${produtoC.valor * 1.12}`)
}