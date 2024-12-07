// Product Array
const products = [
    { id: "laptop", name: "Laptop" },
    { id: "tablet", name: "Tablet" },
    { id: "smartphone", name: "Smartphone" },
    { id: "smartwatch", name: "Smartwatch" }
];

// Populate Product Name Options
const productSelect = document.getElementById("product-name");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
