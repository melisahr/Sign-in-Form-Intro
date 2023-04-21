const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();

    var firstValue = firstName.value.trim();
    var lastValue = lastName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue= password.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(firstValue === ''){
        errorFunc(firstName, "First Name cannot be empty")
    }else{
        successFunc(firstName)
    }
    if(lastValue === ''){
        errorFunc(lastName, "Last Name cannot be empty")
    }else{
        successFunc(lastName)
    }
    if(emailValue === ''){
        errorFunc(email, "Email cannot be empty")
    } else if(!emailValue.match(pattern)){
        errorFunc(email, "Look like this is not an email")
    }
    else{
        successFunc(email)
    }
    if(passwordValue === ''){
        errorFunc(password, "Password cannot be empty")
    }
    else{
        successFunc(password)
    }
})
function errorFunc(req, message){
    const formControl = req.parentElement;
    const label =formControl.querySelector('label');
   label.innerText = message;
    req.className += 'error';
   label.className +='error-text';
   if(req !==email){
     req.value='';
   }else{
    req.style.color='red';
   }
}
function successFunc(req){
    req.className += 'success';
}
