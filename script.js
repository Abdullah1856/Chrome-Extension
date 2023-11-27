let myLeads = []
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
}
)

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += '<li>' + myLeads[i] + '</li>' + ' '
    }

    ulEl.innerHTML = listItems
}
