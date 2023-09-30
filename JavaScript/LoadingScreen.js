window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide the loading screen after 0.75 seconds (750 milliseconds)
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 750);
});