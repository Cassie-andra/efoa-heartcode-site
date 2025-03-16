// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");

    let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
showSlides();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
  });     
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
          duration: 1000, // Animation speed in milliseconds
          once: true // Run only once per scroll
        });
      });
      
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

// Set the release date (YYYY, MM-1, DD, HH, MM, SS)
const releaseDate = new Date(2025, 5, 1, 12, 0, 0).getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "The new release is out now!";
  }
}, 1000);

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
