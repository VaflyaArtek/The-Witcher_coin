//Music

document.body.classList.add('no-scroll'); // Apply the no-scroll class to the body

document.getElementById("musicButton").addEventListener("click", function () {
    document.getElementById("music").play();
    document.getElementById("preloaderSection").style.display = "none";
    document.body.classList.remove('no-scroll'); // Remove the no-scroll class from the body
});


document.addEventListener("DOMContentLoaded", function() {
    var vid = document.getElementById("bgVideo");
    vid.autoplay = true;
    vid.load();
});