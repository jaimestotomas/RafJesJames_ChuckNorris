
document.getElementById("joke-btn").addEventListener("click",getJoke);

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.response);
           document.getElementById('joke').innerHTML = data.value;
        }
    }

    xhr.send();
}

getJoke();