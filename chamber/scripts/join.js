document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.cf1');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Validate form fields
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const title = document.getElementById('title');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const businessName = document.getElementById('businessName');

        // Regular expression for title validation (7 or more alphabets, hyphens, and spaces)
        const titleRegex = /^[A-Za-z -]{7,}$/;

        // Validate each field
        let isValid = true;

        if (!firstName.value.trim()) {
            setError(firstName, 'Please input this field with the correct format');
            isValid = false;
        } else {
            clearError(firstName);
        }

        if (!lastName.value.trim()) {
            setError(lastName, 'Please input this field with the correct format');
            isValid = false;
        } else {
            clearError(lastName);
        }

        if (!title.value.trim() || !titleRegex.test(title.value)) {
            setError(title, 'Title/Position must be at least 7 characters long, containing only alphabets, hyphens, and spaces.');
            isValid = false;
        } else {
            clearError(title);
        }

        if (!email.value.trim()) {
            setError(email, 'Please input this field with the correct format');
            isValid = false;
        } else {
            clearError(email);
        }

        if (!phone.value.trim()) {
            setError(phone, 'Please input this field with the correct format');
            isValid = false;
        } else {
            clearError(phone);
        }

        if (!businessName.value.trim()) {
            setError(businessName, 'Please input this field with the correct format');
            isValid = false;
        } else {
            clearError(businessName);
        }

        if (isValid) {
            // If all validations pass, set the timestamp and submit the form
            document.getElementById('timestamp').value = new Date().toISOString();
            this.submit();
        }
    });

    // Function to set error message and style for a field
    function setError(field, message) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = message;

        const label = field.closest('label');
        label.appendChild(errorSpan);

        field.classList.add('error');
    }

    // Function to clear error message and style for a field
    function clearError(field) {
        const label = field.closest('label');
        const errorSpan = label.querySelector('.error-message');
        if (errorSpan) {
            label.removeChild(errorSpan);
        }

        field.classList.remove('error');
    }
});
