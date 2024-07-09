let isImageLiked = false;

function onClickLikeButton() {
    let puppyImageElement = document.getElementById("puppyImage");
    let likeButtonElement = document.getElementById("likeButton");
    let likeIconElement = document.getElementById("likeIcon");

    if (isImageLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}