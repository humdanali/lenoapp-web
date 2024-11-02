document.addEventListener("DOMContentLoaded", function () {
    // This code is for Mobile Menu
    const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });


    // This code is for Video Modal.
    const modal = document.getElementById("videoModal");
    const videoButton = document.querySelector(".preview__video-button");
    const closeButton = document.querySelector(".modal__close-button");
    const videoPlayer = document.getElementById("videoPlayer");


    videoButton.addEventListener("click", function () {
        // This code is for displaying modal when user clicked on play button.
        modal.style.display = "block";
        // This code is for modal video
        videoPlayer.src = "https://www.youtube.com/embed/lQToTWKwtuw?si=FLCJIgAZysa9p8eJ";
        // This code is for close the modal
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
            videoPlayer.src = "";
        })
    });
})

//This code is for blur effect on navigation bar when scrolling down from top to bottom.
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0){
        navbar.classList.add("navbar--scroll");
    } else {
        navbar.classList.remove("navbar--scroll");
    }
});


