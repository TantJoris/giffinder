// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  
  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('.text-center').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          
           var randomGif = Math.floor((Math.random() * 10) + 1);
           var url = response.data[randomGif].images.original.url;
           appendImageToBody(url);
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("button").click(function (searchTerm) {
    var searchTerm = $("input").val();
    callGiphyAPIWithSearchTerm(searchTerm);
    $('.text-center').empty();
});

    
  
});
