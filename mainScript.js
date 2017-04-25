$(document).ready(function() {
  $("#start-game").click(function() {
    $("#start-game").addClass("display-none");
    $(".top-right").fadeIn(1000);
    $(".bottom-left").fadeIn(1000);

    $(document).keypress(function(key) {
      if (key.which == 87) {
        function firstDestroyBullet() {
          $("#twelve-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#eleven-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#ten-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#nine-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#eight-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#seven-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#six-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#five-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#four-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#three-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#two-bullet").remove();
        };

        function secondDestroyBullet() {
          $("#one-bullet").remove();
        };
        firstDestroyBullet();
        return key;
      };
    });
  });
});
