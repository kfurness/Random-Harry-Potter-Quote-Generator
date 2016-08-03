// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var randomNum;
var message = "";
var html = '';
var red;
var green;
var blue;
var rgbColor;

//function to get a random decimal color code that is not white
function color() {
  red = Math.floor(Math.random() * 240 );
  green = Math.floor(Math.random() * 240 );
  blue = Math.floor(Math.random() * 240 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgbColor;
}

//changes background color to random color when button is clicked
function backgroundChange(color) {
  document.body.style.background = rgbColor;
}

//chooses a random object in the Quotes array
function getRandomQuote (){
  var high = quotes.length;
  randomNum = Math.floor(Math.random() * high);
  return quotes[randomNum];
}

//prints the random quote, source, citation, date and tag onto page
function printQuote(message) {
  chosen = getRandomQuote();
  message += "<p class='quote'>" + chosen.quote + "</p>";
  message += "<p class='source'>" + chosen.source + "<span class='citation'>" + chosen.citation +
              "</span>" + "<span class='year'>" + chosen.year + "</span>" + "<span class='tag'>"
              + chosen.tag + "</span></p>";
  document.getElementById("quote-box").innerHTML = message;
}
