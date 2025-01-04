$(document).ready(function () {
    $(".header").css({
        "background-color": "black",
        "padding": "15px",
        "font-size": "20px",
        "font-weight": "bold",
        "font-style": "italic",
        "color": "white",
        "text-align": "center"
    })

    $("body").css({
        "margin": "0",
        "padding": "0"
    })

    $(".main").css({
        "display": "flex",
        "height": "500px",
    })

    $(".left").css({
        "background-color": "green",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "20px",
        "font-style": "italic",
        "font-weight": "bold",
        "color": "white",
        "text-align": "center",
        "width": "50%",
    })

    $(".right").css({
        "background-color": "blue",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "20px",
        "font-style": "italic",
        "font-weight": "bold",
        "color": "white",
        "text-align": "center",
        "width": "50%",
    })
})