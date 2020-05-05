const searchFuction=()=>{
    const search = document.getElementById('searchElement');            
    const filter = search.value.toUpperCase();            

    const penampung = document.getElementById("data");            
    const content = penampung.getElementsByClassName("table-row");

    for (let i = 0; i < content.length; i++) {               
        const judul = content[i].querySelectorAll('.table-row .country')[0];                                
        const txtValue = judul.textContent || judul.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            content[i].style.display = "";
        } else {
            content[i].style.display = "none";        
        }
    }
}

export default searchFuction