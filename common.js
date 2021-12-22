$(document).ready(function(){
    $("#clothes").click(function(){
        $("#clothes").addClass("active");
        $("#dress").removeClass("active");
        $("#shoes").removeClass("active");

        $("#link").text("Quan ao");
    });
    $("#dress").click(function(){
        $("#dress").addClass("active");
        $("#clothes").removeClass("active");
        $("#shoes").removeClass("active");

        $("#link").text("Vay");
    });
    $("#shoes").click(function(){
        $("#shoes").addClass("active");
        $("#dress").removeClass("active");
        $("#clothes").removeClass("active");

        $("#link").text("Giay dep");

    });
});