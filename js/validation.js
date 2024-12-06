document.addEventListener('DOMContentLoaded', function () {
    fetch('https://run.mocky.io/v3/f8debdfe-9d64-43d0-ab36-0ed1e12cb56c')
        .then(response => response.json())
        .then(data => {
            populateDropdown('city', data.cities);
            populateDropdown('course', data.courses);
        });

    function populateDropdown(id, items) {
        const dropdown = document.getElementById(id);
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            dropdown.appendChild(option);
        });
    }

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show');
    }

    document.getElementById('closeAd').addEventListener('click', function () {
        document.getElementById('ad').style.display = 'none';
    });

    document.getElementById('appointmentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => {
            error.style.visibility = 'hidden';
        });

        const phoneField = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const turkishPhoneRegex = /^(?:\+90|0)?5\d{2} \d{3} \d{2} \d{2}$/;

        if (!turkishPhoneRegex.test(phoneField.value)) {
            phoneError.style.visibility = 'visible';
            phoneError.textContent = 'Please enter a valid Turkish number.';
            valid = false;
        }

        const emailField = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.style.visibility = 'visible';
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        const nameField = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameField.value.trim() === '') {
            nameError.style.visibility = 'visible';
            nameError.textContent = 'Name and surname fields cannot be empty.';
            valid = false;
        }

        const cityField = document.getElementById('city');
        const cityError = document.getElementById('cityError');
        if (cityField.value === '') {
            cityError.style.visibility = 'visible';
            cityError.textContent = 'Please select a city.';
            valid = false;
        }

        const courseField = document.getElementById('course');
        const courseError = document.getElementById('courseError');
        if (courseField.value === '') {
            courseError.style.visibility = 'visible';
            courseError.textContent = 'Please select a course type.';
            valid = false;
        }
        const termsField = document.getElementById('terms');
        const termsError = document.getElementById('termsError');
        if (!termsField.checked) {
            termsError.style.visibility = 'visible';
            termsError.textContent = 'You must accept the terms of participation.';
            valid = false;
        }

        if (valid) {
            window.location.href = 'thank-you.html';
        }
    });

});
