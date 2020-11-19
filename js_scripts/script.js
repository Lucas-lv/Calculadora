function Funcio() {
  window.location.assign("html/calculadora.html");
}

function Funcio1() {
  window.location.assign("html/calculadoraCient.html");
}

function info(){

  var modDate = new Date(document.lastModified)
  var modYear = modDate.getYear()
  if(modYear<1000) modYear+=1900
  var txt = "";

  txt += "Nombre del código del navegador: " + navigator.appCodeName + ",   ";
  txt += "Nombre del navegador: " + navigator.appName + ",   ";
  txt += "Versión del navegador: " + navigator.appVersion + ",   ";
  txt += "Cookies habilitadas: " + navigator.cookieEnabled + ",   ";
  txt += "Idioma del navegador: " + navigator.language + ",   ";
  txt += "Navegador Online: " + navigator.onLine + ",   ";
  txt += "Plataforma: " + navigator.platform + ",   ";
  txt += "Encabezado de agente de usuario: " + navigator.userAgent + ",   ";
  txt += "Última modificación del CV: " + modDate.getDate() + "/" + (modDate.getMonth()+1) + "/" + (modYear+"");

  alert(txt);

}
