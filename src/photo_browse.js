var jsImg = new Array("img/01.jpg","img/02.jpg","img/03.jpg");
var jsImg_len = jsImg.length;  

var i=2;                      

setInterval("sequentialImg()",2000);
function sequentialImg(){ 
    document.getElementById("my_div").innerHTML  = "<img class='img-responsive'src='"+jsImg[i]+"' width=400 height=400>";        
        i++;
        if(i>=jsImg_len)  i=0;
}