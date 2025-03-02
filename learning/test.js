const product = {
    ProductID: 4,
    Name: "Blueberry Muffin",
    Category: "Bakery",
    Price: "2.00",
    img: "6799bc645ab8f.jpg"
};

fetch("http://localhost:3000/api/products", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
})
.then(response => {
    if (!response.ok) {
        throw new Error("Failed to delete product");
    }
    return response.json();
})
.then(data => console.log("Product deleted successfully", data))
.catch(error => console.error("Error:", error));
