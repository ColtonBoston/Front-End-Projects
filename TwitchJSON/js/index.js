var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "TR7K", "ESL_SC2", "Sad_Junior", "brunofin", "Monstercat", "LobosJR", "Zfg1"],
  offline = [],
  numChannels = channels.length,
  count = 0;

function getOffline() {
  console.log(offline);

  offline.forEach(function(channel) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + channel + '?callback=?', function(data) {
      console.log(data);
      
      var logo,
          link = data.url;
      
      if (data.logo === null || data.logo === undefined) {
        logo = "https://pbs.twimg.com/profile_images/2349866958/m9pjwl1x1n3nvzf8x8rc.png";
      } else {
        logo = data.logo;
      }
      
      if (data.error !== null && data.error !== undefined){
        $("#streamsList").append("<li class='offline text-left'><img src='" + logo + "'></img> <b>" + channel + "</b> - <i>Account Closed</i>");
      } else {
        $("#streamsList").append("<li class='offline text-left'><img src='" + logo + "'></img> <a href='" + link + "' target='_blank'><b>" + data.name + "</b></a> - <i>Offline</i>");
      }
    });
  });
}

channels.forEach(function(channel) {

  $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {

    var index = channels.indexOf(channel);

    console.log(data);
    console.log(index);

    if (data.stream === null || data.stream === undefined) {

      offline.push(channels.splice(index, 1));
      console.log(channel);
      console.log(channels);

    } else {

      var logo,
          link = data.stream.channel.url;

      if (data.stream.channel.logo !== null & data.stream.channel.logo !== undefined) {
        logo = data.stream.channel.logo;
      } else {
        logo = "https://pbs.twimg.com/profile_images/509073338191183872/fYdty6yd.png";
      }

      $("#streamsList").append("<li class='text-left'><img src='" + logo + "'> <span class='description'><a href='" + link + "' target='_blank'><b>" + data.stream.channel.display_name + "</b></a> - <span class='gameText'>" + data.stream.game + "</span> - " + data.stream.channel.status + "</span></li>");

    }
    count++;
    if (count == numChannels) {
      getOffline();
    }
  });
});