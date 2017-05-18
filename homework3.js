$(function() {

  var $form = $('.my-form-class');

  $form.on('submit', function(event) {
    var randomNumberBetween0and2 = Math.floor(Math.random() * 3);

    var love_gif = ['http://www.reactiongifs.com/wp-content/uploads/2012/03/fez_I_love_you.gif',
                    'http://mochimochiland.com/images/knittinggnome600.gif',
                    'http://68.media.tumblr.com/7997e09918e89c3418f746f7c4eb72ef/tumblr_n3rmn9GDMB1s2wio8o1_500.gif'];
    var maybe_gif = ['http://i.imgur.com/VYJUH2T.gif',
                    'https://i.imgur.com/rvNEXjw.gif',
                    'http://akns-images.eonline.com/eol_images/Entire_Site/20141011/rs_500x216-141111111701-tumblr_n32os5L7RY1sor9n5o1_500.gif'];
    var nope_gif = ['http://www.reactiongifs.com/r/oplz.gif',
                    'http://i.imgur.com/cqyUOW4.gif',
                    'http://68.media.tumblr.com/b2852e8ca0fbadd752453f8223aabe93/tumblr_o37vpaN7qg1qmob6ro1_500.gif'];

    var love = function(percentage) {
      if (percentage >= 65) {
        $('.target-image').prop('src', love_gif[randomNumberBetween0and2]);
        $('.love_match').text("It's a Match!!!");
        $('.maybe').text("");
        $('.no_match').text("");
      } else if (percentage >= 35) {
        $('.target-image').prop('src', maybe_gif[randomNumberBetween0and2]);
        $('.maybe').text("It is Undecided");
        $('.no_match').text("");
        $('.love_match').text("");
      } else {
        $('.target-image').prop('src', nope_gif[randomNumberBetween0and2]);
        $('.no_match').text("This is Not a Match");
        $('.love_match').text("");
        $('.maybe').text("");
      }
    };

    event.preventDefault();
    console.log($(this).serializeArray());

    var name1 = $('input[name="name1"]').val();
    var name2 = $('input[name="name2"]').val();

    $.ajax({
      url: 'https://love-calculator.p.mashape.com/getPercentage?fname='+name1+'&sname='+name2, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
      type: 'POST', // The HTTP Method
      data: {}, // Additional parameters here
      datatype: 'json',
      success: function(data) { 
        // document.getElementById('output').innerHTML = "whatever";
        love(data.percentage); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "o4DYJZSH2ImshQZThc0roeUNGBChp1TQFRAjsnhhidGB3YzoQr"); // Enter here your Mashape key
      }
    }).then(function(data) {
      console.log(data.percentage);
    }).catch(function(err) {
      // try bad endpoint, see an error
      console.log('we got an error!');
      console.log(err);
    });
  });



  // $('.load-stuff').on('click', function(event) {
  //   var _this = this;
  //   var name1 = $('input[name="name1"]').val();
  //   var name2 = $('input[name="name2"]').val();

  //   $.ajax({
  //     url: 'https://love-calculator.p.mashape.com/getPercentage?fname='+name1+'&sname='name2, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
  //     type: 'POST', // The HTTP Method
  //     data: {}, // Additional parameters here
  //     datatype: 'json',
  //     success: function(data) { 
  //       // document.getElementById('output').innerHTML = "whatever";
  //       love(data.percentage); },
  //     error: function(err) { alert(err); },
  //     beforeSend: function(xhr) {
  //     xhr.setRequestHeader("X-Mashape-Authorization", "o4DYJZSH2ImshQZThc0roeUNGBChp1TQFRAjsnhhidGB3YzoQr"); // Enter here your Mashape key
  //     }
  //   }).then(function(data) {
  //     console.log(data.percentage);
  //   }).catch(function(err) {
  //     // try bad endpoint, see an error
  //     console.log('we got an error!');
  //     console.log(err);
  //   });
  // });

});