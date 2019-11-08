// GIF JS CODE
var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=random&api_key=" + giphyApiKey + "&limit=500&rating=pg";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // random gif
    $(".emoji-button").on("click", function (event) {
        event.preventDefault();
        $(".gif-img").empty();
        $(".gif-title").empty();

        var randomGif = [Math.floor(Math.random() * response.data.length)];

        var gifExample = $("<img class= gif-img src=" + response.data[randomGif].images.downsized_medium.url + ">")


        $(".gif-img").prepend(gifExample)
        // $(".gif-title").append(response.data[randomGif].title)
    })
});

// JOKE JS

$(".yo-mama").on("click", function (event) {
    var geekJokeURL = "https://geek-jokes.sameerkumar.website/api"

    $.ajax({
        url: geekJokeURL,
        method: "GET"
    }).then(function (response) {
        event.preventDefault();

        $(".joke").empty();
        $(".joke-section2").empty();
        $(".joke").append("<div class= joke-container>")
        $(".joke-container").append("<div class=joke-holder> </div> <br>")
        $(".joke-holder").text(response);
    });
})

// joke js 2
$(".dad-joke").on("click", function (event) {
    var JokeURL = "https://official-joke-api.appspot.com/jokes/random"

    $.ajax({
        url: JokeURL,
        method: "GET"
    }).then(function (response) {
        event.preventDefault();

        $(".joke").empty();
        $(".joke-section2").empty();
        $(".joke").append("<div class= joke-container>")
        $(".joke-container").append("<div class=joke-holder> </div> <br>")
        $(".joke-container").append("<div class=joke-holder2>")

        $(".joke-holder").text(response.setup);
        $(".joke-holder2").text(response.punchline);
    });
})

// random quote
$(".eight-ball").on("click", function (event) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        const data = JSON.parse(response);
        var randomQuote = Math.floor((Math.random() * data.length) + 1);
        $(".joke").empty();
        $(".joke-section2").empty();
        $(".joke").append("<div class= joke-container>")
        $(".joke-container").append("<div class=joke-holder> </div> <br>")
        $(".joke-holder").text(data[randomQuote].text);
    });
})