$(document).ready(function() {
  $('form#blanks').submit(function(event) {
    var userInput = $('input#sent').val();
    var output = [];
    for ( var index = 0; index < userInput.length; index += 1 ) {
      if ( userInput[index] === 'a' || userInput[index] === 'e' || userInput[index] === 'i' || userInput[index] === 'o' || userInput[index] === 'u' ) {
        output.push('-');
      } else {
        output.push(userInput[index]);
      }
    }
    output = output.join('');
    $('h2#result').text(output);
    event.preventDefault();
    $('#blanks').hide();
  });

});
