$(document).ready(function(){
    window.scroll(0, 10);
});


function postMsg(){
    window.scroll(0, 2000);
    var nick = $('#nick').val();
    var msg = $('#msg').val();
    $("#mensajes").append("<p><span>" + nick + ":</span> "+ msg + "</p>");
}
