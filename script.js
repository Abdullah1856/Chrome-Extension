let myLeads = ['hi', 'bye', 'lie']
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads);
}
)

let listItems = ''

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += '<li>' + myLeads[i] + '</li>' + ' '
    listItems = '<li>' + myLeads[i] + '</li>' + ' '
    ulEl.innerHTML += listItems
}

