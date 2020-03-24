let name = '';

function buttonClicked() {
  name = document.getElementById("name").value;
  document.getElementById("hello").innerHTML = `Hello ${name}!`;
}