function inverterString(str) {
    
    var caracteres = str.split('');
    
    
    var tamanho = caracteres.length;
    
    
    for (var i = 0; i < Math.floor(tamanho / 2); i++) {
        
        var temp = caracteres[i];
        caracteres[i] = caracteres[tamanho - i - 1];
        caracteres[tamanho - i - 1] = temp;
    }
    
   
    var stringInvertida = caracteres.join('');
    
    return stringInvertida;
}

// Aqui está um exemplo
var stringOriginal = "Olá, mundo!";
var stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);