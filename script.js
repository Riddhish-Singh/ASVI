document.addEventListener("DOMContentLoaded", function() {
    // Get the elements we need to work with
    const heroBanner = document.getElementById('hero-banner');
    const heroText = document.querySelector('.hero-banner-text');
    const stickyHeader = document.querySelector('.sticky-header');

    // Make sure all elements exist before we try to use them
    if (!heroBanner || !heroText || !stickyHeader) {
        console.error('One or more elements not found. Please check your HTML IDs and classes.');
        return;
    }

    // This function will be called every time the user scrolls
    function handleScroll() {
        // Calculate how far the user has scrolled from the top
        const scrollPosition = window.scrollY;

        // Get the total height of the hero banner
        const heroHeight = heroBanner.offsetHeight;

        // Calculate the opacity based on the scroll position.
        // We divide the scroll position by the hero banner height.
        // The more you scroll, the closer this value gets to 1.
        // Subtracting it from 1 makes the opacity go from 1 to 0.
        // We use Math.max to make sure the opacity doesn't go below 0.
        const opacity = 1 - Math.max(0, scrollPosition / heroHeight);

        // Apply the new opacity to the hero banner text
        heroText.style.opacity = opacity;

        // Show the sticky header after the user scrolls a certain distance (e.g., 200 pixels)
        // We check if the scroll position is greater than 200 and add the 'visible' class.
        // Otherwise, we remove the class to hide it.
        if (scrollPosition > 200) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
    }

    // Add the event listener to the window so we can track the scroll
    window.addEventListener('scroll', handleScroll);

    // Call the function once when the page loads to set the initial state
    handleScroll();
});