function yes() {
    document.getElementById("userinput").focus();

}



var inputarray = [];


document.getElementById('userinput').onkeydown = function(z){
    var userinputjs = document.getElementById(`userinput`)
    userinputjs.addEventListener('userinput', console.log(userinput.value));

    if (z.keyCode >= 65 && z.keyCode <= 90 && z.keyCode != 8){
        

        inputarray.push(userinputjs.value)
        
        console.log(inputarray)

        // console.log(userinputjs)

    } else if (z.keyCode == 8) {
        inputarray.pop(``);
        console.log(inputarray)
    }
    // document.getElementById('userinput').value='';

 };