    function validateInput() {
        var userInput = document.getElementById('userLogin').value;
        var emailPattern = /^\w+\.\w+@example\.com$/;
        var phonePattern = /^\+?\d{6,}$/;

	if (!userInput.includes('@')) {
        userInput += "@example.com";
        }

        if (emailPattern.test(userInput) || phonePattern.test(userInput)) {
            return true;
        } else {
            document.getElementById('userLogin').style.borderColor = 'red';
            document.getElementById('error-message').style.display = 'block';
            event.preventDefault();
            return false;
        }
    };
