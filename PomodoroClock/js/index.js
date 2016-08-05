breakDown = function() {
  var id = $("#breakLength");
  if (parseInt(id.html()) > 1) {
    id.html(parseInt(id.html()) - 1);
  }
}

breakUp = function() {
  var id = $("#breakLength");
  id.html(parseInt(id.html()) + 1);
}

sessionDown = function() {
  var id = $("#sessionLength"),
    arrTime = $("#time").html().split(":");;
  if (parseInt(id.html()) > 1) {
    id.html(parseInt(id.html()) - 1);
  }
  if ($("#timerTitle").html() == "SESSION") {
    $("#time").html(id.html() + ":" + arrTime[1]);
  }
}

sessionUp = function() {
  var id = $("#sessionLength"),
    arrTime = $("#time").html().split(":");
  arrTime[0] = parseInt(arrTime[0]) + 1;
  id.html(parseInt(id.html()) + 1);
  if ($("#timerTitle").html() == "SESSION") {
    $("#time").html(id.html() + ":" + arrTime[1]);
  }

}

timerClicked = function() {
  var id = $("#play"),
    arrTime = $("#time").html().split(":"),
    minutes = arrTime[0],
    seconds = arrTime[1];

  id.toggleClass('fa-play fa-pause');
  
  $(".upOrDown").toggleClass('inactive');
  
  /*
  $("#sessionUp").toggleClass('upOrDown inactive');
  $("#sessionDown").toggleClass('upOrDown inactive');
  
  $("#breakUp").toggleClass('upOrDown inactive');
  $("#breakDown").toggleClass('upOrDown inactive');
  */

  var timer;

  timer = setInterval(function() {

    if (id.hasClass('fa-play')) {
      clearTimeout(timer);
      return;
    }

    minutes = parseInt(minutes);

    if (minutes == 0 && seconds == 0) {
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
      var audio = new Audio(wav);
      audio.play();
      if ($("#timerTitle").html() == "SESSION"){
        $("#timerTitle").html("BREAK");
        minutes = parseInt($("#breakLength").html());
      } else {
        $("#timerTitle").html("SESSION");
        minutes = parseInt($("#sessionLength").html());
      }
    }

    if (seconds == "00") {
      seconds = 60;
      minutes--;
    } else {
      seconds = parseInt(seconds);
    }

    seconds--;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    $("#time").html(minutes + ":" + seconds);

  }, 1000);

}

reset = function() {
  $("#breakLength").html(5);
  $("#sessionLength").html(25);
  $("#time").html(25 + ":" + "00");
  $("#play").removeClass('fa-pause');
  $("#play").addClass('fa-play');
  $("#timerTitle").html('SESSION');
  
  $(".upOrDown").removeClass('inactive');
  
  /*
  $("#sessionUp").removeClass('inactive');
  $("#sessionUp").addClass('upOrDown');
  $("#sessionDown").removeClass('inactive');
  $("#sessionDown").addClass('upOrDown');
  
  $("#breakUp").removeClass('inactive');
  $("#breakUp").addClass('upOrDown');
  $("#breakDown").removeClass('inactive');
  $("#breakDown").addClass('upOrDown');
  */
}