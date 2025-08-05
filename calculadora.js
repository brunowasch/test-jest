function somar(a, b){
  if(isNaN(a) || isNaN(b)) {
    return null;
  }

  return a + b;
}

function subtrair(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return null;
  }

  return a - b;
}

function multiplicar(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return null;
  }

  return a * b;
}

function dividir(a, b) {
  if(b === 0) { 
    return null;
    //throw new Error("Divisor não pode ser zero");
  } else if(isNaN(a) || isNaN(b)) {
    return null;
  }

  return a / b;
}

function porcentagem(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return null;
  } else if (b === 0) {
    return undefined;
  }

  return (a / b) * 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem }