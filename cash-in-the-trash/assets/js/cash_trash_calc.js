var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let change = 0
let certificate = document.createElement("h2");
let img = document.createElement("img");
img.src = "assets/images/bin.png";
let footer = document.querySelector("footer");

output.innerHTML = slider.value;

if (slider.value === 0) {
  slider.value = 1;
}

slider.oninput = function() {
  output.innerHTML = this.value;
}

function submit() {
    if (change === 1) {
      document.body.removeChild(certificate);
      document.body.removeChild(img)
      change -= 1
    }
    let submit_value = slider.value;

    if (submit_value % 2 != 0) {
        submit_value -= 1;
    }

    submit_value /= 2

    certificate.innerText = `Certified ${submit_value} Cash in the Trash`;
    document.body.insertBefore(certificate, footer);
    document.body.insertBefore(img, footer);
    change += 1
  }
