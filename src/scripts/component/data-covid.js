import DataSource from '../data/data-source.js';

async function getData() {
    try{
         const results = await DataSource.dataCovid();
         renderResult(results); 
        // console.log(results);
    }catch(message){
         fallbackResult(message);
    }
}

const renderResult = results => {
    // if((results.Countries).length > 0 ){
        // let temp = "";
        document.getElementById('positif-world').innerHTML = results.Global.TotalConfirmed;
        document.getElementById('sembuh-world').innerHTML = results.Global.TotalRecovered;
        document.getElementById('meninggal-world').innerHTML = results.Global.TotalDeaths;
        document.getElementById('Update-world').innerHTML = results.Date;

        // for(let i = 0; i < results.Countries.length; i++){
        //     temp += "<tr>";
        //     temp += `
        //             <td>${i+1}</td>
        //             <td>${results.Countries[i].Country}</td>
        //             <td>${results.Countries[i].TotalConfirmed}</td>
        //             <td>${results.Countries[i].TotalRecovered}</td>
        //             <td>${results.Countries[i].TotalDeaths}</td>
        //             <td>${results.Countries[i].Date}</td>`;
        // }
        // document.getElementById('data').innerHTML = temp;
    // }
    
    // clubListElement.clubs = results
    
}


const fallbackResult = message => {

    document.getElementById('Update-world').innerHTML = message;

}

getData();