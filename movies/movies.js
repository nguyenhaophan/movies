// Movie database
const database = [
    {id: 1, name: "Avengers: Infinity War", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_480x.progressive.jpg?v=1631200474"},
    {id: 2, name: "No Time To Die", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/194534529_519924755715883_7550284638314939040_n_480x.progressive.jpg?v=1624637727"},
    {id: 3, name: "Mulan", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7e9885543726e54656a28e40ccad685b_480x.progressive.jpg?v=1573572675"},
    {id: 4, name: "Adventures of Tintin", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/928ff41a22a3288eebdbea88e6e43ea6_6d81b977-77bb-4cfc-b342-26322cae94fc_480x.progressive.jpg?v=1573592691"},
    {id: 5, name: "Dark Knight", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e93839d7ee2e5ad4858f1b21fcf09e2a_2c6a225f-b23f-4582-9c88-957215c7f49a_480x.progressive.jpg?v=1573591356"},
    {id: 6, name: "Casino Royale", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3dc46a873c2b89fff15c3dfd54b04716_90766247-a171-4c73-ac28-2ec676f802dc_480x.progressive.jpg?v=1573617551"},
    {id: 7, name: "Brave", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/558590bffb31f6b0be870ff9a46e2cbb_480x.progressive.jpg?v=1573587254"},
    {id: 8, name: "Parasite", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/parasite_ver3_xlg_480x.progressive.jpg?v=1581309216"},
    {id: 9, name: "Shawshank Redemption", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f91d843ec3dff2aa1904114beaf53d56_281b69ef-9885-40af-a0ad-3a99b5082196_480x.progressive.jpg?v=1573585406"},
    {id: 10, name: "Tenet", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/tenet2020.ar_480x.progressive.jpg?v=1578062934"},
    {id: 11, name: "Dark Knight Rises", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5fa9b28c5e9321457bab15b31c6b496f_f2022b61-97e5-42bb-96c6-b490d02fc8be_480x.progressive.jpg?v=1573590406"},
    {id: 12, name: "Shutter Island", url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f2b592b1d46f769ab126287717725644_30f1a0ae-ef2a-4707-a28f-8b0ea2f68b5b_480x.progressive.jpg?v=1573618782"}
    ];

// Upload movie databse to local storage
localStorage.setItem("movieData", JSON.stringify(database));

// Access movie database from local storage
const data = JSON.parse(localStorage.getItem("movieData"));

// Dynamically generate html content
document.addEventListener('DOMContentLoaded', () => {

    data.forEach(elem => {

        const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                        </svg>`;

        let codeBlock = createMovieCardElement(elem.id, elem.url, elem.name, `addMovie(${elem.id})`, svgPath, "Watchlist");

        // Create a series of codeBlock(s) inside root
        document.getElementById("root").insertAdjacentHTML("beforeend", codeBlock);

    });

});

function createMovieCardElement(id, url, name, clickAction, svgPath, buttonDescription) {

    // Block of html that will be generated dynamically
    return `<div id="grid-elem${id}" class="grid-card">
            <img src="${url}" alt="${name}">
            <span class="text">${name}</span>
            <button class="add-btn btn btn-secondary" onclick="${clickAction}">
                ${svgPath}
                ${buttonDescription}
            </button>
        </div>`;
}

// Check existence of added movie IDs from storage to avoid reloading it
let movies = !localStorage.getItem("addedMovieIDs") ? [] : JSON.parse(localStorage.getItem("addedMovieIDs"));

function addMovie(btn) {

    // Alert
    alert("Movie added successfully!");

    // Check to avoid duplicating added movie
    if (!movies.find(elem => elem === btn)) {
        movies.push(btn);
    }

    // Store added movies to local storage
    localStorage.setItem("addedMovieIDs", JSON.stringify(movies));
}