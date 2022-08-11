function getData(){
    fetch('data.json')
        .then(res => res.json())
        .then((data) => {
            createTable(data);
        })
};

function countWins(arr){
    return arr.filter(x => x === "Win").length;
};

function createTable(data, buttonNum = 0){
    const table = document.querySelector('tbody');
    // Clear table content on button click
    table.innerHTML = '';

    // For total count
    let david = [];
    let kenny = [];
    let matt = [];
    
    for(let i = 0; i < Object.entries(data)[`${buttonNum}`][1].length; i++){
        table.appendChild(document.createElement('tr')).innerHTML = 
            `<td>${Object.entries(data)[`${buttonNum}`][1][i].week}</td>
             <td>${Object.entries(data)[`${buttonNum}`][1][i].david}</td>
             <td>${Object.entries(data)[`${buttonNum}`][1][i].kenny}</td>
             <td>${Object.entries(data)[`${buttonNum}`][1][i].matt}</td>`;

        david.push(Object.entries(data)[`${buttonNum}`][1][i].david);
        kenny.push(Object.entries(data)[`${buttonNum}`][1][i].kenny);
        matt.push(Object.entries(data)[`${buttonNum}`][1][i].matt);
    }

    let davidWins = countWins(david);
    let kennyWins = countWins(kenny);
    let mattWins = countWins(matt);

    davidTotal.innerHTML = davidWins;
    kennyTotal.innerHTML = kennyWins;
    mattTotal.innerHTML = mattWins;
};

const buttons = document.querySelectorAll('.button');

for(let button of buttons){
    button.addEventListener('click', handleClick);
};

function handleClick(e){
    const number = e.target.innerText;
    const buttonNum = number - 1;

    function getData(){
        fetch('data.json')
            .then(res => res.json())
            .then((data) => {
                createTable(data, buttonNum);
            })
    };

    const banner = document.querySelector('.banner');
    banner.innerHTML = `Period ${number}`;

    getData();

    buttons.forEach((button) => {
        button.classList.remove('is-primary');
    })
    e.target.classList.add('is-primary');
    
}

getData();