const navbar = document.getElementById('navbar');
let scrolled = false;


window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

//const form = document.getElementById('form');
//const name = document.getElementById('name');
//const email = document.getElementById('email');
//const message = document.getElementById('message');

//function showError(input, message){
  //const formControl = input.parentElement;
  //formControl.className = 'form-control error';
  //const small = formControl.querySelector('small')
  //small.innerText = message;
//};

//function showSuccess(input, message) {
  //const formControl = input.parentElement;
  //formControl.className = 'form-control success';
//}

//form.addEventListener('submit', function(e){
  //if(name.value === '') {
    //showError(name, 'Enter your name')
  //} else {
    //showSuccess(name);
  //};

  //if(email.value === '') {
    //showError(email, 'Enter your email')
  //} else {
    //showSuccess(email);
  //};

 // if(message.value === '') {
    //showError(message, 'You cannnot send empty message!')
  //} else {
    //showSuccess(message);
  //};
  //e.preventDefault();
//});
