$("#progressFill").animate({ 
    width: "100%"
  }, 7.5*1000);

$("#percentage").animate({ 
    left: "100%"
}, 7.5*1000);

var count = 0;
var timer = setInterval(function(){
    count++;
    var percentageValue = count + '%'
    $("#percentage_number").html(percentageValue);
    if(count >= 100) {
        clearInterval(timer);
        window.location.href="cartoon.html"
    }
    },75)
