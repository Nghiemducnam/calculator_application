function a(){
    let a= parseInt(document.getElementById("import1").value);
    return a
}
function b(){
    let b= parseInt(document.getElementById("import2").value);
    return b
}
function add(){
    let add= a()+b();
    alert("Result: " +add)
}
function sub(){
    let sub= a()-b();
    alert("result:" +sub )
}
function mul(){
    let mul=a()*b();
    alert("result: " +mul)
}
function divi(){
    let divi= a()/b();
    alert("result: " +divi)
}