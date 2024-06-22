document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.list-group-item');
    let found = false;

    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
            item.style.display = '';
            found = true;
        } else {
            item.style.display = 'none';
            found = false;
        }
    });
    if(!found){
        alert('No se encontraron resultados para su búsqueda.');
    }
});
