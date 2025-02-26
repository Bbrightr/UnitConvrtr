/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const massP = document.getElementById("massConvert")
const volumeP = document.getElementById("volumeConvert")
const lengthP = document.getElementById("lengthConvert")

let numberEntered = document.getElementById("converted-value").value



function convertbtn(){
    meetersToFeet = numberEntered.value * 3.281
    feetToMeters = numberEntered.value/3.281

    litersToGallons = numberEntered.value/0.264
    gallonsToLiters = numberEntered.value*3.785

    kilogramToPound = numberEntered.value*2.204
    poundToKilogram = numberEntered.value/2.204


    if (numberToCovert){

        lengthP.innerHTML = `<p> ${numberEntered.value} meters = ${meetersToFeet} feet | 
                            ${numberEntered.value} feet = ${feetToMeters} meters</p>`


        volumeP.innerHTML = `<p> ${numberEntered.value} liters = ${litersToGallons} gallons | 
                            ${numberEntered.value} gallons = ${gallonsToLiters} liters</p>`

        massP.innerHTML = `<p> ${numberEntered.value} kilos = ${kilogramToPound} pounds | 
                            ${numberEntered.value} pounds = ${poundToKilogram} kilos</p>`
    }
}
