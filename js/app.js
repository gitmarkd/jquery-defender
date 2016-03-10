/*
Page loads
Ryu is standing still
Mouseenter  Ryu - shifts to ready pose
Mouseleave - return to still
Mousedown, leans forward and throws a Hadouken
Remains in pose until Mouseup - return to his ready pose
Keydown "x", Ryu assumes "looking cool" pose
Keyup "x" (keyup) - returns to ready pose
*/
$(document).ready(function () {
    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            // play hadouken sound
            playHadouken();

            $('.ryu-ready').hide();
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
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });

    $(document).on('keypress', function (e) {
            if (e.keyCode == 120) {
                $('.ryu-still').hide();
                $('.ryu-ready').hide();
                $('.ryu-cool').show();
            }
        })
        .on('keyup', function (e) {
            if (e.keyCode == 88) {
                $('.ryu-still').show();
                $('.ryu-cool').hide();
                $('.ryu-ready').hide();
            }
        })
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
