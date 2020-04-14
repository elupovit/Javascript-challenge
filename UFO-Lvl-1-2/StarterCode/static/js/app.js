// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
tableData.forEach(function(weatherReport) {
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

d3.selectAll("#filter-btn").on("click", function() {
    var date = d3.select("#datetime").property("value")
    var city = d3.select("#city").property("value")
    var state = d3.select("#state").property("value")
    var country = d3.select("#country").property("value")
    var shape = d3.select("#shape").property("value")


    var filtered = data
    if (date) {
        filtered = filtered.filter(filterdata)
    }

    function filterdata(row) {

        return row.datetime === date && row.city === city && row.state === state && row.country === country && row.shape === shape;
    }
    tbody.html("")

    filtered.forEach(function(weatherReport) {
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
})





// // BONUS
// data.forEach((weatherReport) => {
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });


// PART 2