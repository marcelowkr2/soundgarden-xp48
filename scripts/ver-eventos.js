const inputTags = document.querySelectorAll('input');
inputTags.forEach(input => {
    input.setAttribute('required', '');
});

const nameEvent = document.querySelector('#nome');
const bannerEvent = document.querySelector('#banner');
const artistsEvent = document.querySelector('#atracoes');
const descriptionEvent = document.querySelector('#descricao');
const dateEvent = document.querySelector('#data');
const ticketsEvent = document.querySelector('#lotacao');
const formNewEvent = document.querySelector('form');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.my-modal');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

formNewEvent.onsubmit = async event => {
    event.preventDefault();

    sendDataEvents('POST', '/events');
};