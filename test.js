function yes() {
    document.getElementById("userinput").focus();

}



function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    console.log(thing)
}





document.getElementById('userinput').onkeydown = function(z){
    if (z.keyCode >= 65 || z.keyCode <= 90){
        var userinputjs = document.getElementById(`userinput`)

        userinputjs.addEventListener('userinput', console.log(userinput.value));
        document.getElementById('userinput').value='';

        // console.log(userinputjs)

    }
 };

