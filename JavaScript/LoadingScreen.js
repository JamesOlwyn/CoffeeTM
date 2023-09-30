window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide the loading screen after 2 seconds (2000 milliseconds)
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 2000);
});