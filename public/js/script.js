$(document).ready(() => {
  $('#menu-toggle').click((e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });
});

$("#login").on("click", (event) => {
  event.preventDefault();
  console.log("success")
  $.post("/api/login").then(function (data) {

  });
});
  
