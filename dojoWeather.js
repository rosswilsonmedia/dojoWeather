function loading(){
    alert('Loading weather report...');
}

function changeTemperature(el){
    var temps=document.querySelectorAll('.high>span, .low>span');
    if(el.value=="celsius"){
        for(var i=0; i<temps.length; i++){
            var value=temps[i].innerHTML;
            value=Math.round((value-32)*(5/9));
            temps[i].innerHTML=value;
        }
    } else {
        for(var i=0; i<temps.length; i++){
            var value=temps[i].innerHTML;
            value=Math.round((value*(9/5))+32);
            temps[i].innerHTML=value;
        }
    }
}

function closeCookiePolicy(el){
    el.parentNode.style.display="none";
}