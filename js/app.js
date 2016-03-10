$(document).ready(function () {
    /* default state: hide all and show ryu-still */
    $('.ryu-action').hide();
    $('.ryu-still').show();

    /* mouse events */
    $('.ryu').mouseenter(function () {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-action').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            // play hadouken sound
            playHadouken();

            $('.ryu-action').hide();
            $('.ryu-throwing').show();

            // animate hadouken to the right
            $('.hadouken').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function () {
                        $(this).hide();
                        $(this).css('left', '520px');
                    }
                );
        })
        .mouseup(function () {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        });

    /* key events */
    $(document).on('keydown', function (event) {
            if (event.keyCode == 88) {
                $('.ryu-action').hide();
                $('.ryu-cool').show();
            }
        })
        .on('keyup', function (event) {
            if (event.keyCode == 88) {
                $('.ryu-action').hide();
                $('.ryu-still').show();
            }
        })
});

/* audio */
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.2;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
