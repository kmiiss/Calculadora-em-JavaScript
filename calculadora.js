function calculo(){
    var valor1 = Number(document.getElementById("n1").value)
    var valor2 = Number(document.getElementById("n2").value)
    var operacao = document.getElementById("operacao").value
    var result = 0

   if (operacao == "soma"){
      result = valor1 + valor2
      resultado = result
   }
   else if (operacao == "subtracao"){
      result = valor1 - valor2
      resultado = result
   }
   else if (operacao == "multiplicacao"){
      result = valor1 * valor2
      resultado = result

  
   }
   else if (operacao == "divisao"){
      result = valor1 / valor2
      resultado = result
   }
   
   document.getElementById("resultado").value = result
}


