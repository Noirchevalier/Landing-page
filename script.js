function showAlert() {
  alert("This is a Javascript alert from an external file");
}

const products = [
  {
    id: 1,
    name: "Pente ergonômico",
    description: "Para pentear seus cabelos com precisão e conforto.",
    price: "R$30,00",
    image: "asset/comb.png",
  },
  {
    id: 2,
    name: "Condicionador Hidratante",
    description: "Hidratação profunda para cabelos secos.",
    price: "R$25,00",
    image: "asset/shampoo.png",
  },
  {
    id: 3,
    name: "Espelho pessoal",
    description: "Para você conseguir se admirar com estilo.",
    price: "R$40,00",
    image: "asset/mirror.png",
  },
  {
    id: 4,
    name: "AK-47",
    description: "Para caso nada dê certo, compre isto.",
    price: "R$499,00",
    image: "asset/Ak47.png",
  },
];

function loadProducts() {
  const container = document.getElementById("product-list");

  if (!container) {
    console.error("Element with ID 'product-list' not found.");
    return;
  }

  container.innerHTML = "";

  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product-item");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const productFooter = document.createElement("div");
    productFooter.classList.add("product-footer");

    const price = document.createElement("p");
    price.textContent = product.price;

    const button = document.createElement("a");
    button.textContent = "Comprar";
    button.href = `product.html?id=${product.id}`;

    productFooter.appendChild(price);
    productFooter.appendChild(button);

    const image = document.createElement("img");
    image.src = product.image;

    productItem.appendChild(image);
    productItem.appendChild(name);
    productItem.appendChild(description);
    productItem.appendChild(productFooter);

    container.appendChild(productItem);
  });
}

// Get the product ID from the URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Load the product details on the product page
function loadProduct() {
  const productId = getProductIdFromURL();
  const product = products.find((p) => p.id == productId);

  if (product) {
    document.querySelector(".img-product").src = product.image;
    document.querySelector(
      ".h3-product"
    ).textContent = `${product.name} - ${product.price}`;
    document.querySelector(".p-product").textContent = product.description;
  } else {
    document.querySelector(".product-section").innerHTML =
      "<p>Produto não encontrado.</p>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
});

if (document.querySelector(".product-section")) {
  loadProduct();
}
