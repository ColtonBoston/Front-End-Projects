$(document).ready(function() {

  var cpuArray = [],
    userArray = [],
    timeouts = [],
    wait = true,
    started = false,
    isOn = false,
    isStrict = false,
    i = 0,
    count = 1;

  function computerTurn() {

    // The computer takes its turn if the game is turned on
    if (isOn) {
      
      // Check for player win
      if (count == cpuArray.length + 1) {
        
        var interval = 350; // Interval for flashing win text
        
        $('#counter').html('Win!');
        
        clearTimeout(timeouts);
        
        timeouts.push(setTimeout(function() {
          $('#counter').html('&nbsp');
        }, interval * 1));

        timeouts.push(setTimeout(function() {
          $('#counter').html('Win!');
        }, interval * 2));

        timeouts.push(setTimeout(function() {
          $('#counter').html('&nbsp');
        }, interval * 3));

        timeouts.push(setTimeout(function() {
          $('#counter').html('Win!');
          $('.green-btn').toggleClass('transition-green');
          $('.red-btn').toggleClass('transition-red');
          $('.blue-btn').toggleClass('transition-blue');
          $('.yellow-btn').toggleClass('transition-yellow');
        }, interval * 4));

        timeouts.push(setTimeout(function() {
          $('#counter').html('&nbsp');
          $('.green-btn').toggleClass('transition-green');
          $('.red-btn').toggleClass('transition-red');
          $('.blue-btn').toggleClass('transition-blue');
          $('.yellow-btn').toggleClass('transition-yellow');
        }, interval * 5));

        // Resets the game after a win
        cpuReset();
        count = 1;
        i = 0;

        timeouts.push(setTimeout(computerTurn, interval * 5 + 500));
        
      } else {
        
        // Plays the next sound for the computer
        if (cpuArray[i] == 1) {
          playSound('green');
        } else if (cpuArray[i] == 2) {
          playSound('red');
        } else if (cpuArray[i] == 3) {
          playSound('blue');
        } else if (cpuArray[i] == 4) {
          playSound('yellow');
        }

        if (count < 10) {
          $('#counter').html('0' + count);
        } else {
          $('#counter').html(count);
        }

        // Continues the computer's turn if it hasn't reached the current count
        // or else it waits for the user
        if (i < count - 1) {
          timeouts.push(setTimeout(computerTurn, 750));
          i++;
        } else {
          wait = false;
          i = 0;
        }
      }
    }
    
  }

  // Plays the audio element of the color passed in and animates the button
  function playSound(color) {
    
    document.getElementById('audio-' + color).play();
    $('.' + color + '-btn').addClass('transition-' + color);
    setTimeout(function() {
      $('.' + color + '-btn').removeClass('transition-' + color);
    }, 250);
    
  }

  // Resets the computer's array
  function cpuReset() {
    
    cpuArray = [];

    for (var j = 0; j < 20; j++) {
      var rand = Math.floor(Math.random() * 4) + 1;
      cpuArray.push(rand);
    }
    
  }

  // Click event for the 4 colored buttons
  $('[class*=-btn]').on('click', function() {

    // Allows the user to click a button if it is their turn
    if (!wait) {

      var color = this.className.match(/green|red|blue|yellow/).join();
      playSound(color);

      // Adds each choice to the user's array
      switch (color) {
        case 'green':
          userArray.push(1);
          break;
        case 'red':
          userArray.push(2);
          break;
        case 'blue':
          userArray.push(3);
          break;
        case 'yellow':
          userArray.push(4);
          break;
      }

      // Checks if the last button clicked matches the computer's array
      if (userArray[userArray.length - 1] !== cpuArray[userArray.length - 1]) {

        /* Old notification for wrong answer
        $('.wrong-answer').fadeIn(500);
        $('.wrong-answer').fadeOut(1000);
        */

        // Wrong answer notification animation
        $('#counter').html('! !');

        timeouts.push(setTimeout(function() {
          $('#counter').html('&nbsp');
        }, 250));

        timeouts.push(setTimeout(function() {
          $('#counter').html('! !');
        }, 500));

        timeouts.push(setTimeout(function() {
          $('#counter').html('&nbsp');
        }, 750));

        timeouts.push(setTimeout(function() {
          $('#counter').html('! !');
        }, 1000));

        // Makes the user wait for the computer to show the correct order again
        wait = true;

        // Resets the game if the user selected strict mode
        if (isStrict) {
          count = 1;
          i = 0;
          cpuReset();
        }

        userArray = [];
        timeouts.push(setTimeout(computerTurn, 1750));
      }

      // Continues the current count if the user is correct for the turn
      if (userArray.length == count) {

        // $('.correct-answer').fadeIn(500);
        // $('.correct-answer').fadeOut(1000);
        count++;
        wait = true;
        userArray = [];
        timeouts.push(setTimeout(computerTurn, 1500));
      }
      
    }
    
  });

  $('#btn-start').on('click', function() {

    // Starts the game if it is turned on and the computer isn't currently taking a turn
    if (isOn && (!wait || !started)) {
      timeouts.push(setTimeout(computerTurn, 500));
    }

    started = true;
    wait = true;

  });

  $('#btn-strict').on('click', function() {
    
    if (isOn) {
      $('.strict-on-off').toggleClass('maroon red');
      isStrict = !isStrict;
    }
    
  });

  $('#onOff').click(function() {

    if (isOn) {

      $('#onOff').html('<b>OFF</b>').css('color', 'silver');

      // Stops all animations when the game is turned off
      for (var a = 0; a < timeouts.length; a++) {
        clearTimeout(timeouts[a]);
      }

      timeouts = []; // Resets the animations
      isOn = false;
      count = 1;
      i = 0;
      wait = true;
      userArray = [];
      
      $('#counter').html('&nbsp');
      $('.strict-on-off').removeClass('red').addClass('maroon');
      
    } else {

      $('#onOff').html('<b>ON</b>').css('color', 'mediumturquoise');
      cpuReset(); // Creates a new random order of presses

      isOn = true;
      started = false;
      isStrict = false;

      $('#counter').html('- -');

      timeouts.push(setTimeout(function() {
        $('#counter').html('00');
      }, 500));
    }

  });

});