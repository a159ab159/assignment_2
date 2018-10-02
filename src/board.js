var messCol = document.getElementById("messColumn");
var btn = document.getElementById("btn");
var con = document.getElementById("content");
btn.onclick = function () {
    if (messCol.value.trim() == "") {
        alert("the content cannot be empty");
        return;
    }
    var messDiv = document.createElement("div");
    messDiv.setAttribute("style", "width:450px;height:30px;border:2px dotted #808080;margin-bottom:5px;");
    {
        
        var messCon = document.createElement("div");
        messCon.setAttribute("style", "float:left;width:350px;height=30px;line-height:30px;overflow:auto;");
        var del = document.createElement("a");
        del.setAttribute("style", "float:left;width:50px;height:30px;line-height:30px;");
        del.setAttribute("href", "javascript:;");
        del.innerHTML = "delete";
        messDiv.appendChild(messCon);
        messDiv.appendChild(del);
        messCon.innerHTML = messCol.value;
        del.onclick = function () {
            con.removeChild(this.parentNode);   
        }
    }
    con.appendChild(messDiv);
    messCol.value = "";   
}