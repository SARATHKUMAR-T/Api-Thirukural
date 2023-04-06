let d1 = document.createElement("div");
d1.className = "container";
d1.classList.add("main");

let head = document.createElement("h4");
head.setAttribute("id", "hv1");
head.innerHTML = "we have 1330 Poems For You❤️";

// jumbotron
let div2 = document.createElement("div");
div2.className = "div2";
div2.classList.add("container");
div2.innerHTML = `<div class="jumbotron ">
<h1 class="display-4">Thirukkural❤️ is considered to be the world's greatest work on ethics and morality.</h1>
<p class="lead">Written by the poetic saint Thiruvalluvar, it is the collection of 1330 two-lined poems, each of which shows the path to integrity, non-violence and knowledge.</p>
</div>`;
document.body.append(div2);

// Body Elements

let row = document.createElement("div");
row.className = "row";

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder","Enter Number")
input.setAttribute("id", "breed");

let button = document.createElement("button");
button.setAttribute("id", "dog");
button.classList.add("btn", "btn-success", "m1");
button.addEventListener("click", thiru);
button.innerHTML = "click here ";

d1.append(head, input, button, row);

document.body.append(d1);

// display Error
const errBlock = function (e1) {
  row.innerHTML = `<div class="col-md-6 c1">
  <div class=" card deck text-center text-black bg-light mb-3 d b1" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text">${e1}</p>
</div>
</div>
</div>`;
};

// 1.fetch from api
async function thiru() {
  try {
    let number = parseInt(input.value);
    let result = await fetch(
      `https://api-thirukkural.vercel.app/api?num=${number}`
    );
    let final = await result.json();
    display(final);
  } catch (error) {
    errBlock(error.message);
  }
}

// display
function display(array) {
  row.innerHTML = `
  <div class="card" style="width: 25rem;">
  <img src="https://api-thirukkural.web.app/res/thiruvalluvar.png" class="card-img-top" alt="Thiruvalluvar">
  <div class="card-body">
    <p class="card-text">${array.line1}<br>${array.line2}</p>
    <p class="card-text"><strong>Meaning</strong>:${array.tam_exp}</p>
    
  </div>
  </div>`;
}

