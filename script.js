
function calcular()
{	
    var operacao = document.getElementById('operacao').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if(num1 == null || num1 == ''){
        alert('Digite números para Primeiro Valor');
        return false;
    }

    if(num2 == null || num2 == ''){
        alert('Digite números para Segundo Valor'); 
        return false;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    
    
    var resultado = null;
    
    switch(operacao)	
    {
        case '1': resultado = num1+num2;
        break;

        case '2': resultado = num1-num2;
        break;

        case '3': resultado = num1*num2;
        break;

        case '4': resultado = num1/num2;
        break;

        default:
            alert('A operação selecionada é inválida');
            return false;
    }

    document.getElementById('resultado').innerHTML = resultado; 

}

function cancelar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
