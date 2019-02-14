// from data.js
var tableData = data;

//create a table variable
var tbody = d3.select("tbody");

//loop through the data and add it to the table
tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

//selecting a filter button
var filter = d3.select("#filter-btn");

//On click button function
filter.on("click", function(){

  
  d3.event.preventDefault();

  //Defining the input element 
  var inputElement = d3.select("#datetime");
  console.log(inputElement)

  //Getting the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue)

    tbody.html("");
  
  //Filter for the user input
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  //Inserting the filtered data into table to show

  filteredData.forEach((UFOsighting) => {
      var row = tbody.append("tr");
      Object.entries(UFOsighting).forEach(([key, value]) =>{
          var cell = tbody.append("td");
          cell.text(value);
      });
  });

});