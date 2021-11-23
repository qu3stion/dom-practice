let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {

  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const title = function() {
    document.getElementById('main-title').textContent =
      "Hi! My name is Braun."
  };
  title();
  // Part 2
  const bodyColor = function() {
    document.body.style.backgroundColor = "#00ff00";
  }
  bodyColor()
  // Part 3
  document.querySelector('#favorite-things li:nth-last-child(1)').remove();


  // Part 4
  const changeFont = document.getElementsByClassName('special-title');

  for (let i = 0; i < changeFont.length; i++) {
    const cF = changeFont[i];
    cF.style.fontSize = '2rem'
  }

  // Part 5
  document.querySelector('#past-races li:nth-last-child(3)').remove();

  // Part 6
  const newRaceEl = document.createElement('li');
    newRaceEl.textContent = "The Bronx";
  const listOfRaces = document.getElementById('past-races');
    listOfRaces.appendChild(newRaceEl)

  // Part 7
  function newPost() {
    let post = document.createElement('div');
    let header = document.createElement('h1');
    let prgph = document.createElement('p');
    post.className = "blog-post purple";
    header.innerHTML = "The Bronx";
    prgph.innerHTML = "I DID DONUTS ON TREMONT AVE!";

    post.appendChild(header);
    post.appendChild(prgph);

    let mainClass = document.getElementsByClassName('main') [0];
    mainClass.appendChild(post);
  }
  newPost();
}
