// GIF JS CODE
var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=random&api_key=" + giphyApiKey + "&limit=200&rating=pg";

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

//Instructions
$(".help").on("click", function (event) {
    $(".joke").empty();
    $(".joke-section2").empty();
    $(".joke").append("<h4 class='instructions instructions1'><strong>What the hell do these buttons do?</strong><br></h4>");
    $(".joke").append("<h4 class='instructions'><img class='emoji-help' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/232/billiards_1f3b1.png'> - get valuable & meaningful advice</h4>");
    $(".joke").append("<h4 class='instructions'><img class='emoji-help' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/face-with-cowboy-hat_1f920.png'> - geeky / chuck norris jokes</h4>");
    $(".joke").append("<h4 class='instructions'><img class='emoji-help' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/232/face-with-tears-of-joy_1f602.png'> - random funny jokes</h4>");
    $(".joke").append("<h4 class='instructions'><img class='emoji-help' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/black-question-mark-ornament_2753.png'> - press button for help</h4>");
    $(".joke").append("<h4 class='instructions'>A joke/advice will be given, after which a random gif appears below said joke/advice.")
});


// JOKE JS

$(".chuck-norris").on("click", function (event) {
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