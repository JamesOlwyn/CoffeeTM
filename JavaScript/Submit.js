document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from actually submitting.
            alert('Thank you for Contacting us.');
            form.reset(); // Resets the form fields to their initial values.
        });
    });
});