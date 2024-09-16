// JavaScript hover effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener('mouseout', function() {
        button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        button.style.transform = "scale(1)";
    });
});

// Smooth background color transition on hover
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transition = "background-color 0.5s ease-in-out";
    });
});