// GIF JS CODE
var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=random&api_key=" + giphyApiKey + "&limit=200&rating=pg";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)

    $(".emoji-button").on("click", function (event) {
        event.preventDefault();
        $(".gif-img").empty();
        $(".gif-title").empty();

        // random gif
        var randomGif = [Math.floor(Math.random() * response.data.length)];

        var gifExample = $("<img src=" + response.data[randomGif].images.downsized_medium.url + " width= 500px height = 400px>")


        $(".gif-img").prepend(gifExample)
        $(".gif-title").append(response.data[randomGif].title)
    })
});

// JOKE JS

$(".eight-ball, .yo-mama").on("click", function (event) {

    var geekJokeURL = "https://geek-jokes.sameerkumar.website/api"

    $.ajax({
        url: geekJokeURL,
        method: "GET"
    }).then(function (response) {
        event.preventDefault();
        $(".joke-section").empty();
        $(".joke-section2").empty();
        $(".joke-section").text(response);
    });

})

$(".dad-joke").on("click", function (event) {

    var JokeURL = "https://official-joke-api.appspot.com/jokes/random"

    $.ajax({
        url: JokeURL,
        method: "GET"
    }).then(function (response) {
        event.preventDefault();

        $(".joke-section").empty();
        $(".joke-section2").empty();
        $(".joke-section").text(response.setup);
        $(".joke-section2").text(response.punchline);
    });

})