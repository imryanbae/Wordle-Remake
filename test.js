function yes() {
    document.getElementById("userinput").focus();

}



function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    console.log(thing)
}




 function keylog() {
    document.getElementById(`userinput`).onkeydown = function(a) {
        var av = a || event;
        if (av.keyCode == 13) {
            userword()
        }
    }
}