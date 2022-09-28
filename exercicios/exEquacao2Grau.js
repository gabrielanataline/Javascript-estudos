/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */


function equacao (a, b, c){
  let delta = Math.pow(b, 2) - (4 *a *c)
let x1 = (-b + Math.sqrt(delta)) / (2*a)
let x2 = (-b - Math.sqrt(delta)) / (2*a)
    return [x1, x2]
    }


console.log(equacao (1, -1, -12))
