let buttonElem = document.querySelector('.js-next');
let email = document.querySelector('.email');


function checkEmail() {
    let emailInput = email.value;

    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.match(emailRegex)) {
        document.querySelector('.error-icon').classList.remove('is-error')
        email.classList.remove('email-error');

        document.querySelector('.error-message').innerHTML = '';
    } else {
        document.querySelector('.error-icon').classList.add('is-error')
        email.classList.add('email-error')

        document.querySelector('.error-message').innerHTML = "Please provide a valid email";
    }
}



function checkStyles() {
    const width = window.innerWidth;

    let rightSideContainer = document.querySelector('.right-side-container');

    if (width <= 800) {

        rightSideContainer.innerHTML = '';

        document.querySelector('.container').innerHTML = `
            <a href="#">
                <img src="images/hero-mobile.jpg" class="hero-mobile-image" alt="">
            </a>
        `
    } else {
        document.querySelector('.container').innerHTML = ''

        rightSideContainer.innerHTML = `
        <a href="#">
            <img src="images/hero-desktop.jpg" class="hero-desktop-image" alt="">
        </a>
    `
    }
}

// Initial load when page is opened
checkStyles();

window.addEventListener('resize', () => {
    checkStyles();
})


email.addEventListener('keyup', () => {
    checkEmail();
})

document.body.addEventListener('keyup', (event) => {
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