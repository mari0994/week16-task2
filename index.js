const form = document.forms.form;
const submitButton = form.elements.submitButton;

const userName = form.elements.name;
userName.addEventListener('input', function(){
    const userNameErrorMessage = document.querySelector('.name-error');
    const userNameRegex = /^[a-zA-Z\s]*$/;

    if(!userNameRegex.test(userName.value)){
        userNameErrorMessage.textContent = 'Имя должно содержать только буквы и пробелы';
        userNameErrorMessage.style.color = 'red';
        //submitButton.disabled = true;
        //submitButton.setAttribute('disabled');
        //почему не работают верхние строчки?
    } else if (userName.value.length < 2){
        userNameErrorMessage.textContent = 'Слишком короткое имя';
        userNameErrorMessage.style.color = 'red';
        //submitButton.disabled = true;
    } else if(userName.value.length > 20){
        userNameErrorMessage.textContent = 'Слишком длинное имя';
        userNameErrorMessage.style.color = 'red';
        //submitButton.disabled = true;
    } else {
        userNameErrorMessage.style.display = 'none';
        //submitButton.disabled = false;
    }
}) //на практике не очень хорошо работает, тк сообщение почему-то не всегда появляется сразу, не всегда исчезает, если исправить ошибку, иногда появляется не то сообщение и также не появляется сообщение о том что слишком длинное имя, даже если ввести более 20 символов

const email = form.elements.email;
email.addEventListener('input', function(){
    const emailErrorMessage = document.querySelector('.email-error');
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(email.value)){
        emailErrorMessage.textContent = 'Неправильный формат email';
        emailErrorMessage.style.color = 'red';
    } else {
        emailErrorMessage.style.display = 'none';
    }
});

const password = form.elements.password;
password.addEventListener('input', function(
){
    const passwordError = document.querySelector('.password-error');
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;

    if(!passwordRegex.test(password.value)){
        passwordError.textContent = 'Неправильный формат email';
        passwordError.style.color = 'red';
    } else {
        passwordError.style.display = 'none';
    }
});

const passwordConfirm = form.elements.confirm_password;
passwordConfirm.addEventListener('input', function(){
    const passwordConfirmError = document.querySelector('.password-confirm-error');

    if(passwordConfirm.value != password.value){
        passwordConfirmError.textContent = 'Пароль не соответствует введенному выше';
        passwordConfirmError.style.color = 'red';
    } else {
        passwordConfirmError.style.display = 'none';
    }
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    const radioMale = document.getElementById('male');
    const radioFemale = document.getElementById('female');
    const radioError = document.querySelector('.radio-error');
    if(!radioMale.checked && !radioFemale.checked) {
        radioError.textContent = 'Хотя бы одна опция должна быть отмечена';
        radioError.style.color = 'red';
    } else {
        radioError.style.display = 'none';
    }

    const profession = form.elements.profession;
    const professionError = document.querySelector('.profession-error');

    if(profession.value = 'Выберите профессию'){
        professionError.textContent = 'Выберите одну из профессий'
        professionError.style.color = 'red';
    } else {
        professionError.style.display = 'none';
    }

    const consent = form.elements.consent;
    const consentError = document.querySelector('.consent-error');

    if(!consent.checked){
        consentError.textContent = 'Отметьте поле';
        consentError.style.color = 'red';
    } else {
        consentError.style.display = 'none';
    }

const age = form.elements.age;

console.log(userName.value);
console.log(email.value);
console.log(age.value);
if(radioFemale.checked){
    console.log('Женщина');
} else if(radioMale.checked){
    console.log('Мужчина');
}
console.log(profession.value);
console.log(password.value);
console.log(passwordConfirm.value);
form.reset();
})

