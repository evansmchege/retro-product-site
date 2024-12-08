document.getElementById('feedback-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let rating = document.getElementById('rating').value;
    let comments = document.getElementById('comments').value.trim();

    if (rating === "" || comments === "") {
        alert("Please fill in both the rating and comments fields.");
        return;
    }

    let reviewSection = document.getElementById('user-reviews');
    let review = document.createElement('div');
    review.classList.add('review');
    let reviewTitle = document.createElement('h4');
    reviewTitle.textContent = `Rating: ${rating} Stars`;
    review.appendChild(reviewTitle);
    let reviewContent = document.createElement('p');
    reviewContent.textContent = comments;
    review.appendChild(reviewContent);
    reviewSection.appendChild(review);

    document.getElementById('feedback-form').reset();
    alert("Thank you for your feedback!");
});

document.getElementById('support-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    document.getElementById('support-form').reset();
    alert("Thank you for contacting us! We'll get back to you shortly.");
});

let currentPage = window.location.pathname.split('/').pop();
let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', function () {
            const emailValue = emailInput.value;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailPattern.test(emailValue)) {
                emailInput.setCustomValidity("Please enter a valid email address.");
            } else {
                emailInput.setCustomValidity("");
            }
        });
    }

    const ratingSelect = document.getElementById('rating');
    if (ratingSelect) {
        ratingSelect.addEventListener('change', function () {
            if (ratingSelect.value === "") {
                alert("Please select a rating.");
            }
        });
    }
});
