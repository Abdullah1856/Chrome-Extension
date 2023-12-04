let myLeads = []
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
let ulEl = document.getElementById('ul-el')

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', console.log(JSON.stringify(myLeads)))
    renderLeads()
    console.log(localStorage.getItem(myLeads))
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
