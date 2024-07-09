let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let defaultImageWidth = 200;
let maxImageWidth = 300;
let minImageWidth = 100;

let maxWidthWarningMessage = "Too big. Decrease the size of the Image";
let minWidthWarningMessage = "can't visible. Increase the size of the Image";
imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function onIncrement() {
    if (defaultImageWidth >= maxImageWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedImageWidth = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;

    }
}

function onDecrement() {
    if (defaultImageWidth <= minImageWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImageWidth = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }



}