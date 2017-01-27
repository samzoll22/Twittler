/**
 * Created by szoll on 1/24/17.
 */



$(document).ready(function(){

    // jQuery("time.timeago").timeago();
    //
    // jQuery.timeago.settings.allowFuture = true;


    // var $user = $('<div class="user"></div>');
    var $body = $('body');
    $body.html('');

    var $button = $('<button class="button">Newest Tweets</button>');
    $button.appendTo($body);

    // var $nav = $('<nav class="navbar navbar-inverse bg-inverse">' +
    //     '<a class="navbar-brand" href="#">Twittler Nav</a></nav>);
    // $nav.appendTo($button);


    var $box = $('<div class=box></div>');
    $box.insertAfter($button);

    var $header = $('<div class=header>Twittler</div>');
    $header.insertBefore($button);


    var $footer = $('<div class=footer>by yurika jacobsson & sam zoll</div>');
    $footer.insertAfter($box);


    var $HomeButton = $('<button class="button">Back</button>');

    // function() {
        for(var index = 0; index < streams.home.length; index++) {
            var tweet = streams.home[index];
            var date = streams.home[index].created_at;
            var $user = $('<div class="user"></div>');
            var $tweet = $('<div class="tweet"></div>');
            var $date = $('<div class="date"></div>');
            var time = moment(tweet.created_at).fromNow();
                // moment(new Date(date)).format('LTS');
            var user = tweet.user;
            var $allTweet = $('<div class="well allTweet"></div>');
            $user.text('@' + user + ': ' );
            $tweet.text(tweet.message);
            $date.text(time);
            $user.appendTo($allTweet);
            $date.appendTo($allTweet);
            $tweet.appendTo($allTweet);
            $allTweet.appendTo($box);
            // window.allTweet = $allTweet;
        }


    // genTweets();

    // var genAdditionalTweets = function() {
    //         var random = Math.floor(Math.random() * 10);
    //         var tweet = streams.home[random];
    //         var date = streams.home[random].created_at;
    //         var $user = $('<div class="user"></div>');
    //         var $tweet = $('<div class="tweet"></div>');
    //         var $date = $('<div class="date"></div>');
    //         var time = moment(new Date()).format('LTS');
    //         var user = tweet.user;
    //         var $allTweet = $('<div class="well allTweet"></div>');
    //         $user.text('@' + user + ': ' );
    //         $tweet.text(tweet.message);
    //         $date.text(time);
    //         $tweet.prependTo($allTweet);
    //         $date.prependTo($allTweet);
    //         $user.prependTo($allTweet);;
    //         $allTweet.prependTo($box);
    //
    // }

    // console.log(allTweet)

    // var userTweets = function() {
    //   var username = node.slice(1, node.length - 2);
    //   var userTweetsArr = streams.users[username];
    // }

    $button.on('click', function(){
        //$('body').before(genTweets());
        //remove existing tweets
        // for(var index = 0; index < streams.home.length; index++) {


        location.reload();
        // $box.appendTo(genAdditionalTweets());



            // $('div').remove(".tweet");
            //add new tweets
        // }
        // $('body').appendTo(genTweets());
    });

    $HomeButton.on('click', function(){
        location.reload();
    })



    // var displayTweets = function(tweets) {
    //     var $tweetDisplay = $('.tweet-display');
    //     $tweetDisplay.html('')
    // };

    // var refreshFeed = function() {
    //     $('.refresh-button').text('Refresh Feed');
    //     displayTweets(streams.home);
    // };

    // var displayUserTweets = function(user) {
    //     $('.refresh-button').text('Show Feed');
    //     displayTweets(streams.users[user]);
    // };




    $('.well.allTweet').on('click', function() {



        var $body = $('body');
        $body.html('');

        // var $buttonHome = $('<button class="button">Home</button>');
        // $buttonHome.appendTo($body);


        $HomeButton.appendTo($body);

        // var header =




        var $footer = $('<div class=footer>by yurika jacobsson & sam zoll</div>');



        var $header = $('<div class=header>test</div>');
        var $box = $('<div class=box></div>');
        $box.insertAfter($HomeButton);

        $box.html('');

        var node = $(this).find('.user').text();
        var username = node.slice(1, node.length - 2);
        var userArray = streams.users[username];
        var userArrayLength = userArray.length;
        for (var i = 0; i < userArrayLength; i++) {
            var user = streams.users[username][i].user;
            var date = streams.users[username][i].created_at;
            var message = streams.users[username][i].message;
            var $user = $('<div class="user"></div>');
            var $tweet = $('<div class="tweet"></div>');
            var $date = $('<div class="date"></div>');
            var time = moment(tweet.created_at).fromNow();
            var $allTweet = $('<div class="well allTweet"></div>');
            $user.text('@' + user + ': ' );
            $tweet.text(message);
            $date.text(time);

            $tweet.prependTo($allTweet);
            $date.prependTo($allTweet);
            $user.prependTo($allTweet);
            $allTweet.prependTo($box);
            $footer.insertAfter($box);
            // $('div').not()


            $header.text(user + ' tweets');
            $header.insertBefore($HomeButton);

        };

    });


});


// var user = tweet.user;
// $date.prependTo($box);
// $tweet.prependTo($box);

// var random = Math.floor(Math.random() * 10)
// var tweet = streams.home[random];
// var date = streams.home[random].created_at;
// var $user = $('<div class="user"></div>');
// var $tweet = $('<div class="tweet"></div>');
// var $date = $('<div class="date"></div>');
// var time = moment(new Date()).format('LTS');
// var user = tweet.user;
// var $allTweet = $('<div class="well allTweet"></div>').addClass(user);
// $user.text('@' + user + ': ' );
// $tweet.text(message);
// $date.text(date);
// $tweet.prependTo($allTweet);
// $date.prependTo($allTweet);
// $user.prependTo($allTweet);
// $date.prependTo($box);
// $tweet.prependTo($box);
// $allTweet.prependTo($box);
//




//
// console.log(node)
// console.log("this", this)
//

// console.log(username);
//
// $(this).remove(username).fadeToggle();
// console.log(streams.users[username]);

// console.log("length",streams.users[username].length);
// console.log("user 0", streams.users[username][0].user);

// $(this).toggleClass('.well.allTweet.user');
