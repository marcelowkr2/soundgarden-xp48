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
const formDelete = document.querySelector('form');
const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.my-modal');
const loading = document.querySelector('#loading');

const API_URL = 'https://soundgarden-api.vercel.app//bookings/:id';
const ID_ATUAL = window.location.search.split("=");

formDelete.onsubmit = async event => {
    event.preventDefault();
    alert('Are you sure?');

    try {
        modal.insertAdjacentHTML("afterbegin", myModal);
        modalContainer.classList.add('show');
        
        const loadingModal = document.querySelector('#loadingModal');
        loadingModal.style.display = "block";

        const responseEvent = await fetch(`${API_URL}/events/${ID_ATUAL[1]}`, { method: "DELETE" });
        modalContainer.classList.remove('show');
        
        alert('Success');
        window.location.href="admin.html";

    } catch (error) {
        console.log(error);
        modalContainer.classList.remove('show');
        alert('Error!!!');
    }
};