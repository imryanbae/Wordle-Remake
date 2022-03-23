function yes() {
    document.getElementById("userinput").focus();

}


var inputarray = [];
// var userinputjs;



// document.getElementById('userinput').onkeydown = function(z){

    


//     if (z.keyCode >= 65 && z.keyCode <= 90){
//         userinputjs = document.getElementById(`userinput`).value

//         inputarray.push(userinputjs)

//         console.log(inputarray)


//         // console.log(userinputjs)

//     } else if (z.keyCode == 8) {
//         inputarray.pop(``);
//         console.log(inputarray)
//     }
//     document.getElementById('userinput').value='';


//     // document.getElementById('userinput').value='';

//  };

var key;
var finalword
var counterthing = 0;
document.getElementById(`userinput`).onkeyup = function(z) {


    if (z.keyCode >= 65 && z.keyCode <= 90) {
        if (inputarray.length > 5) {
            inputarray.pop()
        } else if (inputarray.length < 5) {
            key = document.getElementById("userinput").value

            inputarray.push(key)
        
            console.log(inputarray)
            document.getElementById(`userinput`).value = ``;
        }


        
    }  else (
        document.getElementById(`userinput`).value = ``

    ) 
    if (z.keyCode == 8) {
        inputarray.pop(``);
        console.log(inputarray)
    } 

    if (inputarray.length == 5 && z.keyCode == 13) {
        finalword = inputarray.join(``)
        console.log(finalword)
        inputarray = []
        counterword++;
    }

    

}


