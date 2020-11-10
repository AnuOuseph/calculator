function btnclick(val)
{
    document.getElementById("user-screen").value+=val
    
}
function clearDisplay(){
    document.getElementById("user-screen").value=""
}
function equalclick(){
    var text=document.getElementById("user-screen").value
    var result=eval(text)
    document.getElementById('user-screen').value=result
}