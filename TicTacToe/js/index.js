$(document).ready(function() {
  var user,
    computer,
    wait = false,
    one, two, three, four, five, six, seven, eight, nine;

  $(".options").slideDown();

  $("button").on("click", function() {

    $(".options").slideUp();

    user = $(this).html();

    if (user == "X") {
      computer = "O";
    } else {
      $("#5").html("X");
      computer = "X";
    }

  });

  $(".grid").on("click", function() {

    var pick = $(this).html();

    getCurrent();

    if ($(".options").is(":hidden") &&
      pick !== "X" &&
      pick !== "O" &&
      wait == false) {

      $(this).html(user);
      wait = true;
      setTimeout(computerTurn, 500);
    }

  });

  function computerTurn() {
    getCurrent();
    checkForTie();
    var gameOver = cpuWinAttempt();

    if (!gameOver) {
      
      if (five !== "X" && five !== "O") {
        $("#5").html(computer);
      }

      // Checks for top left
      else if (two == user && three == user &&
        one !== "X" && one !== "O") {
        console.log(user);
        $("#1").html(computer);
      } else if (four == user && seven == user &&
        one !== "X" && one !== "O") {
        console.log("hi");
        $("#1").html(computer);
      } else if (five == user && nine == user &&
        one !== "X" && one !== "O") {
        $("#1").html(computer);
      }

      // Checks for top mid
      else if (one == user && three == user &&
        two !== "X" && two !== "O") {
        $("#2").html(computer);
      } else if (five == user && eight == user &&
        two !== "X" && two !== "O") {
        $("#2").html(computer);
      }

      // Checks for top right
      else if (two == user && one == user &&
        three !== "X" && three !== "O") {
        $("#3").html(computer);
      } else if (six == user && nine == user &&
        three !== "X" && three !== "O") {
        $("#3").html(computer);
      } else if (five == user && seven == user &&
        three !== "X" && three !== "O") {
        $("#3").html(computer);
      }

      // Checks for mid left
      else if (five == user && six == user &&
        four !== "X" && four !== "O") {
        $("#4").html(computer);
      } else if (one == user && seven == user &&
        four !== "X" && four !== "O") {
        $("#4").html(computer);
      }

      // Checks for mid right
      else if (three == user && nine == user &&
        six !== "X" && six !== "O") {
        $("#6").html(computer);
      } else if (four == user && five == user &&
        six !== "X" && six !== "O") {
        $("#6").html(computer);
      }

      // Checks for bottom left
      else if (eight == user && nine == user &&
        seven !== "X" && seven !== "O") {
        $("#7").html(computer);
      } else if (one == user && four == user &&
        seven !== "X" && seven !== "O") {
        $("#7").html(computer);
      } else if (five == user && three == user &&
        seven !== "X" && seven !== "O") {
        $("#7").html(computer);
      }

      // Checks for bottom mid
      else if (two == user && five == user &&
        eight !== "X" && eight !== "O") {
        $("#8").html(computer);
      } else if (nine == user && seven == user &&
        eight !== "X" && eight !== "O") {
        $("#8").html(computer);
      }

      // Checks for winning strategy as X's by user
      else if (two == user && four == user && one !== user && one !== computer) {
        $("#1").html(computer);
      } else if (two == user && six == user && three !== user && three !== computer) {
        $("#3").html(computer);
      } else if (six == user && eight == user && nine !== user && nine !== computer) {
        $("#9").html(computer);
      } else if (eight == user && four == user && seven !== user && seven !== computer){
      $("#7").html(computer);
    }

      // Checks for bottom right
      else if (nine !== "X" && nine !== "O") {
        $("#9").html(computer);
      }

      // Computer makes move on first open space
      else {
        var done = false,
          i = 1;
        do {

          if ($("#" + i).html() !== "X" &&
            $("#" + i).html() !== "O") {

            $("#" + i).html(computer);
            done = true;
          }

          i++;
        } while (done == false)
      }

      wait = false;

    } else {
      setTimeout(reset, 3000);
      gameOver = false;
      wait = false;
    }

    getCurrent();
    checkForTie();
  }

  function getCurrent() {
    one = $("#1").html(),
      two = $("#2").html(),
      three = $("#3").html(),
      four = $("#4").html(),
      five = $("#5").html(),
      six = $("#6").html(),
      seven = $("#7").html(),
      eight = $("#8").html(),
      nine = $("#9").html();
  }

  function cpuWinAttempt() {

    // Top left horizontal win
    if (three == computer && two == computer &&
      one !== user && one !== computer) {
      $("#1").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".top").css("background", "#FF4040");
      return true;
    }
    // Top left vertical win
    else if (four == computer && seven == computer &&
      one !== user && one !== computer) {
      $("#1").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".left").css("background", "#FF4040");
      return true;
    }
    // Top left diagonal win
    else if (five == computer && nine == computer &&
      one !== user && one !== computer) {
      $("#1").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".diagL").css("background", "#FF4040");
      return true;
    }

    // Top mid horizontal win
    else if (three == computer && one == computer &&
      two !== user && two !== computer) {

      $("#2").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".top").css("background", "#FF4040");
      return true;
    }
    // Top mid vertical win
    else if (five == computer && eight == computer &&
      two !== user && two !== computer) {
      $("#2").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".vert").css("background", "#FF4040");
      return true;
    }

    // Top right horizontal win
    else if (one == computer && two == computer &&
      three !== user && three !== computer) {
      $("#3").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".top").css("background", "#FF4040");
      return true;
    }
    // Top right vertical win
    else if (six == computer && nine == computer &&
      three !== user && three !== computer) {
      $("#3").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".right").css("background", "#FF4040");
      return true;
    }
    // Top right diagonal win
    else if (five == computer && seven == computer &&
      three !== user && three !== computer) {
      $("#3").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".diagR").css("background", "#FF4040");
      return true;
    }

    // Mid left horizontal win
    else if (five == computer && six == computer &&
      four !== user && four !== computer) {
      $("#4").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".mid").css("background", "#FF4040");
      return true;
    }
    // Mid left vertical win
    else if (one == computer && seven == computer &&
      four !== user && four !== computer) {
      $("#4").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".left").css("background", "#FF4040");
      return true;
    }

    // Mid right horizontal win
    else if (four == computer && five == computer &&
      six !== user && six !== computer) {
      $("#6").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".mid").css("background", "#FF4040");
      return true;
    }
    // Mid right vertical win
    else if (three == computer && nine == computer &&
      six !== user && six !== computer) {
      $("#6").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".right").css("background", "#FF4040");
      return true;
    }

    // Bottom left horizontal win
    else if (eight == computer && nine == computer &&
      seven !== user && seven !== computer) {
      $("#7").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".bot").css("background", "#FF4040");
      return true;
    }
    // Bottom left vertical win
    else if (one == computer && four == computer &&
      seven !== user && seven !== computer) {
      $("#7").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".left").css("background", "#FF4040");
      return true;
    }
    // Bottom left diagonal win
    else if (three == computer && five == computer &&
      seven !== user && seven !== computer) {
      $("#7").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".diagR").css("background", "#FF4040");
      return true;
    }

    // Bottom mid horizontal win
    else if (seven == computer && nine == computer &&
      eight !== user && eight !== computer) {
      $("#8").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".bot").css("background", "#FF4040");
      return true;
    }
    // Bottom mid vertical win
    else if (two == computer && five == computer &&
      eight !== user && eight !== computer) {
      $("#8").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".vert").css("background", "#FF4040");
      return true;
    }

    // Bottom right diagonal win
    else if (one == computer && five == computer &&
            nine !== user && nine !== computer) {
      $("#9").html(computer);
      $("#winner").html("Computer (" + computer + "'s) wins!").show();
      $(".diagL").css("background", "#FF4040");
      return true;
    }

  }

  function reset() {
    $(".grid").html("");
    $(".grid").css("background", "#FFF");
    $(".options").slideDown();
    $("#winner").hide();
  }

  function checkForTie() {
    if ((one == "X" || one == "O") &&
      (two == "X" || two == "O") &&
      (three == "X" || three == "O") &&
      (four == "X" || four == "O") &&
      (five == "X" || five == "O") &&
      (six == "X" || six == "O") &&
      (seven == "X" || seven == "O") &&
      (eight == "X" || eight == "O") &&
      (nine == "X" || nine == "O")
    ) {

      $("#winner").html("It's a tie!").show();

      setTimeout(reset, 3000);
      gameOver = false;
      wait = false;
    }
  }

});