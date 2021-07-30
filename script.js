// functions to add

// add
// sub
// multiply
// divide

// operate(operator,a,b)

// display

//


function clickButton(numID,num){
    const  idSelector= document.querySelector("#" +numID)
    idSelector.addEventListener(('click'),function(){
        const display = document.querySelector("#displayNum")
        display.innerHTML = num.toString()
        numA = num
    })
}

numButtonIDs = ["one","two","three","four","five","six","seven","eight","nine"]
for(var i=0; i<numButtonIDs.length; i++){
    console.log(i)
    console.log(numButtonIDs[i])
    clickButton(numButtonIDs[i],(i+1))
}