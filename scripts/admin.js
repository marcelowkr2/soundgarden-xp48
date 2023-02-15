const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const listarEventos = async () => {

    const eventos = await fetch(SOUND_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resposta) => {

        //retorna lista em array de objetos
        return resposta.json();
    });

    // console.log(eventos);

    const tbody = document.querySelector('.lista-eventos tbody');

    let htmlEventos = "";

    eventos.forEach(evento => {
        let dia = evento.scheduled.slice(8, 10);
        let mes = evento.scheduled.slice(5, 7);
        let ano = evento.scheduled.slice(0, 4);

        htmlEventos += `
            <tr>
                <th scope="row">#</th>
                <td>${dia}/${mes}/${ano}</td>
                <td>${evento.name}</td>
                <td>${evento.attractions.join(', ')}</td>
                <td>
                  <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
                  <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
                  <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
                </td>
              </tr>
        `;
    });

    tbody.innerHTML = htmlEventos;


}

listarEventos();

// quando a janela termina de carregar
window.onload = () => {
    console.log('pagina carregada');
    //  pega url da  pagina
    const url = new URL(window.location.href);
    //separando parametro acao
    const acao = url.searchParams.get('acao');

    console.log(acao);

    if (acao != null && acao == 'edit') {
        alert('Evento atualizado com sucesso!');
    }
}