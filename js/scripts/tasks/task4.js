/*подсвечивать ячейки таблицы при наведении */

function lightTabel() {
    table.addEventListener('mouseover', function(event){
        if (event.target.tagName == 'TD'){
            event.target.classList.add('color');
        }
       });
}

export { lightTabel };