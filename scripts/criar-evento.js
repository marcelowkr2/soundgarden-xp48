const url = "https://soundgarden-api.vercel.app/events"

const formCadastroEvento = document.getElementById("cadastro-evento");

formCadastroEvento.addEventListener('submit', async (event) =>{
    event.preventDefault(); 

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

const novoEventoObj = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": inputData.value,
    "number_tickets": inputLotacao.value
}

console.log(novoEventoObj);

const novoEventoJSON = JSON.stringify(novoEventoObj);

const response = fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: novoEventoJSON
}).then( response => console.log(response)
).then( ()=> {
    alert("Evento criado com sucesso!")
    window.location.replace("admin.html");
    }
).catch( error => console.error(error) );
});