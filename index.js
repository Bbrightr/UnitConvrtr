/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const massP = document.getElementById("massConvert")
const volumeP = document.getElementById("volumeConvert")
const lengthP = document.getElementById("lengthConvert")
const toggleDark = document.getElementById("dark-mode-btn")
const darkBackground = document.getElementById("darkBC")
const convertedBackground = document.getElementsByClassName("conv-dimen")
const switchToLightMode = document.getElementsByClassName("switchBtn")
const switchToDarkMode = document.getElementById("light-mode-btn")

// const toggleLight = document.getElementById("toggle-light")

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


// const heading = convertedBackground[0].querySelector("h2");
// const paragraph = convertedBackground.querySelector("p");


toggleDark.addEventListener("click", function(){


    darkBackground.style.backgroundColor= "#1F2937"
    convertedBackground[0].style.backgroundColor = "#273549"
    convertedBackground[0].style.boxShadow = "none"
    convertedBackground[0].style.border = "none"
    convertedBackground[1].style.backgroundColor = "#273549"
    convertedBackground[1].style.boxShadow = "none"
    convertedBackground[1].style.border = "none"
    convertedBackground[2].style.backgroundColor = "#273549"
    convertedBackground[2].style.boxShadow = "none"
    convertedBackground[2].style.border = "none"

    convertedBackground[0].querySelectorAll("p").forEach(p => {
    p.style.color = "#B295FF";
    })
    convertedBackground[1].querySelectorAll("p").forEach(p => {
        p.style.color = "#B295FF";
    })
    convertedBackground[2].querySelectorAll("p").forEach(p => {
        p.style.color = "#B295FF";
    })

    convertedBackground[0].querySelectorAll("h2").forEach(h2 => {
        h2.style.color = "#B295FF";
    })
    convertedBackground[1].querySelectorAll("h2").forEach(h2 => {
        h2.style.color = "#B295FF";
    })
    convertedBackground[2].querySelectorAll("h2").forEach(h2 => {
        h2.style.color = "#B295FF";
    })

    switchToLightMode.innerHTML = `
        <button class="switchBtn" id="dark-mode-btn">
        Light Mode
        </button>
    `;
    
})



switchToDarkMode.addEventListener("click", function(){

})