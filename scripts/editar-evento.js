const nameEvent = document.querySelector('#nome');
const bannerEvent = document.querySelector('#banner');
const artistsEvent = document.querySelector('#atracoes');
const descriptionEvent = document.querySelector('#descricao');
const dateEvent = document.querySelector('#data');
const ticketsEvent = document.querySelector('#lotacao');
const formEdit = document.querySelector('form');
const body = document.querySelector('body');
const inputTags = document.querySelectorAll('input');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.my-modal');
const loading = document.querySelector('#loading');

const API_URL = 'https://soundgarden-api.vercel.app/events/623bc253d2891ac70ab1cce4';
const ID_ATUAL = window.location.search.split("=");

loading.style.display = "block"; //Loading Gif

body.onload = getDataEvent(); //services.js

formEdit.onsubmit = async event => {
    event.preventDefault();

    sendDataEvents('PUT', `/events/${ID_ATUAL[1]}`);
};