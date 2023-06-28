const redirectToPreloader = sessionStorage.getItem("redirectToPreloader");

if (!redirectToPreloader) {
    sessionStorage.setItem("redirectToPreloader", true);

    setTimeout(() => {
        window.location.reload();
    }, 50);
} else {
    sessionStorage.removeItem("redirectToPreloader");

    setTimeout(() => {
        window.location.href = "#preloaderSection";
    }, 50);
}

document.body.classList.add('no-scroll'); // Apply the no-scroll class to the body

document.getElementById("musicButton").addEventListener("click", function () {
    document.getElementById("music").play();
    document.getElementById("preloaderSection").style.display = "none";
    document.body.classList.remove('no-scroll'); // Remove the no-scroll class from the body
});

document.addEventListener("touchstart", function () {
    var vid = document.getElementById("bgVideo");
    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
});