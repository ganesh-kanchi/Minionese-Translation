
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var divOutput = document.querySelector("#div-output")

var url = "https://api.funtranslations.com/translate/minion.json"

btnTranslate.addEventListener("click", () => {
    var input = txtInput.value;
    var finalURL = constructURL(input);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            divOutput.innerText = json.contents.translated;
        })
        .catch((error) => alert("some error has occured!", error))
});

const constructURL = Input => {`${url}?text=${encodeURI(Input)}`};