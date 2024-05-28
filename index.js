const colorInput = document.getElementById("colorInput");
const selectBox = document.getElementById("selectBox");
const getColorBtn = document.getElementById("getColorBtn");

getColorBtn.addEventListener('click', function(){
    
    let selectBoxValue = selectBox.value
    selectBoxValue = selectBoxValue.toLowerCase()
    console.log(selectBoxValue)

    let colorInputValue = colorInput.value
    colorInputValue = colorInputValue.substring(1,7)
    console.log(colorInputValue)

    let apiUrl = `https://www.thecolorapi.com/scheme?hex=${colorInputValue}&mode=${selectBoxValue}&count=5`

    console.log(apiUrl)
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {

        document.getElementById("colorBlock1").style.backgroundColor = data.colors[0].hex.value
        document.getElementById("colorBlock2").style.backgroundColor = data.colors[1].hex.value
        document.getElementById("colorBlock3").style.backgroundColor = data.colors[2].hex.value
        document.getElementById("colorBlock4").style.backgroundColor = data.colors[3].hex.value
        document.getElementById("colorBlock5").style.backgroundColor = data.colors[4].hex.value

        document.getElementById("colorBlock1Hex").innerText = data.colors[0].hex.value
        document.getElementById("colorBlock2Hex").innerText = data.colors[1].hex.value
        document.getElementById("colorBlock3Hex").innerText = data.colors[2].hex.value
        document.getElementById("colorBlock4Hex").innerText = data.colors[3].hex.value
        document.getElementById("colorBlock5Hex").innerText = data.colors[4].hex.value

    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
});

