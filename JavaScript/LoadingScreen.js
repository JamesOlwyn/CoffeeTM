window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide the loading screen after 0.5 seconds (500 milliseconds)
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 500);
});