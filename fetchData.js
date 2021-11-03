const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('#searchButton');
let tag
searchBar.addEventListener('keyup', function(e){
    tag = e.target.value.toLowerCase();
    if(e.keyCode === 13){
        fetchData();
    }
});
searchButton.addEventListener('click', function(e){
    fetchData();
});
function fetchData(){
    fetch('https://cors-resolve.herokuapp.com/'+'https://medium-scrapper-api.herokuapp.com/data/' + tag).then(function(response){
        return response.json();
    }).then(function(data){
        addData(data);
        console.log(data);
    });
}