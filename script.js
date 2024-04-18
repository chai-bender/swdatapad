const characterBtnEl = document.querySelector("#characters");
const resultsContainer = document.querySelector("#results");
const planetBtnEl = document.querySelector("#planets");
const shipsBtnEl = document.querySelector("#starships");

characterBtnEl.addEventListener("click", function (event) {
  const requestUrl = "https://swapi.dev/api/people/";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      resultsContainer.innerHTML = "";
      for (const people of data.results) {
        const createTableRow = document.createElement("div");
        const title = document.createElement("h3");
        const gender = document.createElement("p");

        const pplBtn = document.createElement("button");

        title.textContent = people.name;
        if (people.gender === "n/a") {
          gender.textContent = "Droid";
        } else {
          gender.textContent = people.gender;
        }
        pplBtn.textContent = "See GIF";
        pplBtn.setAttribute("value", people.name);

        pplBtn.addEventListener("click", function (event) {
          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn`;
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

              const randomGifNumber = Math.floor(
                Math.random() * data.data.length
              );
              const sectionEl = document.getElementById("api-data");
              sectionEl.innerHTML = "";
              const gifs = data.data[randomGifNumber].images.original.url;

              const newCard = document.createElement("div");

              const imageEl = document.createElement("img");
              // newCard.setAttribute("style", "width:200px; height:200px, margin:300px");

              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
            });
          // trigger fetch request
          //change the a's to buttons
          //send the value from the button to the second fetch request
        });
        createTableRow.append(title, gender, pplBtn);
        resultsContainer.appendChild(createTableRow);
      }
    });
});

planetBtnEl.addEventListener("click", function () {
  resultsContainer.innerHTML = "";
  const requestUrl = "https://swapi.dev/api/planets/";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (const planets of data.results) {
        const createTableRow = document.createElement("div");
        const title = document.createElement("h3");
        const planBtn = document.createElement("button");
        title.textContent = planets.name;
        planBtn.textContent = "See GIF";
        planBtn.setAttribute("value", planets.name);

        planBtn.addEventListener("click", function () {
          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn`;
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

              const randomGifNumber = Math.floor(
                Math.random() * data.data.length
              );
              const sectionEl = document.getElementById("api-data");
              sectionEl.innerHTML = "";
              const gifs = data.data[randomGifNumber].images.original.url;

              const newCard = document.createElement("div");

              const imageEl = document.createElement("img");
              // newCard.setAttribute("style", "width:200px; height:200px");

              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
            });
        });

        createTableRow.append(title, planBtn);
        resultsContainer.appendChild(createTableRow);
      }
    });
});
shipsBtnEl.addEventListener("click", function () {
  resultsContainer.innerHTML = "";
  const requestUrl = "https://swapi.dev/api/starships/";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (const starships of data.results) {
        const createTableRow = document.createElement("div");
        const title = document.createElement("h3");

        const shipBtn = document.createElement("button");

        title.textContent = starships.name;
        shipBtn.textContent = "See GIF";
        shipBtn.setAttribute("value", starships.name);

        shipBtn.addEventListener("click", function () {
          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn`;
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

              const randomGifNumber = Math.floor(
                Math.random() * data.data.length
              );
              const sectionEl = document.getElementById("api-data");
              sectionEl.innerHTML = "";
              const gifs = data.data[randomGifNumber].images.original.url;

              const newCard = document.createElement("div");

              const imageEl = document.createElement("img");
              // newCard.setAttribute("style", "width:200px; height:200px");

              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
            });
          // trigger fetch request
          //change the a's to buttons
          //send the value from the button to the second fetch request
        });

        createTableRow.append(title, shipBtn);
        resultsContainer.appendChild(createTableRow);
      }
    });
});

const modal = document.getElementById("myModal");


const btn = document.getElementById("myBtn");


const span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
};


span.onclick = function () {
  modal.style.display = "none";
};


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
