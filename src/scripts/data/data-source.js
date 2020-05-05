class DataSource{


    static dataCovid(){
        return fetch('https://api.covid19api.com/summary')
        .then(response => {
            return response.json()
        }).then(responseJson => {
            if(responseJson){
                // console.log(responseJson)
                return Promise.resolve(responseJson)
            }else{
                return Promise.reject('Data tidak ditemukan')
            }
        })
    }
}

export default DataSource;