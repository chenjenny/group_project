(function() {
  var quotes = [{
    quote: " “The more that you read, the more things you will know. The more that you learn, the more .......” ",
    choices: ["places you'll seek.", "places you'll go.", "your brain will grow." , "your head will explode"],
    correctAnswer: 2
  }, {
    quote: " A person's a person, no matter how .......",
    choices: ['Big', 'Tiny', 'Small', 'Huge'],
    correctAnswer: 3
  }, {
    quote: "“Congratulations! Today is your day. You're off to ...........! You're off and away!”",
    choices: ["Great Places!" , 'Birthday!' , "Great Heights!" , 'Taco Bell!'],
    correctAnswer: 1
  }, {
    quote: "“Today you are You, that is truer than true. There is no one alive who is ........”",
    choices: ['Faster than you.' , 'Better than you.' , 'Smarter than you.' , 'Youer than You.'],
    correctAnswer: 4
  }, {
    quote: "Sometimes the questions are complicated and the answers are .........",
    choices: ['Ludacris' , 'Wrong' , 'Simple' , 'Questionable'],
    correctAnswer: 3
  }];
  
  var quoteCounter = 0; //Tracks number of quotes (5)
  var selections = []; //Array for most of the users choice
  var test = $('#test'); //Test div tag
  
  // Display initial quote to begin the test.
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // pause click listener during fade animation
    if(test.is(':animated')) {        
      return false;
    }
    choose();
    
    // If the user doenst pick an answer, progress is stopped
    if (isNaN(selections[quoteCounter])) {
      alert('Please make a selection to continue!');
    } else {
      quoteCounter++;
      displayNext();
    }
  });
  
  // Click for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(test.is(':animated')) {
      return false;
    }
    choose();
    quoteCounter--;
    displayNext();
  });
  
  // Click for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(test.is(':animated')) {
      return false;
    }
    quoteCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons when hovered over
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  
  function createQuoteElement(index) {
    var qElement = $('<div>', {
      id: 'quote'
    });
    
    var header = $('<h2>Quote ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var quote = $('<p>').append(quotes[index].quote);
    qElement.append(quote);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  //Radio buttons segment
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < quotes[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += quotes[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  
  function choose() {
    selections[quoteCounter] = +$('input[name="answer"]:checked').val();
  }
  
 
  function displayNext() {
    test.fadeOut(function() {
      $('#quote').remove();
      
      if(quoteCounter < quotes.length){
        var nextQuote = createQuoteElement(quoteCounter);
        test.append(nextQuote).fadeIn();
        if (!(isNaN(selections[quoteCounter]))) {
          $('input[value='+selections[quoteCounter]+']').prop('checked', true);
        }
        
   
        if(quoteCounter === 1){
          $('#prev').show();
        } else if(quoteCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        test.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  

  function displayScore() {
    var score = $('<p>',{id: 'quote'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === quotes[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' quotes out of ' +
                 quotes.length + ' right');
    return score;
  }
})();