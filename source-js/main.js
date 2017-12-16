var num1
var num2
var result

function addition(){
  return result = num1 + num2
}

function subtraction(){
  return result = num1 - num2
}

function multiplication(){
  return result = num1 * num2
}

function division(){
  if (0 < num2 < 0){
    return result = num1 / num2
  }
}

function power(){
  return result = num1 ** num2
}

function sqrt(){
  if (x1 <= 0){
    return result = num1 ** 1/num2
  }
}

function sinus(){
  return result = Math.sin(num1)
}

function cos(){
  return result = Math.sin(num1)
}

function factorial(num1) {
  if (num1 === 0) {
    return 1
  }
  return num1 * factorial(num1 - 1)
}

alert(factorial(10))