// functions to add

// add
function add (a,b){
    if (typeof a == String || typeof b == String){
        a = parseInt(a)
        b = parseInt(b)
    }
    return(a+b)
}
// sub
function sub (a,b){
    return(a-b)
}
// multiply
function sub(a,b) {
    return(a*b)
}
// divide
function sub(a,b) {
    return(a/b)
}

function operate(operator,a,b){
    var total = 0
    if (operator==='add'){
        total = add(a,b)
    }
    // (operator === 'add') ? total = add(a,b)
    // :(operator === 'subtract') ? total = subtract(a,b) 
    // :(operator === 'multiply') ? total = multiply(a,b)
    // :total = divide(a,b)

    const display = document.querySelector("#displayNum")
    display.innerHTML = total
}

var numA = ''
var numB = ''
var operation = ''
// this function sets up the numbered buttons so they show up on the display and so the code will record the most recent number before an operator
function clickButton(numID,num){
    const  idSelector= document.querySelector("#" +numID)
    idSelector.addEventListener(('click'),function(){
        const display = document.querySelector("#displayNum")
        numA += num.toString()
        display.innerHTML = numA
        
    })
}

//this runs the clickbutton once for each numbered button to initalize them 
numButtonIDs = ["one","two","three","four","five","six","seven","eight","nine"]
for(var i=0; i<numButtonIDs.length; i++){
    console.log(i)
    console.log(numButtonIDs[i])
    clickButton(numButtonIDs[i],(i+1))
}

var operationSelector = document.querySelector("#add")
operationSelector.addEventListener(('click'),function(){
    operation = 'add'
    numB = numA
    numA = ''
    console.log(numA)
})

operationSelector = document.querySelector("#equals")
operationSelector.addEventListener(('click'),function(){
    operate(operation,numB,numA)
})