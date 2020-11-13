var operadores = [];
var numeros=[];
operadores.push("");
var numero = "";


function num1() {
  numero=numero+"1";
  document.getElementById("resultado").innerHTML = numero;
}

function num2() {
  numero=numero+"2";
  document.getElementById("resultado").innerHTML = numero;
}

function num3() {
  numero=numero+"3";
  document.getElementById("resultado").innerHTML = numero;
}

function num4() {
  numero=numero+"4";
  document.getElementById("resultado").innerHTML = numero;
}

function num5() {
  numero=numero+"5";
  document.getElementById("resultado").innerHTML = numero;
}

function num6() {
  numero=numero+"6";
  document.getElementById("resultado").innerHTML = numero;
}

function num7() {
  numero=numero+"7";
  document.getElementById("resultado").innerHTML = numero;
}

function num8() {
  numero=numero+"8";
  document.getElementById("resultado").innerHTML = numero;
}

function num9() {
  numero=numero+"9";
  document.getElementById("resultado").innerHTML = numero;
}

function num0() {
  numero=numero+"0";
  document.getElementById("resultado").innerHTML = numero;
}

function reseteo(){
  operadores =[];
  numeros=[];
  operadores.push("");
  numero = "";
  document.getElementById("resultado").innerHTML = "";
}

function resta(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  operadores.push("-");
  numero="";
  document.getElementById("resultado").innerHTML="-";
}

function suma(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  operadores.push("+");
  numero="";
  document.getElementById("resultado").innerHTML="+";
}

function dividir(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  operadores.push("/");
  numero="";
  document.getElementById("resultado").innerHTML="/";
}

function multiplicar(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  operadores.push("*");
  numero="";
  document.getElementById("resultado").innerHTML="*";
}

function porcentaje(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  operadores.push("%");
  numero="";
  document.getElementById("resultado").innerHTML="%";
}

function igual(){
  var local = document.getElementById("resultado").innerHTML;
  numeros.push(local);
  let total = 0;
  let resultat = parseInt(numeros[0]);
  if(operadores[1]=="+")
  for (i = 1; i < numeros.length; i++){
    total = parseInt(numeros[i]) + resultat;
  }
  if(operadores[1]=="-")
  for (i = 1; i < numeros.length; i++){
    total = resultat - parseInt(numeros[i]);
  }
  if(operadores[1]=="/")
  for (i = 1; i < numeros.length; i++){
    total = resultat / parseFloat(numeros[i]);
  }
  if(operadores[1]=="*")
  for (i = 1; i < numeros.length; i++){
    total = resultat * parseInt(numeros[i]);
  }
  if(operadores[1]=="%")
  for (i = 1; i < numeros.length; i++){
    total = (resultat * parseFloat(numeros[i]))/100;
  }
  numero = total;
  document.getElementById("resultado").innerHTML = numero;
}

function reset() {
  document.getElementById("form").reset();
}
