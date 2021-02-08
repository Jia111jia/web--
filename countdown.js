var lefttime=5000;
function go() {
    document.getElementById("w").innerText=(lefttime)/1000;
    lefttime = lefttime -1000;
    if(lefttime<0) {
        document.location.href="html/myorder.html"
    }
}
setInterval(go,1000);
