$(document).ready(function() {
    $("#popup").hide(); 
    $("#overlay").hide();

    $(".bigicons").on('click', function () {$("#popup").slideToggle(300)});
    $(".bigicons").on('click', function () {$("#overlay").fadeIn(300)});
  
    $("#closebutton").on('click', function () {$("#overlay").fadeOut(300)});
    $("#closebutton").on('click', function () {$("#popup").slideToggle(300)});
    $("#overlay").on('click', function () {$("#overlay").fadeOut(300)});
    $("#overlay").on('click', function () {$("#popup").fadeOut(300)});
  
    $(".htmlcssicon").on('click', function () {$("#popuptext").html("<ul><li>HTML5 and CSS3 - The building blocks of modern webdesign</li><li>Building responsive, scaling websites and designs for PCs and mobile devices</li></ul>")});
      $(".jsicon").on('click', function () {$("#popuptext").html("<ul><li>Add interactivity for your users with Javascript functionality</li><li>JQuery animations and events make your website feel 'alive'!</li></ul>")});
  
  });
