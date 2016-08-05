var a = "",
  newNum = true,
  result = "",
  func = "";

math = function(id) {
  switch (id) {
    case "C":
      result = "0";
      a = "";
      func = "";
      $("button.btnFunc").css("background", "#0000cc");
      break;
    case "CE":
      result = 0;
      break;
    case "mod":
    case "divide":
    case "mult":
    case "subt":
    case "add":
      $("button.btnFunc").css("background", "#0000cc");
      var btnId = "#" + id;
      $(btnId).css("background", "#0090ff");
      
      if (func != ""){
        console.log(func + ": " + a + " and " + result);
        result = equals(a, result, func);
        console.log("= " + result);
      }
      a = result;
      func = id;
      newNum = true;
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      if ((result == 0 && result.indexOf(".") == -1) || result == "" || newNum == true) {
        result = id;
        newNum = false;
      } else {
        result += id;
      }
      break;
    case ("="):
      console.log("1. " + result + " " + a);
      result = equals(a, result, func);
      func = "";
      newNum = true;
      console.log("2. " + result + " " + a);
      $("button.btnFunc").css("background", "#0000cc");
      break;
  }
  $("#result").html(result);
  result = result.toString();
}

equals = function(a, b, func) {
  if (func == "add") {
    return +a + +b;
  } else if (func == "subt") {
    return +a - +b;
  } else if (func == "mult") {
    return +a * +b;
  } else if (func == "divide") {
    return +a / +b;
  } else if (func == "mod") {
    return +a % +b;
  }
}