console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const API_KEY = "Tp1hpFHZRP6aSMTdEKY9p5L5NXSUwq01";

let button = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let img = document.querySelector("img");
let p = document.querySelector("p");

button.addEventListener("click", (event) => {
    event.preventDefault();
    getGif();
});

function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`)
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            console.log(body);
            img.src = body.data.images.original.url;
            searchInput.value = "";
            p.textContent = "";
        })
        .catch((err) => {
            console.error(err);
            document.querySelector("p").textContent = "Could not load result at this time. Try again later.";
        });
}