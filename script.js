function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteDigit() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid calculation");
        clearDisplay();
    }
}
