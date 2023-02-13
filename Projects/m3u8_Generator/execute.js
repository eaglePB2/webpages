$(document).ready(function() {
    $("#btn").on("click", function() {
      $("#video").html("<source src='"+ $("#url").val() +"' type='application/x-mpegURL'>");
      var ply = videojs("video");
      ply.play();
    });
  });