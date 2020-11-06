// toggle.onclick = function myFunc() {
//     var x = document.getElementById('logo');
//     var y = document.getElementById('menu-checkbox');

//     if (y.is(":checked")){
//         alert("ON");
//     } else {
//         alert("OFF");
//     }

//     // if (x.className === "logo" && ) {
//     //     x.className += " invisible";
//     // } else {
//     //     x.className = "topnav";
//     // }
// }

$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
    }
})