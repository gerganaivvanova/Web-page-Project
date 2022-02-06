const API = 'https://api.thecatapi.com/v1/images/search';
const loadBtn = document.querySelector('.caroussel-button');

loadBtn.addEventListener('click', getImage);

function getImage() {
    fetch(API)
        .then(response => response.json())
        .then(res => addImage(res))
        .catch(err => console.log(err));
}

function addImage(data) {
    let parentDiv = document.createElement('div');
    parentDiv.className = 'swiper-slide';
    let imgEl = document.createElement('img');
    imgEl.src = data[0].url;

    parentDiv.appendChild(imgEl);
    document.querySelector('.swiper-wrapper').appendChild(parentDiv);



}
