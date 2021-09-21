// Access added movie IDs from local storage
let storedMovieIDs = JSON.parse(localStorage.getItem("addedMovieIDs"));

// Access movie database from local storage
const data = JSON.parse(localStorage.getItem("movieData"));

// Dynamically generate html content
document.addEventListener('DOMContentLoaded', () => {

    // Check if there are added movies from local storage
    if (localStorage.getItem("addedMovieIDs")) {

        // Create content for each added movie
        storedMovieIDs.forEach(movie => {

            let create = data.find(elem => elem.id === movie);
            if (create) {

                const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                            </svg>`;

                let codeBlock = createMovieCardElement(create.id, create.url, create.name, `removeMovie(${create.id})`, svgPath, "Remove");

                // Create a series of codeBlock(s) inside root
                document.getElementById("root").insertAdjacentHTML("beforeend", codeBlock);

            }
        });
    }
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

function removeMovie(btn) {

    // Find the chosen movie ID to be removed from local storage
    let find = storedMovieIDs.find(id => id === btn);

    if (find) {

        // Remove the chosen movie ID
        storedMovieIDs = storedMovieIDs.filter(id => id !== btn);

        // Update new data to local storage
        localStorage.setItem("addedMovieIDs", JSON.stringify(storedMovieIDs));

        // Rerender interface
        let rerender = document.getElementById(`grid-elem${btn}`);
        rerender.remove();
    }
}

