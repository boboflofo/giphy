import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//Business Logic

// Basic search
// function searchGif(query) {
//   let request = new XMLHttpRequest();
//   const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.API_KEY}&limit=5`;

//   request.addEventListener("loadend", function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       displayGif(response, query);
//     } else {
//       printError(this, response, query);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }

// // random return
// function searchGif(query) {
//   let request = new XMLHttpRequest();
//   const url = `http://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${process.env.API_KEY}`;

//   request.addEventListener("loadend", function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       displayGif(response, query);
//     } else {
//       printError(this, response, query);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }

//trending
function searchGif(query) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/trending/searches?api_key=${process.env.API_KEY}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      displayGif(response, query);
    } else {
      printError(this, response, query);
    }
  });

  request.open("GET", url, true);
  request.send();
}

//UI

//display for search
// function displayGif(response, query) {
//   document.querySelector('#showResponse').innerText = `Here is a gif of ${query}.`;
//   const img = document.createElement('img');
//   img.src = response.data[0].images.downsized.url;
//   document.querySelector('#showGif').append(img);
// }


// // display for random
// function displayGif(response, query) {
//   document.querySelector('#showResponse').innerText = `Here is a gif of ${query}.`;
//   const img = document.createElement('img');
//   img.src = response.data.images.downsized.url;
//   document.querySelector('#showGif').append(img);
// }

//display for trending
function displayGif(response) {
  // const stringArray = response.data.toString();
  document.querySelector('#showResponse').innerText = `Here are trending GIF topics:
  ${response.data}.`;
}  

function printError(request, response) {
  document.querySelector('#showResponse').innerText = `There was an error accessing a GIF for the query: ${request.status} ${request.statusText}: ${response.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const query = document.querySelector('#query').value;
  document.querySelector('#query').value = null;
  searchGif(query);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


