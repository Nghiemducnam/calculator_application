function add(){
    let a= parseInt(document.getElementById("import1").value);
    let b= parseInt(document.getElementById("import2").value);
    let c= a + b;
  alert('Result:' +c);
}
function sub(){
    let a= parseInt(document.getElementById("import1").value);
    let b= parseInt(document.getElementById("import2").value);
    let d= a - b;
    alert('Result:' +d);
}
function mul() {
    let a = parseInt(document.getElementById("import1").value);
    let b = parseInt(document.getElementById("import2").value);
    let e = a * b;
    alert('Result:' + e);
}
function divi() {
    let a = parseInt(document.getElementById("import1").value);
    let b = parseInt(document.getElementById("import2").value);
    let f = a / b;
    alert('Result:' + f);
}