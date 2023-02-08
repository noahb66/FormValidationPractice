// function to make sure no values are empty
// function to test email
// function to test password
// function to test phone number
// call all functions in validate form function
const form = document.getElementById('userForm');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const userName = document.getElementById('uname');
const email = document.getElementById('customerEmail');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phoneNum');



form.addEventListener('submit', e => {
   e.preventDefault();
   validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = userName.value.trim();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    // validating username
    if(usernameValue === '')
        setError(userName, 'Username is required');
    else
        setSuccess(userName);

    // validating first name
    if(firstNameValue === '')
        setError(firstName, 'first name is required');
    else
        setSuccess(firstName);

    // validating last name
    if(lastNameValue === '')
        setError(lastName, 'Last name is required');
    else
        setSuccess(lastName);

    // validating password
    if(passwordValue === '')
        setError(password, 'Password required');
    else if(passwordValue.length < 8) {
        setError(password, 'password must be at least 8 characters');
    }
    else if(passwordValue !== password2Value) {
        setError(password, 'Passwords must both match');
        setError(password2, 'Passwords must both match');
    }
    else {
        setSuccess(password);
        setSuccess(password2);
    }

    // validating email
    if(emailValue === '')
        setError(email, 'Must enter an email');
    else if(!validateEmail(emailValue))
        setError(email, 'Please provide a valid email address');
    else
        setSuccess(email);

    // validating phone number
    if(phoneValue === '')
        setError(phone, 'Must enter a valid phone number');
    else if(!validatePhone(phoneValue))
        setError(phone, 'Please provide a valid phone number');
    else
        setSuccess(phone);

}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = phone => {
    console.log('validating phone');
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(String(phone).toLowerCase());

}