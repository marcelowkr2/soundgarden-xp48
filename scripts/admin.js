const body = document.querySelector('body');
const tbody = document.querySelector('#tabela-eventos');
const loading = document.querySelector('#loading');

const API_URL = 'https://soundgarden-api.vercel.app/events';

loading.style.display = "block";

body.onload = async () => {
    try {
        const responseEvents = await fetch(`${API_URL}/events`, { method: "GET" });
        const contentResponseEvents = await responseEvents.json();
        loading.style.display = "none";

        for (let i = 0; i < 6; i++) {
            const finalDate = new Date(contentResponseEvents[i].scheduled);

            tbody.insertAdjacentHTML("beforeend", `
                <tr>
                    <th scope="row">
                        ${i + 1}
                    </th>
                    <td>
                        ${finalDate.toLocaleDateString('en-GB')}
                    </td>
                    <td>
                        ${contentResponseEvents[i].name}
                    </td>
                    <td>
                        ${contentResponseEvents[i].attractions}
                    </td>
                    <td>
                        <a href="bookings.html?id=${contentResponseEvents[i]._id}" class="btn btn-dark">
                        Check bookings</a>
                        <a href="edit-event.html?id=${contentResponseEvents[i]._id}" class="btn btn-secondary">Edit</a>
                        <a href="delete-event.html?id=${contentResponseEvents[i]._id}" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            `);
        };

    } catch (error) {
        console.log(error);
        loading.style.display = "none";
        alert('Error!!!');
    };
};