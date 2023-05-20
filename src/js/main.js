let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email');

let errorHolderEmail = document.querySelector(".error-text-email");

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function (event) {
    let emailVal = inputEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }


    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        errorHolderEmail.insertAdjacentHTML("beforeend", "Incorrect");
        return false;
    } else {
        inputEmail.classList.remove('error');
    }
}

function closeForm() {
  $('.popUp__bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm').on('click', function(event) {
    event.preventDefault();
    $('html').css('overflow', 'hidden');
    $('.popUp__bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.popUp__bg').on('click', function(event) {
    if ($(event.target).is('#btnCloseForm') || $(event.target).is('.popUp__bg')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});

let frameForm = document.querySelector(".popUp-form-container-2");

function closeForm() {
  $('.popUp__bg-2').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm-2').on('click', function(event) {
    event.preventDefault();
    $('html').css('overflow', 'hidden');
    $('.popUp__bg-2').addClass('is-visible');
    frameForm.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/4eIDBV4Mpek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });
  
    //close popup when clicking x or off popup
  $('.popUp__bg-2').on('click', function(event) {
    if ($(event.target).is('#btnCloseForm-2') || $(event.target).is('.popUp__bg-2')) {
      event.preventDefault();
      let iframe = document.querySelector("iframe");
      $(this).removeClass('is-visible');
      setTimeout(() => {  iframe.remove(); }, 200);
      
    }
  });
});














