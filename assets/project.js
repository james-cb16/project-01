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

        console.log(randomGif)

        var gifExample = $("<img class='gif-object' src=" + response.data[randomGif].images.downsized_medium.url + " width= 500px height = 400px>")


        $(".gif-img").prepend(gifExample)
        $(".gif-title").append(response.data[randomGif].title)

    })
});

