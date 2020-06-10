var strokeColors = ['#071122', '#823329', '#b6f1b5']

$(".vertical-container1").hide()
$(".vertical-container2").hide()
$(".back").hide()

$(".animation").click(function () {
  $('rect').each(function () {
    $(this).css("stroke", strokeColors[Math.floor(Math.random() * strokeColors.length)])
  });
  $("#soundtrack").animate({volume: 0}, 2000);
  $(".vertical-container1").show()
  $(".vertical-container2").show()
  $(".back").show()
  $(this).css("cursor", "default")
});

$(".back").click(function () {
  $(".vertical-container1").hide()
  $(".vertical-container2").hide()
  $(this).hide()
  $("#soundtrack").animate({volume: 1}, 2000);
  $(".animation").css("cursor", "pointer")
});
