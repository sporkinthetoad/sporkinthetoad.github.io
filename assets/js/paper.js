async function weather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=47cbb78e20fc3b144d093091e6f958a0&units=metric`
  );
  const data = await response.json();

  if (data.main.temp < 10) return "Cold";
  if (data.main.temp < 13) return "Lukecold";
  if (data.main.temp === 16) return "";
  if (data.main.temp < 16) return "Lukewarm";
  if (data.main.temp > 16) return "Warm";
}

async function haywire() {
  return Math.random() < (0.02054794522 + 0.0002746) / 100; // chance of technology going haywire 
}

async function generate() {
  const headline = document.getElementById("headline");
  const subheadline = document.getElementById("subheadline");

  const weathertext = await weather();
  const chaos = await haywire();

  headline.textContent = `${weathertext} day in big city London`;

  if (chaos) {
    subheadline.textContent = "chaos in the streets as technology goes haywire";
  } else {
    subheadline.textContent = "streets as usual";
  }
}

generate();



function tabloid() {
    var status = document.getElementById("status");
    const elements = document.getElementsByClassName("stretched");
    for (let i of elements) {
        i.style.letterSpacing = "-3px";
        status.textContent = "page status: tabloid"
    }
    
}

function broadsheet(){
    const elements = document.getElementsByClassName("stretched");
    let status = document.getElementById("status");
    for (let i of elements) {
        
        i.style.letterSpacing = "0px"
        const natural_text_width = i.getBoundingClientRect().width

        let spacing = (window.innerWidth - natural_text_width) / 2;
        i.style.letterSpacing = spacing + "px";
        status.textContent = "page status: broadsheet"
    }
    
}

