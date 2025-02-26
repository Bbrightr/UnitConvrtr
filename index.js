/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const massP = document.getElementById("massConvert")
const volumeP = document.getElementById("volumeConvert")
const lengthP = document.getElementById("lengthConvert")

let numberEntered = document.getElementById("converted-value")

const metersToFeet = 3.281
const litersToGallons = 0.264
const kilogramToPound = 2.204

function convertbtn(){

    let inputValue = numberEntered.value

    lengthP.textContent = `${inputValue} meters = ${(inputValue / metersToFeet)} feet | 
                            ${inputValue} feet = ${(metersToFeet * inputValue)} meters`

    volumeP.textContent = `${inputValue} liters = ${(inputValue / litersToGallons)} gallons | 
                            ${inputValue} gallons = ${(litersToGallons * inputValue)} liters`;

    massP.textContent = `${inputValue} kilos = ${(kilogramToPound * inputValue)} pounds | 
                            ${inputValue} pounds = ${(inputValue / kilogramToPound)} kilos`

}
