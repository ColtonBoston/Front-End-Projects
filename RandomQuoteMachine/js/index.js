var formatQuote = "";
var rand = 0;
var lastQuote;
myScript = function() {
  var quotes = [
    ["If you're going through hell, keep going.", "Winston Churchill"],
    ["I am a 5-star man!", "Dennis Reynolds"],
    ["I'm not superstitious, but I am a little 'stitious'.", "Michael Scott"],
    ["Call to me and I will answer you and tell you great and unsearchable things you do not know.", "Jeremiah 33:3"],
    ["I never said most of the things I said.", "Yogi Berra"],
    ["I'm sorry, if you were right, I'd agree with you.", "Robin Williams"],
    ["Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead"],
    ["I can resist everything except temptation.", "Oscar Wilde"],
    ["I know one thing, and that is that I know nothing.", "Socrates"],
    ["I would like to die on mars. Just not on impact.", "Elon Musk"]
  ];
  while (rand == lastQuote) {
    rand = Math.floor(Math.random() * quotes.length);
  }
  console.log(rand);
  formatQuote = "\"" + quotes[rand][0] + "\" - " + quotes[rand][1];

  $("#quote").html("\"" + quotes[rand][0] + "\"" + "<p><i>" + quotes[rand][1] + "</i></p>");

  lastQuote = rand;
}

tweet = function() {
  if (formatQuote.length > 140) {
    alert("Quote too long!");
  } else {
    var twtLink = "http://www.twitter.com/home?status=" + encodeURIComponent(formatQuote);
    window.open(twtLink, "_blank");
  }
}

myScript();
/*switch (rand){
    case 1: 
      $("#quote").html("\"If you're going through hell, keep going.\" <p><i>Winston Churchill</i></p>");
      break;
    case 2:
      $("#quote").html("\"I am a 5-star man!\"<p><i>Dennis Reynolds</i></p>");
      break;
    case 3:
      $("#quote").html("\"I'm not superstitious, but I am a little 'stitious'.\"<p><i>Michael Scott</i></p>");
      break;
    case 4:
    $("#quote").html("\"I shall pass this way but once; any good that I can do or any kindness I can show to any human being; let me do it now. Let me not defer nor neglect it, for I shall not pass this way again.\"<p><i>Etienne de Grellet</i></p>");
      break;
  }
  console.log(rand);
}*/