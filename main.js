const form = document.querySelector("form");
const email = document.querySelector(".email");
const errorMessage = document.getElementsByClassName("error-message")

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {

    const emailValue = email.value.trim();

    if (emailValue === "") {
        errorMessage.className = "error-message error";
        email.className = "form email error"
    } else if (!isItEmail(emailValue)) {
        errorMessage.className = "error-message error";
        email.className = "form email error"
    }
}

function isItEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};