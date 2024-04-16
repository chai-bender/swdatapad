const characterBtnEl = document.querySelector("#characters")
const planetBtnEl = document.querySelector("#planets")
const shipsBtnEl = document.querySelector("#starships")

characterBtnEl.addEventListener('click', function(event){
  event.stopPropagation();
    const requestUrl = 'http://swapi.dev/api/people/';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      for (const people of data.results) {
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const a = document.createElement('a');
        
        a.textContent = people.name;
        
        a.href = "./next.html"

        tableData.appendChild(a);
        createTableRow.appendChild(tableData)
        characterBtnEl.appendChild(createTableRow)

      }
    })
  }, {once : true}
  )
 
  planetBtnEl.addEventListener('click', function(){
    const requestUrl = 'http://swapi.dev/api/planets/';
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (const planets of data.results) {
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const a = document.createElement('a');
        
        a.textContent = planets.name;
        a.href = "./next.html"
    
        tableData.appendChild(a);
        createTableRow.appendChild(tableData)
        planetBtnEl.appendChild(createTableRow)
      }
    });
  }, {once : true}
  )
  shipsBtnEl.addEventListener('click', function(){
    const requestUrl = 'http://swapi.dev/api/starships/';
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      for (const starships of data.results) {
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const a = document.createElement('a');
        
        a.textContent = starships.name;
        a.href = "./next.html"
    
        tableData.appendChild(a);
        createTableRow.appendChild(tableData)
        shipsBtnEl.appendChild(createTableRow)

        
      }
    });
}, {once : true}
)
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
