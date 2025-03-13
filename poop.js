
function createTr() {
    let mainTr = document.createElement("tr")
    for (arg of arguments) {
        let td = document.createElement("td")
        td.style.border = "1px solid"
        td.textContent = arg
        mainTr.appendChild(td)
    }
    return mainTr
}


const table = document.createElement("table")
const theTrs = [
    createTr("Car", "Top", "Price"),
    createTr("Chevrolet", "120mph", "$10,000"),
    createTr("Pontiac", "140mph", "$20,000"),
]

for (tr of theTrs) {
    table.appendChild(tr)
}

document.body.appendChild(table)

// styles yes
table.style.border = "1px solid"// changing the style via style object
table.style.margin = "auto" // changing the style via style object
table.style.textAlign = "center" // changing the style via style object

table.setAttribute("width", "1000"); // changing the style using .setAttribute()
table.setAttribute("text-align", "center"); // changing the style using .setAttribute()