let billAmountElement = document.getElementById("billAmount");
let perecentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMsgElement = document.getElementById("errorMessage");

// let randomNumber = Math.ceil(Math.random() * 100);

function calculateTip() {
    let billAmountInput = (billAmountElement.value);
    let percentageTipInput = (perecentageTipElement.value);

    if (billAmountInput === "") {
        errorMsgElement.textContent = "Please Enter a Valid Input.";
    } else if (percentageTipInput === "") {
        errorMsgElement.textContent = "Please Enter a Valid Input.";
    } else {
        errorMsgElement.textContent = "";
        let calulateTipAmount = (((percentageTipInput) / 100) * (billAmountInput));
        let total = parseInt(billAmountInput) + parseInt(calulateTipAmount);
        tipAmountElement.value = calulateTipAmount;
        totalAmountElement.value = total;
    }
}