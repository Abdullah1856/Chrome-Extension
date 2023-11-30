let myLeads = []
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
let ulEl = document.getElementById('ul-el')

// localStorage.setItem('Class', 'First Year');

// let printClass = localStorage.getItem('Class');
// console.log(printClass);

// localStorage.clear();

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
}
)

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a> 
            </li>
        `
    }

    ulEl.innerHTML = listItems
}
