$(document).ready(function() {
    $('.option').on('click', function() {
        $('.option').removeClass('active');
        $(this).addClass('active');
    });
});