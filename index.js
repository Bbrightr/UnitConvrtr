/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const massP = document.getElementById("massConvert")
const volumeP = document.getElementById("volumeConvert")
const lengthP = document.getElementById("lengthConvert")
const toggleDark = document.getElementById("toggle-dark")
const toggleLight = document.getElementById("toggle-light")

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

toggleDark.addEventListener("click", function(){
    bodyContainer.innerHTML=`
     <body id="bodyContainer">
        <div class="container dark-mode">
            <div class="topSide">
                <label class="switch">
                    <input type="checkbox" id="toggle-light">
                    <span class="slider"></span>
                </label>

                <h1>Metric/Imperial Unit Conversion</h1>
                <div><input class="converted" id="converted-value" type="number" placeholder="0" style="text-align: center;"></div>
                <!-- <div class="converted" id="converted-value">0</div> -->
                <button id="convert-btn" onclick="convertbtn()">Convert</button>
            </div>

            <div class="bottomSide">
                <div class="length-Con conv-dimen">
                    <h2>Length (Meter/Feet)</h2>
                    <p id="lengthConvert"> | </p>

                </div>
                <div class="vol-Con conv-dimen">
                    <h2>Volume (Liters/Gallons)</h2>
                    <p id="volumeConvert"> | </p>
                </div>
                <div class="mass-Con conv-dimen">
                    <h2>Mass (Kilograms/Pounds)</h2>
                    <p id="massConvert"> | </p>
                </div>
            </div>
        </div>
        
    </body>`
})

toggleLight.addEventListener("click", function(){
    bodyContainer.innerHTML=`
     <body id="bodyContainer">
        <div class="container">
            <div class="topSide">
                <label class="switch">
                    <input type="checkbox" id="toggle-dark">
                    <span class="slider"></span>
                </label>

                <h1>Metric/Imperial Unit Conversion</h1>
                <div><input class="converted" id="converted-value" type="number" placeholder="0" style="text-align: center;"></div>
                <!-- <div class="converted" id="converted-value">0</div> -->
                <button id="convert-btn" onclick="convertbtn()">Convert</button>
            </div>

            <div class="bottomSide">
                <div class="length-Con conv-dimen">
                    <h2>Length (Meter/Feet)</h2>
                    <p id="lengthConvert"> | </p>

                </div>
                <div class="vol-Con conv-dimen">
                    <h2>Volume (Liters/Gallons)</h2>
                    <p id="volumeConvert"> | </p>
                </div>
                <div class="mass-Con conv-dimen">
                    <h2>Mass (Kilograms/Pounds)</h2>
                    <p id="massConvert"> | </p>
                </div>
            </div>
        </div>
        
    </body>`
})