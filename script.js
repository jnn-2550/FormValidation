
const form = document.forms['myForm'];
const email = form['email'];
const password = form['password']; 
const userName = form['userName'];
let errors = document.querySelectorAll(".error");
//stop form from sending data until you validate
form.addEventListener('submit', submitFormData);
function submitFormData(e){
 e.preventDefault();
  //hides all the error messages on every submit 
 errors.forEach(error => {
  error.classList.add("hide");
 });
  let hasError = false;

  function showError(input, message){
const span = input.nextElementSibling;
//find the span right after the input
span.textContent = message;
span.classList.remove("hide");
//makes error visible
hasError = true;
input.focus();//moves the cursor to the wrong input
  }
  //Validate email
  // let validEmails = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.+[a-zA-Z0-9._-]+)/g;
  let validateEmails = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!validateEmails.test(email.value)){
     showError(email, "please enter a valid email address");//invald email
   }

   //Validate password
   const passRegex = /^[a-zA-Z0-9]{3,8}$/;
   if(!passRegex.test(password.value)){showError(password, "password must be 3-8 Characters long and contains only letters and numbers");
   }

   //validate username(not empty)
   if(userName.value.trim() === " ") {
    showError(userName,"Username cannot be empty");
}
   
   //if no errors build object and submit
   if(!hasError){
    const data = {
      email: email.value,
      password: password.value,
      userName: userName.value
    };  
    console.log("submitting:", data);
    alert("Form submitted successfully")
    // form.submit();
   }
}
