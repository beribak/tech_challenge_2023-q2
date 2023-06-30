import ApexCharts from 'apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const cont = document.querySelector(".container")
let counter = 1

fetch("https://gitlab.com/-/snippets/2149167/raw/main/data.json")
.then(response => response.json())
.then((data) => {
    data.profiles.forEach((profile) => {
        
        let numbers = []
        let labels = []

        profile.data.forEach((item) => {
            labels.push(item.label)
            numbers.push(item.value)
        })

        cont.insertAdjacentHTML("beforeend", `
            <h2>${profile.title}</h2>
            <h4>${profile.totalLabel}</h4>

            <div style="width: 300px;" id="chart${counter}">
            
            </div>
        `)

        var options = {
            series: numbers,
            labels: labels,
            chart: {
            type: 'donut',
          }
        };
        
        var chart = new ApexCharts(document.querySelector(`#chart${counter}`), options);
        chart.render();

        counter += 1
    })
})

