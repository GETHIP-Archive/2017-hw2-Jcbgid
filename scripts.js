$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-Jcbgid/master/jacob.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#school").text(data.school);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.strengths, function(key, value){
      $("#sts").append("<li>" + value.theme + " #" + value.pos + "</li>");
    });
  });
});
s
