const HIDDEN_CLASS = 'visually-hidden'

let cards = document.querySelectorAll('.js-search')

function liveSearch() {
    let search_query = document.getElementById('searchbox').value;

    // Use innerText if all contents are visible
    // Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].textContent.toLowerCase().includes(search_query.toLowerCase())) {
            cards[i].classList.remove(HIDDEN_CLASS);
        } else {
            cards[i].classList.add(HIDDEN_CLASS);
        }
    }
}

// A little delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});