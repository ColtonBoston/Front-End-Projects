function getResults() {
 $("#searchItems").removeClass("vcenter");

  $("#results").html("");

  var subject = $("#search").val();

  $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + subject + "&callback=?", function(json) {
    
    var ul = $("<ul>");
    
    for (var i = 0; i < json.query.search.length; i++) {
      console.log(json.query.search[i].title);
      
      var title = json.query.search[i].title.toString().replace("'", "&#39");
      
      ul.append("<a href='http://en.wikipedia.org/wiki/" + title + "'  target='_blank'><li class='wikiList'><b>" + title + "</b><br />" + json.query.search[i].snippet + " ...</li></a>");
    }

    $("#results").append(ul);
  });

}

$("#go").click(function() {
  console.log($("#search").val());
  if ($("#search").val() !== ""){
    getResults();
  }
  
});

$("#search").keydown(function(event) {
  if ($("#search").val() !== "" && event.keyCode == 13) {
    getResults();
  }
});