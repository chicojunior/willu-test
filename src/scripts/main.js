$(document).on('click', '.album-image', function(event) {
    event.preventDefault();
    $(".track-list").css("display", "block");
});

$(document).on('click', '.album-text', function(event) {
    event.preventDefault();
    $(".track-list").css("display", "none");
});
