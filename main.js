

let b = Number(prompt("Ingrese la base del rectangulo", 1));
let h = Number(prompt("Ingrese la altura del rectangulo", 1));
function formulaAreaRectangulo(base, altura, imagen="imagenes/Rectangulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return base * altura;
}
console.log(`El Area del Rectangulo es: ${formulaAreaRectangulo(b, h)}`);

