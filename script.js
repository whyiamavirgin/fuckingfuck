$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
    }
})