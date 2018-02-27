/*

function plusz() {
    var a1, a2;
    a1 = document.getElementById('n1').value;
    a1 = parseInt(a1);
    
    a2 = document.getElementById('n2').value;
    a2 = parseInt(a2); 
    
    result= a1 + a2;
    
    document.getElementById('rez').innerHTML = result;
    
}

function minus() {
    var a1, a2;
    a1 = document.getElementById('n1').value;
    a1 = parseInt(a1);
    
    a2 = document.getElementById('n2').value;
    a2 = parseInt(a2); 
    
    result= a1 - a2;
    
    document.getElementById('rez').innerHTML = result;
    
}

function deli() {
     var a1, a2;
    a1 = document.getElementById('n1').value;
    a1 = parseInt(a1);
    
    a2 = document.getElementById('n2').value;
    a2 = parseInt(a2); 
    
    result= a1 / a2;
    
    document.getElementById('rez').innerHTML = result;
}

function mnoj(){
     var a1, a2;
    a1 = document.getElementById('n1').value;
    a1 = parseInt(a1);
    
    a2 = document.getElementById('n2').value;
    a2 = parseInt(a2); 
    
    result= a1 * a2;
    
    document.getElementById('rez').innerHTML = result;
}


*/


document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
   var poloska = document.getElementById("polosa");
    left = left - 128;
    polosa.style.left = left +'px';
}



document.getElementById('slider-left').onclick = sliderMove;

function sliderMove(){
    var poloska = document.getElementById("polosa");
    left= left - 128;
    polosa.style.left = left + 'px';
}