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
