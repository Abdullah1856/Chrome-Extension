let myLeads = []
// const inputEl = document.getElementById('input-el')
const btnClicked = document.getElementById('button-el')


// btnClicked.addEventListener('click', function () {
//     myLeads.push("abdullah.com")
//     console.log(myLeads);
// }
// )

btnClicked.addEventListener('click', function () {
    getValue = document.getElementById('input-el').value;
    myLeads.push(getValue);
    console.log(myLeads);
    return false;
}
)
