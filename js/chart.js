'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {

    let dataSets = localStorage.getItem('products');
    let cleanData = JSON.parse(dataSets);
    console.log(cleanData);

    let itemNames = [];
    let itemVotes = [];
    let itemViews = [];
    
    for (let i = 0; i < cleanData.length; i++) {
        itemNames.push(cleanData[i].name);
        itemVotes.push(cleanData[i].timesClicked);
        itemViews.push(cleanData[i].timesShown);
    }
    const data = {
        labels: itemNames,
        datasets: [{
            label: 'Votes',
            data: itemVotes,
            backgroundColor: '#fff',
            borderColor: '#fff',
            borderWidth: 1
        },
        {
            label: 'Views',
            data: itemViews,
            backgroundColor: '#7e57c2',
            borderColor: '$7e57c2',
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    const myGraph = new Chart(canvasElem, config);

}

renderChart();
