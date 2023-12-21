let myLeads = []
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
let ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
let tabBtn = document.getElementById('tab-btn')


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    { url: "github.com" }
]

tabBtn.addEventListener('click', function () {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
}
)

function render(leads) {
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>${leads[i]}</a> 
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear()
    ulEl.innerHTML = ''
    myLeads = ''
}
)

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

