let myLeads = ['hi', 'bye', 'lie']
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')

console.log(ulEl);

btnClicked.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads);
}
)

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}


