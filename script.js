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
function subtract(a,b){
    return(a-b)
}
// multiply
function multiply(a,b) {
    return(a*b)
}
// divide
function divide(a,b) {
    if (a === 0 || b===0){
        return('ERROR ):<')
    }else{
        return(a/b)
    }    
}

// plugs in operator and variables to return out a total to the display
function operate(operator,a,b){
    var total = 0
    a = parseFloat(a)
    console.log(a)
    b = parseFloat(b)
    console.log(b)
    console.log(a/b)
    if (operator==='add'){
        total = add(a,b)
    }else if (operator ==='subtract'){
        total = subtract(a,b)
    }else if (operator === 'multiply'){
        total = multiply(a,b)
    }else if (operator == 'divide'){
        total= divide(a,b)
    }else{
        total = 'ERROR'
        console.log('ERROR, INCORRECT OPERATOR VALUE PASSED')
    }
    const display = document.querySelector("#displayNum")
    display.innerHTML = total
    numA = total.toString()
}

// intalize variables to be used in operations
var numA = ''
var numB = ''
var operation = ''

// this function sets up the numbered buttons so they show up on the display 
// and so the code will record the most recent number before an operator
function clickButton(numID,num){
    const  idSelector= document.querySelector("#" +numID)
    idSelector.addEventListener(('click'),function(){
        const display = document.querySelector("#displayNum")
        numA += num.toString()
        display.innerHTML = numA
        
    })
}
// sets up operator buttons so that they will record previous numbers,
// and initalize the opeartor variable
function clickOperator(operator){
    var operationSelector = document.querySelector("#" + operator)
    operationSelector.addEventListener(('click'),function(){
        operation = operator
        numB = numA
        numA = ''
        console.log(numA)
    })
}

//this runs the clickbutton once for each numbered button to initalize them 
numButtonIDs = ["zero","one","two","three","four","five","six","seven","eight","nine"]
for (var i=0; i<numButtonIDs.length; i++){
    console.log(i)
    console.log(numButtonIDs[i])
    clickButton(numButtonIDs[i],(i))
}
// same as above but for operator buttons
operatorButtonsIDs = ['add','subtract','multiply','divide']
for (var i = 0; i<operatorButtonsIDs.length;i++){
    clickOperator(operatorButtonsIDs[i])
}

// add button functionality for equals, uses the operate function to return a total
operationSelector = document.querySelector("#equals")
operationSelector.addEventListener(('click'),function(){
    operate(operation,numB,numA)
})

// add functionality for the AC (clear) button
operationSelector = document.querySelector("#AC")
operationSelector.addEventListener(('click'),function(){
    const display = document.querySelector("#displayNum")
    display.innerHTML = '0'
    numA = ''
    numB = ''
    operation = ''
})

// functionality for +/- button
operationSelector = document.querySelector("#plusMinus")
operationSelector.addEventListener(("click"),function(){
    console.log(typeof numA)
    if(numA.includes('-')){
        numA = numA.replace("-","")
    }else{
        numA = "-"+numA
    }
    const display = document.querySelector("#displayNum")
    display.innerHTML = numA
       
})
// functionality for % button
operationSelector = document.querySelector("#percent")
operationSelector.addEventListener(("click"),function(){
    numA = (parseFloat(numA)*.01).toString()
    const display = document.querySelector("#displayNum")
    display.innerHTML = numA
})