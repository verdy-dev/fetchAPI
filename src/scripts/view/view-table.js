import DataSource from '../data/data-source.js';



 async function getDataTable() {
    try{
         const results = await DataSource.dataCovid();
         renderResult(results); 
    }catch(message){
         fallbackResult(message);
    }
}

const renderResult = results => {

        let temp = "";
        for(let i = 0; i < results.Countries.length; i++){
            temp += `<tr class="table-row">`;
            temp += `
                    <td>${i+1}</td>
                    <td class="country">${results.Countries[i].Country}</td>
                    <td>${results.Countries[i].TotalConfirmed}</td>
                    <td>${results.Countries[i].TotalRecovered}</td>
                    <td>${results.Countries[i].TotalDeaths}</td>
                    <td>${results.Countries[i].Date}</td>
                    `;
            temp += "</tr>"
        }
        document.getElementById('data').innerHTML = temp;
    
}


const fallbackResult = message => {
    document.getElementById('data').innerHTML = `<td colspan="6">${message}</td>`;
}

getDataTable();

