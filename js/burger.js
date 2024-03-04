const menuIcon = document.querySelector('.icon-menu');
if (menuIcon) {
    const menuBody = document.querySelector('.body-menu');
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("_blocked");
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}