

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        if(ipt.value == ""){
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
})


document.getElementById('form-register').addEventListener('submit', (event)=>{
    event.preventDefault()
    // console.log("test");
    const useremail= document.getElementById('usermail').value

    const username=document.getElementById('username').value

    if(!useremail.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com')
        return
    }

    if(username.length < 1){
        alert('Name length must be more than 1 character')
        return
    }

    alert('Registration Success')
    window.location.href='/index.html'
})

// document.getElementById('register-button').addEventListener('click')

var errorName = document.getElementById('err-name');
var errorEmail = document.getElementById('err-email');
var errorPhone = document.getElementById('err-phone');
var errorMessage = document.getElementById('err-message');
var errorCheckbox = document.getElementById('err-checkbox');
var errorForm = document.getElementById('form-registration');

function validateName(){
    var username = document.getElementById('username').value;

    if(username.length <= 1){
        errorName.innerHTML = '*Name must be more than 1 character';
        return false;
    }
    errorName.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phonenumber = document.getElementById('phone').value;

    if(phonenumber.length != 10){
        errorPhone.innerHTML = '*Phone number must be 10 digits';
        return false;
    }
    if(!phonenumber.match(/^[0-9]{10}$/)){
        errorPhone.innerHTML = '*Please enter only digits';
        return false;
    }

    errorPhone.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var usermail = document.getElementById('usermail').value;

    if(!usermail.endsWith('gmail.com')){
        errorEmail.innerHTML = '*Email invalid';
        return false;
    }

    errorEmail.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateCheckbox(){

    // if(document.getElementById("phonecontact").checked){
    //     valid = true;
    // }
    // else if(document.getElementById("email").checked){
    //     valid = true;
    // }

    if(!document.getElementById("phonecontact").checked && !document.getElementById("email").checked){
        alert('Must checked 1')
        return;
    }
    // if(!valid){
    //     errorCheckbox.innerHTML = "You must select one option preferred contact";
    //     return false;
    // }

    // return true;
    alert('Registration Success')
    window.location.href='/index.html'
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        errorMessage.innerHTML = left + ' more characters required';
        return false;
    }

    errorMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateCheckbox()){
        errorForm.innerHTML = '*Please enter correct data';
        return false;
    }
}
