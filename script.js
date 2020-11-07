$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
    }
})

$(function() {
    $('.toggles button').click(function() { // при нажатии на кнопку будет вызываться функция
        var get_id = this.id; //записывается тот айди, на который нажали
        var get_current = $('.posts .' + get_id); 

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});