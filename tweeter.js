/**
 * Created by szoll on 1/24/17.
 */


$(document).ready(function(){

    // jQuery("time.timeago").timeago();
    //
    // jQuery.timeago.settings.allowFuture = true;

    var $body = $('body');
    $body.html('');

    var $button = $('<button class="button">Refresh</button>');
    $button.appendTo($body);

    var $box = $('<div class=box></div>');
    $box.insertAfter($button);

    // var $user = $('<div class="user"></div>');

    // var genTweets = function() {
        for(var index = 0; index < streams.home.length; index++) {
            var tweet = streams.home[index];
            var date = streams.home[index].created_at;
            var $user = $('<div class="user"></div>');
            var $tweet = $('<div class="tweet"></div>');
            var $date = $('<div class="date"></div>');
            var time = moment(new Date(date)).format('LTS');
            var user = tweet.user;
            var $allTweet = $('<div class="well allTweet"></div>').addClass(user);
            $user.text('@' + user + ': ' );
            $tweet.text(tweet.message);
            $date.text(time);
            $user.appendTo($allTweet);
            $date.appendTo($allTweet);
            $tweet.appendTo($allTweet);
            $allTweet.prependTo($box);
        }
    // }

    // genTweets();

    var genAdditionalTweets = function() {
            var random = Math.floor(Math.random() * 10)
            var tweet = streams.home[random];
            var date = streams.home[random].created_at;
            var $user = $('<div class="user"></div>');
            var $tweet = $('<div class="tweet"></div>');
            var $date = $('<div class="date"></div>');
            var time = moment(new Date()).format('LTS');
            var user = tweet.user;
            var $allTweet = $('<div class="well allTweet"></div>').addClass(user);
            $user.text('@' + user + ': ' );
            $tweet.text(tweet.message);
            $date.text(time);
            $tweet.prependTo($allTweet);
            $date.prependTo($allTweet);
            $user.prependTo($allTweet);
            // $date.prependTo($box);
            // $tweet.prependTo($box);
            $allTweet.prependTo($box);
    }

    $button.on('click', function(){
        //$('body').before(genTweets());
        //remove existing tweets
        // for(var index = 0; index < streams.home.length; index++) {
        $body.appendTo(genAdditionalTweets());



            // $('div').remove(".tweet");
            //add new tweets
        // }
        // $('body').appendTo(genTweets());
    });

    $('.well.allTweet').on('click', function() {
        console.log('this',this);
        var node = $(this).find('.user');
        // node[0];
        console.log(node.text());
        // $('div').not('.user').fadeToggle();
        // $(this).toggleClass('.well.allTweet.user');
    });


});

