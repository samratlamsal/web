// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Activate the navigation link when clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered in the form
    var name = encodeURIComponent(document.getElementById('name').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    // Set the custom subject ("Message for You")
    var subject = encodeURIComponent("Message for You");

    // Create the mailto link with subject and body
    var mailtoLink = "mailto:samratlamsa2@gmail.com?subject=" + subject + "&body=Name%3A%20" + name + "%0A%0AMessage%3A%20" + message;

    // Redirect to the mailto link (this will open the user's email client)
    window.location.href = mailtoLink;
});
