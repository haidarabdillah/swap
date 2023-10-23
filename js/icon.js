$(document).ready(function() {
    $.get("/images/components/filter.svg", function(data) {
        $(".icon-filter").html(data.documentElement);
    });
    $.get("/images/components/graph.svg", function(data) {
        $(".icon-graph").html(data.documentElement);
    });
    $.get("/images/components/history.svg", function(data) {
        $(".icon-history").html(data.documentElement);
    });
    $.get("/images/components/checked.svg", function(data) {
        $(".icon-checked").html(data.documentElement);
    });

    $.get("/images/social-media/instagram.svg", function(data) {
        $(".icon-instagram").html(data.documentElement);
    });
    $.get("/images/social-media/telegram.svg", function(data) {
        $(".icon-telegram").html(data.documentElement);
    });
    $.get("/images/social-media/twitter.svg", function(data) {
        $(".icon-twitter").html(data.documentElement);
    });
    $.get("/images/social-media/youtube.svg", function(data) {
        $(".icon-youtube").html(data.documentElement);
    });
    $.get("/images/social-media/instagram.svg", function(data) {
        $(".icon-instagram").html(data.documentElement);
    });
    $.get("/images/social-media/medium.svg", function(data) {
        $(".icon-medium").html(data.documentElement);
    });
});