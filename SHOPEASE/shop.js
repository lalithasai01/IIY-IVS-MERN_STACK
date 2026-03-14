const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPriceEl = document.getElementById("totalPrice");
const cartEl = document.getElementById("cart");
const searchInput = document.getElementById("searchInput");

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79,
    category: "electronics",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120,
    category: "electronics",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 95,
    category: "fashion",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Backpack",
    price: 45,
    category: "accessories",
    image: "https://via.placeholder.com/300",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "all";

/* RENDER PRODUCTS */
function renderProducts() {
  productList.innerHTML = "";

  const filtered = products.filter((p) => {
    const matchesCategory =
      currentCategory === "all" || p.category === currentCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <select id="qty-${p.id}">
        <option>1</option><option>2</option><option>3</option>
      </select>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

/* CART */
function addToCart(id) {
  const qty = Number(document.getElementById(`qty-${id}`).value);
  const product = products.find((p) => p.id === id);

  for (let i = 0; i < qty; i++) {
    cart.push(product);
  }

  saveCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  totalPriceEl.textContent = total;
}

/* UI */
function toggleCart() {
  cartEl.classList.toggle("active");
}

function checkout() {
  if (!cart.length) {
    alert("Cart is empty!");
    return;
  }
  alert("✅ Order placed successfully!");
  cart = [];
  saveCart();
}

/* FILTERS */
function filterCategory(cat) {
  currentCategory = cat;
  renderProducts();
}

searchInput.addEventListener("input", renderProducts);

/* INIT */
renderProducts();
renderCart();
