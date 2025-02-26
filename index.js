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
    me_Fee = (inputValue / metersToFeet).toFixed(3)
    fee_Me = (metersToFeet * inputValue).toFixed(3)
    lit_Gal = (inputValue / litersToGallons).toFixed(3)
    gal_lit = (litersToGallons * inputValue).toFixed(3)
    kil_Pnd = (kilogramToPound * inputValue).toFixed(3)
    pnd_Kil = (inputValue / kilogramToPound).toFixed(3)

    lengthP.textContent = `${inputValue} meters = ${me_Fee} feet | 
                            ${inputValue} feet = ${fee_Me} meters`

    volumeP.textContent = `${inputValue} liters = ${lit_Gal} gallons | 
                            ${inputValue} gallons = ${gal_lit} liters`;

    massP.textContent = `${inputValue} kilos = ${kil_Pnd} pounds | 
                            ${inputValue} pounds = ${pnd_Kil} kilos`

}
