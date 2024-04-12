const characterBtnEl = document.querySelector("#characters")
const planetBtnEl = document.querySelector("#planets")
const shipsBtnEl = document.querySelector("#starships")

characterBtnEl.addEventListener('click', function(){
    const requestUrl = 'http://swapi.dev/api/people/';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}
)
planetBtnEl.addEventListener('click', function(){
    const requestUrl = 'http://swapi.dev/api/planets/';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}
)
shipsBtnEl.addEventListener('click', function(){
    const requestUrl = 'http://swapi.dev/api/starships/';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}
)
