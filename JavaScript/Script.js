const socialMedia = document.querySelector(".jsClick");
const footer = document.querySelector(".footer")

function toggleSocial() {
    if(footer.style.display = "none") {
        footer.style.display = "flex";
    }else if(footer.style.display = "flex") {
        footer.style.display = "none";
    }
}

socialMedia.addEventListener('click', toggleSocial);