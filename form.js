(function(){
      emailjs.init("user_XjfsN62KV6euHpJwvZ5ca");
})();

//Rest All the fields
function resetAll(arr){
  arr.forEach(function(el) {
    document.getElementById(el).value = "";
  })
}

function sendEmail() {
  // NEED PROPER VALIDATION!!!
  var subject = document.getElementById('contact-subject').value;
  var email = document.getElementById('contact-email').value;
  var tel = document.getElementById('contact-phone').value;
  var name = document.getElementById('contact-name').value;
  var message = document.getElementById('contact-message').value;

  emailjs.send("gmail","earthtoabigail_inquiries",{
    name: name,
    tel: tel,
    subject: subject,
    email: email,
    message: message
  })
  .then(
      function(response) {
        console.log("SUCCESS", response);
        resetAll(['contact-subject', 'contact-email', 'contact-phone', 'contact-name', 'contact-message']);

        alert("Your message has been sent.");
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  }
