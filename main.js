//comece aqui
nomeEstudantesArray=[]; 


function submit(){
    var displayStudentArray=[];
    //colocando Alunos Dentro do array
    for(var p=0; p<=nomeEstudantesArray.length ;p++){
        var nomeEstudante=document.getElementById("nameOfTheStudent"+ p).value;
        console.log(nomeEstudante)
        nomeEstudantesArray.push(nomeEstudante);
    }
console.log(nomeEstudantesArray);
 var tamanhoDoArrayDoEstudante=nomeEstudantesArray.length

console.log(nomeEstudantesArray);

//mmostrando o array na tela
 for( var k=0; k<=nomeEstudantesArray.length; k++)
 {displayStudentArray.push("<p> nome"+nomeEstudantesArray[k]+"</p>")
 
  console.log(displayStudentArray);
}

} 


function sorting(){}
