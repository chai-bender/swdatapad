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
        const createDiv = document.createElement("div");
        const title = document.createElement("h3");
        const birthYear = document.createElement("p");
        const height = document.createElement("p")
        const hairColor = document.createElement("p")
        const pplBtn = document.createElement("button");

        createDiv.setAttribute("class","people")

        title.textContent = people.name;
        birthYear.textContent = "Birth Year: " + people.birth_year;
        height.textContent = "Height: " + people.height;
        hairColor.textContent = "Hair Color: " + people.hair_color;
        
        pplBtn.textContent = "See GIF";
        pplBtn.setAttribute("value", people.name);

        pplBtn.addEventListener("click", function (event) {

          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn&limit=10`;
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

              const randomGifNumber = Math.floor(
                Math.random() * data.data.length
              );
              const sectionEl = document.getElementById("api-data1");
              sectionEl.innerHTML = '';
              const gifs = data.data[randomGifNumber].images.original.url;

              const newCard = document.createElement("div");

              const imageEl = document.createElement("img");
              
              imageEl.setAttribute("class", "gif")
              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
              createDiv.appendChild(sectionEl)
            });
        
        });
        createDiv.append(title, birthYear, height, hairColor, pplBtn);
        resultsContainer.appendChild(createDiv);
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
        const createDiv = document.createElement("div");
        const title = document.createElement("h3");
        const climate = document.createElement("p")
        const diameter = document.createElement("p")
        const population = document.createElement("p")
        const planBtn = document.createElement("button");
        
        createDiv.setAttribute("class","people")

        title.textContent = planets.name;
        climate.textContent = "Climate: " + planets.climate;
        diameter.textContent = "Diameter: " + planets.diameter + "km";
        population.textContent = "Population: " + planets.population;
        
        planBtn.textContent = "See GIF";
        planBtn.setAttribute("value", planets.name);

        planBtn.addEventListener("click", function () {
          console.log("this")
          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn&limit=10`;
          fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            
            const randomGifNumber = Math.floor(
              Math.random() * data.data.length
              );
                const sectionEl = document.getElementById("api-data2");
                sectionEl.innerHTML = '';

                const gifs = data.data[randomGifNumber].images.original.url;
                
                const newCard = document.createElement("div");
                
                const imageEl = document.createElement("img");
                
                imageEl.setAttribute("class", "gif");
                imageEl.src = gifs;
              newCard.appendChild(imageEl);
              sectionEl.appendChild(newCard);
              createDiv.appendChild(sectionEl);
            });
        });

        createDiv.append(title, climate, diameter, population, planBtn);
        resultsContainer.appendChild(createDiv);
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
        const createDiv = document.createElement("div");
        const title = document.createElement("h3");
        const crew =document.createElement("p");
        const passengers =document.createElement("p");
        const speed =document.createElement("p");
        const shipBtn = document.createElement("button");

        createDiv.setAttribute("class","people");

        title.textContent = starships.name;
        crew.textContent = "Crew: " + starships.crew;
        passengers.textContent = "Passengers: " + starships.passengers;
        speed.textContent = "Max Speed: " + starships.max_atmosphering_speed + "kph";


        shipBtn.textContent = "See GIF";
        shipBtn.setAttribute("value", starships.name);

        shipBtn.addEventListener("click", function () {
          console.log("this")

          const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${this.value}&api_key=eV1vilwiJxBWQEhCWPkw5LWLjkj9AMMn&limit=10`;
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

              const randomGifNumber = Math.floor(
                Math.random() * data.data.length
              );
              const sectionEl = document.getElementById("api-data3");
              console.log(sectionEl)
              sectionEl.innerHTML = '';
              const gifs = data.data[randomGifNumber].images.original.url;

              const newCard = document.createElement("div");

              const imageEl = document.createElement("img");
              
              imageEl.setAttribute("class", "gif")
              imageEl.src = gifs;
              newCard.append(imageEl);
              sectionEl.append(newCard);
              createDiv.appendChild(sectionEl)
            });
     
        });

        createDiv.append(title, crew, passengers, speed, shipBtn);
        resultsContainer.appendChild(createDiv);
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




function addReviewPost() {
  const reviewData = JSON.parse(localStorage.getItem('reviews'))  || []
  
  
  for ( i = 0; i < reviewData.length; i++) {
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
  
  
  
  postDiv.append(titleElement, contentElement, usernameElement)
  const post = document.querySelector('#review')
  post.appendChild(postDiv)
  
}



}

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

addReviewPost()
}
formData.addEventListener('submit', start)
