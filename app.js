document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("btn");
    var url = 'http://localhost:8080/superheroes.php'
    var key = document.getElementById("search-box").value;
    

    button.addEventListener('click', (event) => {
        event.preventDefault();        
        httpR = new XMLHttpRequest();
        
        httpR.onreadystatechange = function(){
            if (httpR.readyState === XMLHttpRequest.DONE && httpR.status === 200){
                var r = httpR.responseText;
                var key = document.getElementById("search-box").value;
                
                document.getElementById("result").innerHTML = r;
            }
            if (httpR.readyState === XMLHttpRequest.DONE && httpR.status === 404){
                alert('ERROR - File not found.');
            }
        }
        httpR.open('GET', "superheroes.php?q="+key, true);
        httpR.send();
    });    
});
