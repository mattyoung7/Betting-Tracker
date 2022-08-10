const buttons = document.querySelectorAll('button');
const tables = document.querySelectorAll('.table');
const banner = document.querySelector('.banner');

for(let button of buttons){
    button.addEventListener('click', handleClick);
};

function handleClick(e) {
    for(let button of buttons){
        button.classList.remove('is-primary');
        e.target.classList.add('is-primary');
    }

    for(let table of tables){
        table.classList.add('hidden');
    }
    
    let buttonNumber = e.target.innerText
    let tableNumber = '#table' + buttonNumber;
    let tableActive = document.querySelector(`${tableNumber}`);

    tableActive.classList.remove('hidden');

    banner.innerText = 'Period ' + buttonNumber;
};