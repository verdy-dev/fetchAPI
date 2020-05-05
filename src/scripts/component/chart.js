import Chart from 'chart.js';
import DataSource from '../data/data-source.js'

    getChart();

    async function showchart() {
        let totalConfirmed; 
        let totalDeaths;
        let totalRecovered;
        try{
            const results = await DataSource.dataCovid();
            totalConfirmed = results.Global.TotalConfirmed;
            totalDeaths = results.Global.TotalDeaths;
            totalRecovered=results.Global.TotalRecovered;


            return { totalConfirmed, totalDeaths, totalRecovered}      
            
        }catch(message){
            return {totalConfirmed, totalDeaths, totalRecovered} 
        }
    }

    function getChart(){
        const data = showchart();
        const ctx = document.getElementById('myChart').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'bar',
    
            data: {
                labels: ["Total Terkonfirmasi", "Total Kematian", "Total di Pulihkan"],
                responsive: true,
                datasets: [{
                    backgroundColor: ['rgb(255, 176, 37)','rgb(255, 99, 132)','rgb(15, 240, 45)'],
                    borderColor: ['rgb(255, 176, 37)','rgb(255, 99, 132)','rgb(15, 240, 45)'],
                    data: [data.totalConfirmed, data.totalDeaths, data.totalRecovered]
                }]
            },
    
            options: {}
        });
    }






export default getChart