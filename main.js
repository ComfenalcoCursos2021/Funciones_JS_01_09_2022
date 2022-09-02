

let l = Number(prompt("Ingrese el lado del cuadrado", 1));
function formulaAreaCuadrado(Lado, imagen="imagenes/Cuadrado.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Math.pow(Lado, 2);
}
console.log(`El Area del cuadrado es: ${formulaAreaCuadrado(l)}`);

