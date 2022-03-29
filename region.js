// $( function() {
//     if (localStorage.getItem("myKey")) {
//         var stored_select = localStorage.getItem("myKey");
//         $('#' + stored_select).prop( "selected", true );
//         $('.' + stored_select).show();
//     }
//     else {
//     $('.msk').show();
//     }
// });
//
// $("#selectItem").change(function(){
//     $('.city-by-reg').find('div').hide();
//     var selected = $('#selectItem option:selected').attr('id');
//     localStorage.setItem("myKey", selected);
//     $('.' + selected).show();
//     });

$( function() {

    if (localStorage.getItem("myKey")) {
        var stored_select = localStorage.getItem("myKey");
        $('#' + stored_select).prop( "selected", true );
        $('.' + stored_select).show();
    } else {

    }
});

$("#selectItem").change(function(){
    $('.city-by-reg').find('div').hide();
    var selected = $('#region option:selected').attr('id');
    $('.' + selected).show();
});