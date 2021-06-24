// creating the container, heading, row and button

var divRow = createMyElement("div", "row", "row");
var divContainer = createMyElement("div", "container", "");
var h2 = createMyElement("h2", "text-center heading", "");
var btn = createMyElement("button", "btn btn-outline-danger", "btn");
btn.innerHTML = "Load more";
h2.innerHTML = "Random Programmer Jokes";
divContainer.append(btn, h2, divRow);
document.body.append(divContainer);

// fetchimg jokes
async function jokes() {
  try {
    const jokes = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/ten"
    ).then((res) => res.json());

    divRow.innerHTML = "";
    jokes.map((joke) => {
      // creating the card by function call
      setTimeout(function () {
        card(joke.setup, joke.punchline);
      }, 100);
    });

    //console.log(jokes);
  } catch (e) {
    console.log(e);
  }
}
jokes();

// creating the card

function card(setup, punchline) {
  let col = createMyElement("div", "col-lg-4 col-md-6");
  let card = createMyElement("div", "card mb-4 border-secoundary shadow");
  let cardbody = createMyElement("div", "card-body");
  let cardtext = createMyElement("p", "card-text");
  let cardtext2 = createMyElement("p", "card-text text2");
  cardtext.innerHTML = setup + " ? " + " ? ...";
  cardtext2.innerHTML = punchline;
  cardbody.append(cardtext, cardtext2);
  card.append(cardbody);
  col.append(card);
  document.getElementById("row").append(col);
}

// function for creacting the html element

function createMyElement(eleName, eleClass = "", eleId = "") {
  let ele = document.createElement(eleName);
  ele.setAttribute("class", eleClass);
  ele.id = eleId;
  return ele;
}

// on button click calling the jokes function

btn.addEventListener("click", jokes);
