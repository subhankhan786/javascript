const submit = document.querySelector('#submit');
const wordCount = document.querySelector('#wordCount');
const output = document.querySelector('#output');


submit.addEventListener('click', function () {
    const count = parseInt(wordCount.value);
    output.textContent = generateText(count);
    styleOuput()
})

function generateText(wordCount) {
    const basePara = "lorem ipsum dolor sit amet, consectetur adipiscing";
    let generateText = "";

    for (let i = 0; i < wordCount; i++) {
        generateText += basePara + " ";
    }

    return generateText;
}

function styleOuput() {
    output.style.border = "4px solid black";

}
