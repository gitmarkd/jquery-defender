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
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').show();
            // animate hadouken to the right of the screen
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });
});
