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
        const birthYear = document.createElement("p");
        const height = document.createElement("p")
        const hairColor = document.createElement("p")

        const pplBtn = document.createElement("button");

        title.textContent = people.name;
        birthYear.textContent = "Birth Year: " + people.birth_year;
        height.textContent = "Height: " + people.height;
        hairColor.textContent = "Hair Color: " + people.hair_color;
        
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

              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
            });
        
        });
        createTableRow.append(title, birthYear, height, hairColor, pplBtn);
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

              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
            });
     
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

const formData = document.getElementById('form')

function start(event) {
  event.preventDefault();

  const reviews = JSON.parse(localStorage.getItem('reviews'))  || []

  const username = document.getElementById('uname').value
  const title = document.getElementById('title').value
  const content = document.getElementById('content').value

  const reviewPost = {
      username,
      title,
      content
  }

  reviews.push(reviewPost)

 localStorage.setItem('reviews', JSON.stringify(reviews))

 console.log("yeah1")

}



function addReviewPost(event) {
  event.preventDefault()
  // pulled the blog data from localstorage
  const reviewData = JSON.parse(localStorage.getItem('reviews'))  || []
  
// created a loop for the blogs and in the loop create the section. h2, div and p for the data
for (let i = 0; i < reviewData.length; i++) {
  const title = reviewData[i].title
  const content = reviewData[i].content
  const username = reviewData[i].username

  const postDiv = document.createElement('section');
  postDiv.classList.add('post');
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  
 
  const contentElement = document.createElement('p');
  contentElement.textContent = content;
  
  const usernameElement = document.createElement('p');
  usernameElement.textContent = 'posted by: ' + username;
  
  
  
  // appended the elements onto the page
  postDiv.append(titleElement, contentElement, usernameElement)
  const post = document.querySelector('#review')
  post.appendChild(postDiv)
  
}



console.log("yeah2")
}

formData.addEventListener('submit', start)
formData.addEventListener('submit', addReviewPost)
