function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function applyStyles() {
    var inputText = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    } else {
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none";
    }
}

function makeTextMoo() {
    var inputText = document.getElementById("inputText");
    var text = inputText.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            var lastWord = words[words.length - 1];
            if (lastWord.length > 0) {
                words[words.length - 1] = lastWord + "-Moo";
            }
        }
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");

    inputText.value = text;
}
