// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(weatherReport) {
    console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
});

// BONUS
data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Create a custom filtering function
function selectDate {
    return person.age < 30;
}

// filter() uses the custom function as its argument
var youngSimpsons = simpsons.filter(selectYounger);

// Test
console.log(youngSimpsons);