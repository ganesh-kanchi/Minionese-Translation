
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var divOutput = document.querySelector("#div-output")



var url = "https://api.funtranslations.com/translate/minion.json"

btnTranslate.addEventListener("click", clickHandler);



function clickHandler(event) {
    console.log("clicked");
    var input = txtInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            divOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error has occured!"))
};

function constructURL(Input) {
    var encodedURI = encodeURI(Input);
    return `${url}?text=${encodedURI}`;
}