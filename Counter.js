document.querySelector("h1").style.color = "Black";

function increment() {
  var count = document.getElementById("counter").value;
  count++;
  document.getElementById("counter").value = count;
}
function decrement() {
  var count = document.getElementById("counter").value;

  if (count > 0) {
    count--;
  }
  document.getElementById("counter").value = count;
}
function reset() {
  count = 0;
  document.getElementById("counter").value = count;
}
