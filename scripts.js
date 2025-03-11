document.getElementById('find-public-file').addEventListener('click', function() {
    const formTitle = document.getElementById('form-title');
    const submitButton = document.getElementById('Submit');
    const emailInput = document.getElementById('email');
    const findPublicFileBtn = document.getElementById('find-public-file');

    if (formTitle.innerText === 'Login or SignUp') {
        formTitle.innerText = 'Find a Public File';
        submitButton.innerText = 'Find';
        findPublicFileBtn.innerText = 'Login or SignUp';
        emailInput.placeholder = 'Enter the code';
    } else {
        formTitle.innerText = 'Login or SignUp';
        submitButton.innerText = 'Submit';
        findPublicFileBtn.innerText = 'Find a Public File';
        emailInput.placeholder = 'Enter your Email';
    }

    emailInput.value = '';
    emailInput.focus();
});

document.getElementById('Submit').addEventListener('click', function() {
    const formTitle = document.getElementById('form-title');
    const emailInput = document.getElementById('email');
    const inputValue = emailInput.value.trim();
    const submitButton = document.getElementById('Submit');

    // Check if input is empty
    if (inputValue === '') {
        alert('Input cannot be empty!');
        emailInput.focus();
        return;
    }

    // Check if email format is correct when asking for email
    if (formTitle.innerText === 'Login or SignUp' && !inputValue.includes('@')) {
        alert('Please enter a valid email address!');
        emailInput.focus();
        return;
    }

    if (formTitle.innerText === 'Find a Public File') {
        console.log(`Finding file with code: ${inputValue}`);
        window.location.href = 'public.html';
    } else if (formTitle.innerText === 'Login or SignUp') {
        console.log(`Requesting OTP for email: ${inputValue}`);
        alert(`OTP sent to ${inputValue}`);

        const userExists = false; // Placeholder for actual check

        if (userExists) {
            formTitle.innerText = 'Enter OTP';
            emailInput.placeholder = 'Enter OTP';
            emailInput.type = 'text';
            emailInput.value = '';
            submitButton.innerText = 'Verify';
        } else {
            formTitle.innerText = 'New User';
            emailInput.placeholder = 'Enter OTP';
            emailInput.type = 'text';
            emailInput.value = '';
            submitButton.innerText = 'Verify';
        }
    } else if (formTitle.innerText === 'Enter OTP') {
        console.log(`Verifying OTP: ${inputValue}`);
        alert(`OTP verified`);

        const userExists = false; // Placeholder for actual check

        if (userExists) {
            window.location.href = 'dashboard.html';
        } else {
            formTitle.innerText = 'Enter Your Full Name';
            emailInput.placeholder = 'Full Name';
            emailInput.type = 'text';
            emailInput.value = '';
            submitButton.innerText = 'Continue';
        }
    } else if (formTitle.innerText === 'Enter Your Full Name') {
        formTitle.innerText = 'Create Username';
        emailInput.placeholder = 'Username';
        emailInput.value = '';
        submitButton.innerText = 'Done';
    } else if (formTitle.innerText === 'Create Username') {
        window.location.href = 'dashboard.html';
    }
});

//---------------------------------------------------------

function typeWriterEffect(elementId, text, speed = 100, delays = {}) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear existing content

    function type() {
        if (i < text.length) {
            let char = text.charAt(i);

            // Handle line breaks
            if (char === "\n") {
                element.innerHTML += "<br>";
            } 
            // Handle bold text (detect **text**)
            else if (text.substring(i, i + 2) === "**") {
                let endIndex = text.indexOf("**", i + 2); // Find closing **
                if (endIndex !== -1) {
                    let boldText = text.substring(i + 2, endIndex);
                    element.innerHTML += `<strong>${boldText}</strong>`;
                    i = endIndex + 1; // Skip past **
                }
            } 
            else {
                element.innerHTML += char;
            }

            i++;

            // Check for custom delays
            let delay = speed;
            for (let word in delays) {
                if (text.substring(0, i).endsWith(word)) {
                    delay = delays[word]; // Apply custom delay
                    break;
                }
            }

            setTimeout(type, delay);
        }
    }

    type();
}

// Example Usage
document.addEventListener("DOMContentLoaded", function () {
    typeWriterEffect(
        "typewriter-text",
        "**Important Announcement**\n\nDear Users,\n\nWe regret to inform you that **due to financial constraints, we are unable to maintain our servers at this time**. As a result, our services have been **temporarily discontinued**.\n\n **Check Your Email!** If you had important files stored with us, we've sent you an email containing **metadata details** to help you retrieve them.\n\nWe truly appreciate your support and **hope to be back soon!** \n\nThank you for being a part of our journey. \n— **[Access-from-Anywhere]**",
        50, // Default typing speed
        {
            "temporarily discontinued.": 700,
            "Check Your Email!": 1000,
            "hope to be back soon!": 800
        }
    );
});



