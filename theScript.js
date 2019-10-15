document.getElementById("dogButton").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("thePic").innerHTML = "";
  const url = "https://random.dog/woof.json";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "<img id=\"theImg\"src=";
      results += json.url += "></img>"
      document.getElementById("thePic").innerHTML = results;
      document.getElementById("theImg").style.height = "400px";
    });
});

document.getElementById("catButton").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("thePic").innerHTML = "";
  const url = "https://aws.random.cat/meow";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "<img id=\"theImg\"src=";
      results += json.file += "></img>"
      document.getElementById("thePic").innerHTML = results;
      document.getElementById("theImg").style.height = "400px";
    });
});