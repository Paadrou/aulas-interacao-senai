fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
        const container = document.querySelector("#container")
        const user = usuarios.map(item => {
            return `
            <div class="card">
            <img src = "https://placehold.co/600x400" alt = ${item.name}</img>
            <h2>${item.name}</h2>
            <p>Username: ${item.username}</p>
            <p>Email: ${item.email}</p>
            <p>Telefone: ${item.phone}</p>
            <p>Website: ${item.website}</p>
            <p>Empresa: ${item.company.name}, ${item.company.catchPhrase}, ${item.company.bs}</p>
            <p>Endereço: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</p>
            </div>
            `
        })
        container.innerHTML = user.join("")
    })