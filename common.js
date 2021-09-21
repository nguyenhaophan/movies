document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#burger-button');
    button.onclick = () => {

        // Burger Toggling
        button.classList.toggle('change');

        // Open/Close burger
        if (button.classList.contains('change')) {
            document.getElementById('burger-dropdown').style.height = '100%'
        } else {
            document.getElementById('burger-dropdown').style.height = '0%';
        }
    }

});