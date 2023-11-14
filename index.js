let buttonElem = document.querySelector('.js-next');
let email = document.querySelector('.email');


function checkEmail() {
    let emailInput = email.value;

    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.match(emailRegex)) {
        document.querySelector('.error-icon').classList.remove('is-error')
        email.classList.remove('email-error');

        document.querySelector('.error-message').innerHTML = '';


        // emailInput = 's';
    } else {
        document.querySelector('.error-icon').classList.add('is-error')
        email.classList.add('email-error')

        document.querySelector('.error-message').innerHTML = "Please provide a valid email";
        // alert("No")
    }
}


email.addEventListener('keypress', () => {
    checkEmail();
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === "Backspace") {
        checkEmail();
    }
})

buttonElem.addEventListener('click', () => {
    checkEmail();

    let emailInput = email.value;

    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.match(emailRegex)) {

        email.value = ''
        alert("Thank you for joining us, fellow shopper! We'll keep you updated on our new fashion store and exclusive launch deals.")
            
    }
})