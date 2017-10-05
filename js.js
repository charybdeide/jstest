$(function() {
    loadsmth(function() {

    });
});

function loadsmth(callback) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();

    if(callback) callback();
    else alert();
}

