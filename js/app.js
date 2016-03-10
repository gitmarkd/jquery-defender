$(document).ready(function () {
    /* default state: hide all and show still */
    $('.ryu-action').hide();

    $('.ryu-still').show();

    /* */
    $('.ryu').mouseenter(function () {
            $('.ryu-action').hide(); // hide all
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

            // animate hadouken to the right of the screen
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

    $(document).on('keydown', function (e) {
            if (e.keyCode == 88) {
                $('.ryu-action').hide();
                $('.ryu-cool').show();
            }
        })
        .on('keyup', function (e) {
            if (e.keyCode == 88) {
                $('.ryu-action').hide();
                $('.ryu-still').show();
            }
        })
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.2;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
