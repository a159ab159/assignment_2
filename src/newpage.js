

function ShowTime() {
    document.getElementById('showbox').innerHTML = new Date();
    setTimeout('ShowTime()', 1000);
}
var jsImg = new Array("img/pitt1.jpg","img/pitt2.png","img/pitt3.jpeg","img/pitt4.png");
var jsImg_len = jsImg.length;  

var i=2;                      

setInterval("sequentialImg()",2000);
function sequentialImg(){ 
    document.getElementById("pitt_photo").innerHTML  = "<img class='img-responsive'src='"+jsImg[i]+"' width=400 height=400>";        
        i++;
        if(i>=jsImg_len)  i=0;
}
