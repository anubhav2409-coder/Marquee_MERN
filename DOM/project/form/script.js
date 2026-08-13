let form = document.getElementById("form");
let table = document.getElementById("table");

let product = JSON.parse(localStorage.getItem("products")) || [];

function addProductToTable(item, index) {
    let newTableRow = document.createElement("tr");

    newTableRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
    `;

    table.appendChild(newTableRow);
}

product.forEach((item, index) => {
    addProductToTable(item, index);
});

form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        form.requestSubmit();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newProduct = {};

    let inputFields = form.querySelectorAll("input");

    inputFields.forEach((el) => {
        const { name, value } = el;
        newProduct[name] = value;
    });

    let selectField = form.querySelector("select");

    if (selectField) {
        const { name, value } = selectField;
        newProduct[name] = value;
    }

    product.push(newProduct);

    localStorage.setItem("products", JSON.stringify(product));

    addProductToTable(newProduct, product.length - 1);

    form.reset();
});