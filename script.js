
// 1. Welcome Button Functionality

let welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function() {
    alert("Welcome to My Portfolio Website!");
});


// 2. Contact Form Functionality

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill all fields!";

    } else {

        formMessage.textContent =
        "Thank you, " + name + "! Your message is ready.";

        contactForm.reset();

    }

});
