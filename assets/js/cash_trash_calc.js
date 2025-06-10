var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let change = 0
let certificate = document.createElement("h2");
let img = document.createElement("img");
img.src = "../assets/images/cash-in-the-trash/bin.png";
let cash = document.createElement("img");
let footer = document.querySelector("footer");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function submit() {
    console.log(change)
    if (change > 0) {
      document.body.removeChild(certificate, img, cash);
    }
    let submit_value = slider.value;

    if (submit_value % 2 != 0) {
      submit_value -= 1;
      
    }

    submit_value /= 2

    if (submit_value > 0) {
      certificate.innerText = `Certified ${submit_value} Cash in the Trash`;
      document.body.insertBefore(certificate, footer);
      document.body.insertBefore(img, footer);
      change += 1
      
    }
  }

