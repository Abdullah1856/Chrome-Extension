let myLeads = []
const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')
let ulEl = document.getElementById('ul-el')

const deleteBtn = document.getElementById('delete-btn')
deleteBtn.addEventListener('dblclick', function() {
localStorage.clear()
ulEl.innerHTML = ''
}
)

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));




if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}




btnClicked.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    renderLeads()
})




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




