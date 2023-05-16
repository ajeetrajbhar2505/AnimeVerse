//  // YouTube video URL
//  var videoUrl = "https://www.youtube.com/watch?v=VIDEO_ID";

//  // Extracting the video ID from the URL
//  var videoId = getVideoId(videoUrl);

//  // Embedding the YouTube video
//  var playerDiv = document.getElementById("player");
//  var iframe = document.createElement("iframe");
//  iframe.src = "https://www.youtube.com/embed/" + videoId;
//  iframe.width = "560";
//  iframe.height = "315";
//  iframe.allowFullscreen = true;
//  playerDiv.appendChild(iframe);

//  // Function to extract the video ID from the URL
//  function getVideoId(url) {
//    var regex = /[?&]v=([^&#]*)/;
//    var match = regex.exec(url);
//    return match && match[1];
//  }


 var iframe = document.getElementById('iframe');
// Disable click on the iframe
iframe.addEventListener('click', function(event) {
    event.preventDefault();
  });