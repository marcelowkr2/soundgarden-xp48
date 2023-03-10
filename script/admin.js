const API_URL = 'https://soundgarden-api.vercel.app/events';

const listarEventos= async () => {
    const eventos = await fetch (API_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((resposta) => {
        //retorna lista em array de objetos 
        return resposta.json();
    });

    const tbody = document.querySelector(".lista-eventos tbody");
    
    let htmlEventos = "";
    //Monta a tabela da página
    eventos.forEach(evento => {
        htmlEventos += `
        <tr>
        <th scope="row">${evento._id}</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions.join(", ")}</td>
        <td>
            <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`;
    });

    
  tbody.innerHTML = htmlEventos;      


    
}

listarEventos();