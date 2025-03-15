// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");

    // Music player controls
    const audioPlayer = document.querySelector("audio");
    const playButton = document.querySelector(".hero button");

    // Play music when button is clicked
    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = "Pause Music";
        } else {
            audioPlayer.pause();
            playButton.textContent = "Listen Now";
        }
    });

    // Auto update play button when music ends
    audioPlayer.addEventListener("ended", () => {
        playButton.textContent = "Listen Now";
    });
});
