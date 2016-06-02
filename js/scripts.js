//back end logic
var name;
var quality1;
var quality2;
var quality3;
var quality4;
var quality5;
var quality6;
var quality7;
var quality8;
var quality9;
var tot1;
var tot2;
var tot3;

// find the total for question # 1 3 6

var total1 = function() {
  tot1 = quality1 + quality3 + quality6;
};

// find the total for question # 2 4 9

var total2 = function() {
  tot2 = quality2 + quality4 + quality9;
};

// find the total for question # 5 7 8

var total3 = function() {
  tot3 = quality5 + quality7 + quality8;
};

// matching function
var match = function()  {
  total1();
  total2();
  total3();
  if ( tot1 > 5 && tot2 > 3) {
    window.location.replace("1.html");
  }
  else if ( tot1 > 5 && tot2 > 3) {
    window.location.replace("2.html");
  }
  else if ( tot3 <= 4 || tot1 < 5 )  {
    window.location.replace("3.html");
  }
  else if ( tot2 <= 5 && tot3 < 7 )  {
    window.location.replace("4.html");
  }
  else {
    window.location.replace("5.html");
  }
}

//front end logic

$(function()  {
  $("form.blank").submit(function(event) {
    name = $("#name").val();
    quality1 = parseInt($("input:radio[name=q1]:checked").val());
    quality2 = parseInt($("input:radio[name=q2]:checked").val());
    quality3 = parseInt($("input:radio[name=q3]:checked").val());
    quality4 = parseInt($("input:radio[name=q4]:checked").val());
    quality5 = parseInt($("input:radio[name=q5]:checked").val());
    quality6 = parseInt($("input:radio[name=q6]:checked").val());
    quality7 = parseInt($("input:radio[name=q7]:checked").val());
    quality8 = parseInt($("input:radio[name=q8]:checked").val());
    quality9 = parseInt($("input:radio[name=q9]:checked").val());
    match();
    event.preventDefault();
  });
  $(".person1").text(name);
});
