// profile-rotator.js
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profile-image');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');

    const images = ['images/profile1.jpg', 'images/profile2.jpg', 'images/profile3.jpg'];
    let currentIndex = 0;

    function updateImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        profileImage.src = images[currentIndex];
    }

    prevButton.addEventListener('click', () => updateImage(-1));
    nextButton.addEventListener('click', () => updateImage(1));

    // Optional: Auto-rotate every 5 seconds
    setInterval(() => updateImage(1), 5000);
});
