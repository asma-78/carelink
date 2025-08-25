/*login*/
document.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;
  document.querySelector(".parallax-image").style.transform =
    "translateY(" + scrollPosition * 0.3 + "px)";
});

var button1 = document.querySelector(".account");

button1.addEventListener("click", addText);

function addText() {
  document.querySelector(".account-creation").innerHTML = `<p> Name: </p>
  <input class = "name" placeholder = "Enter your name"> </input>
   <p> Email</p>
   <input class = "email" placeholder = "Enter your email"> </input>
   <p> Password</p>
   <input id = "password" placeholder = "Enter your password"></input>
   <br>
   <br>
   <button class = "submit-button"> Click to submit </button>`;

  var button2 = document.querySelector(".submit-button");
  button2.addEventListener("click", confirmationMessage);
}

function confirmationMessage() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector("#password").value;

  document.querySelector(
    ".confirmation"
  ).innerHTML = `<p> Thank you for signing up, ${name}! You can Login now. <p>`;
  clearInput();
}

function clearInput() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector("#password").value = "";
}
