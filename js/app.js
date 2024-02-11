let elTemplate = document.querySelector(".template").content;
let elCards = document.querySelector(".cards");
let elCard = document.querySelector(".card");
let elFragment = new DocumentFragment();

let CATS_URL = "https://api.thecatapi.com/v1/images/search?limit=10";


fetch(CATS_URL).then(res => res.json())
.then(data => data.forEach(cat => {
    let elCloneTemplate = elTemplate.cloneNode(true);

    elCloneTemplate.querySelector(".card-img").src = cat.url;

    elFragment.appendChild(elCloneTemplate);

    elCards.appendChild(elFragment);

}))
