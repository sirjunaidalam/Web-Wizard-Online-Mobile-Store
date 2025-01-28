const mobilePhones = [
    // Samsung
    { brand: "Samsung", model: "Galaxy S23", price: 799, backCamera: "50MP", frontCamera: "12MP", ram: "8GB", rom: "128GB", description: "Flagship with excellent performance and display." },
    { brand: "Samsung", model: "Galaxy A54", price: 449, backCamera: "50MP", frontCamera: "32MP", ram: "6GB", rom: "128GB", description: "Mid-range phone with vibrant AMOLED screen." },
    { brand: "Samsung", model: "Galaxy M14", price: 199, backCamera: "50MP", frontCamera: "13MP", ram: "4GB", rom: "64GB", description: "Affordable phone with a large battery." },
    { brand: "Samsung", model: "Galaxy Z Fold 5", price: 1799, backCamera: "50MP", frontCamera: "10MP", ram: "12GB", rom: "256GB", description: "Foldable flagship for multitasking enthusiasts." },
    { brand: "Samsung", model: "Galaxy Z Flip 5", price: 999, backCamera: "12MP", frontCamera: "10MP", ram: "8GB", rom: "256GB", description: "Compact foldable with sleek design." },
    { brand: "Samsung", model: "Galaxy S22 Ultra", price: 1199, backCamera: "108MP", frontCamera: "40MP", ram: "12GB", rom: "256GB", description: "Powerful phone with built-in S Pen." },
    { brand: "Samsung", model: "Galaxy A34", price: 349, backCamera: "48MP", frontCamera: "13MP", ram: "6GB", rom: "128GB", description: "Affordable device with excellent AMOLED display." },
    { brand: "Samsung", model: "Galaxy M23", price: 279, backCamera: "50MP", frontCamera: "8MP", ram: "4GB", rom: "128GB", description: "Budget phone with 5G support." },
    { brand: "Samsung", model: "Galaxy Note 20", price: 999, backCamera: "64MP", frontCamera: "10MP", ram: "8GB", rom: "256GB", description: "Note series with productivity features." },
    { brand: "Samsung", model: "Galaxy F14", price: 199, backCamera: "50MP", frontCamera: "13MP", ram: "4GB", rom: "64GB", description: "Entry-level phone with long-lasting battery." },
  
    // Apple
    { brand: "Apple", model: "iPhone 14", price: 799, backCamera: "12MP", frontCamera: "12MP", ram: "6GB", rom: "128GB", description: "Latest iPhone with improved cameras and A15 chip." },
    { brand: "Apple", model: "iPhone 14 Pro", price: 999, backCamera: "48MP", frontCamera: "12MP", ram: "6GB", rom: "128GB", description: "Pro model with Dynamic Island and better cameras." },
    { brand: "Apple", model: "iPhone 14 Plus", price: 899, backCamera: "12MP", frontCamera: "12MP", ram: "6GB", rom: "128GB", description: "Larger screen with excellent battery life." },
    { brand: "Apple", model: "iPhone 14 Pro Max", price: 1099, backCamera: "48MP", frontCamera: "12MP", ram: "6GB", rom: "128GB", description: "Pro Max model with big display and best cameras." },
    { brand: "Apple", model: "iPhone SE 2022", price: 429, backCamera: "12MP", frontCamera: "7MP", ram: "4GB", rom: "64GB", description: "Compact iPhone with powerful A15 chip." },
    { brand: "Apple", model: "iPhone 13", price: 699, backCamera: "12MP", frontCamera: "12MP", ram: "4GB", rom: "128GB", description: "iPhone 13 with excellent performance and cameras." },
    { brand: "Apple", model: "iPhone 13 Mini", price: 599, backCamera: "12MP", frontCamera: "12MP", ram: "4GB", rom: "128GB", description: "Mini model with compact form factor." },
    { brand: "Apple", model: "iPhone 12", price: 599, backCamera: "12MP", frontCamera: "12MP", ram: "4GB", rom: "64GB", description: "Slim design with great performance." },
    { brand: "Apple", model: "iPhone 12 Mini", price: 499, backCamera: "12MP", frontCamera: "12MP", ram: "4GB", rom: "64GB", description: "Affordable and compact iPhone." },
    { brand: "Apple", model: "iPhone 11", price: 499, backCamera: "12MP", frontCamera: "12MP", ram: "4GB", rom: "64GB", description: "Value-for-money iPhone with dual cameras." },
  
    // Xiaomi
    { brand: "Xiaomi", model: "Redmi Note 12 Pro", price: 399, backCamera: "108MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Mid-range phone with exceptional cameras." },
    { brand: "Xiaomi", model: "Redmi Note 12", price: 249, backCamera: "50MP", frontCamera: "13MP", ram: "6GB", rom: "128GB", description: "Budget-friendly with great performance." },
    { brand: "Xiaomi", model: "Mi 13", price: 899, backCamera: "50MP", frontCamera: "32MP", ram: "8GB", rom: "256GB", description: "Flagship with premium design and cameras." },
    { brand: "Xiaomi", model: "Redmi 12C", price: 149, backCamera: "50MP", frontCamera: "5MP", ram: "4GB", rom: "64GB", description: "Entry-level phone with basic features." },
    { brand: "Xiaomi", model: "Redmi Note 11 Pro", price: 349, backCamera: "108MP", frontCamera: "16MP", ram: "6GB", rom: "128GB", description: "Affordable mid-range with AMOLED display." },
    { brand: "Xiaomi", model: "Poco X5 Pro", price: 379, backCamera: "108MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Performance-focused device with sleek design." },
    { brand: "Xiaomi", model: "Redmi K60", price: 499, backCamera: "64MP", frontCamera: "16MP", ram: "12GB", rom: "256GB", description: "High-performance phone with great value." },
    { brand: "Xiaomi", model: "Mi 12T", price: 599, backCamera: "200MP", frontCamera: "20MP", ram: "8GB", rom: "256GB", description: "Affordable flagship killer with great cameras." },
    { brand: "Xiaomi", model: "Poco F4", price: 399, backCamera: "64MP", frontCamera: "20MP", ram: "6GB", rom: "128GB", description: "Power-packed phone with premium design." },
    { brand: "Xiaomi", model: "Redmi A2", price: 129, backCamera: "8MP", frontCamera: "5MP", ram: "2GB", rom: "32GB", description: "Entry-level device for basic users." },
  
    // Motorola
    { brand: "Motorola", model: "Moto Edge 40 Pro", price: 899, backCamera: "50MP", frontCamera: "60MP", ram: "12GB", rom: "256GB", description: "Flagship with ultra-smooth performance." },
    { brand: "Motorola", model: "Moto G73", price: 299, backCamera: "50MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Mid-range phone with a clean Android experience." },
    { brand: "Motorola", model: "Moto G Power 2023", price: 249, backCamera: "48MP", frontCamera: "8MP", ram: "6GB", rom: "128GB", description: "Affordable phone with excellent battery life." },
    { brand: "Motorola", model: "Moto G Stylus 5G", price: 399, backCamera: "50MP", frontCamera: "16MP", ram: "6GB", rom: "256GB", description: "Mid-range phone with stylus support." },
    { brand: "Motorola", model: "Moto E13", price: 129, backCamera: "13MP", frontCamera: "5MP", ram: "2GB", rom: "64GB", description: "Budget-friendly device for basic use." },
    { brand: "Motorola", model: "Moto Edge 30", price: 599, backCamera: "50MP", frontCamera: "32MP", ram: "8GB", rom: "256GB", description: "Sleek design with premium features." },
    { brand: "Motorola", model: "Moto Razr 2023", price: 999, backCamera: "64MP", frontCamera: "32MP", ram: "8GB", rom: "256GB", description: "Foldable phone with retro-inspired design." },
    { brand: "Motorola", model: "Moto G82", price: 329, backCamera: "50MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Affordable phone with AMOLED display." },
    { brand: "Motorola", model: "Moto One Fusion+", price: 299, backCamera: "64MP", frontCamera: "16MP", ram: "6GB", rom: "128GB", description: "Mid-range phone with pop-up selfie camera." },
    { brand: "Motorola", model: "Moto G31", price: 199, backCamera: "50MP", frontCamera: "13MP", ram: "4GB", rom: "64GB", description: "Budget device with great value." },
  
    // Realme
    { brand: "Realme", model: "Realme GT Neo 5", price: 449, backCamera: "50MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Performance-oriented phone with fast charging." },
    { brand: "Realme", model: "Realme Narzo 60", price: 299, backCamera: "64MP", frontCamera: "16MP", ram: "6GB", rom: "128GB", description: "Affordable phone with solid features." },
    { brand: "Realme", model: "Realme C55", price: 199, backCamera: "64MP", frontCamera: "8MP", ram: "4GB", rom: "64GB", description: "Budget device with mini capsule design." },
    { brand: "Realme", model: "Realme 11 Pro+", price: 399, backCamera: "200MP", frontCamera: "32MP", ram: "12GB", rom: "256GB", description: "Flagship-grade camera at affordable price." },
    { brand: "Realme", model: "Realme GT 2", price: 549, backCamera: "50MP", frontCamera: "16MP", ram: "12GB", rom: "256GB", description: "Premium device with Snapdragon 888 chip." },
    { brand: "Realme", model: "Realme 10", price: 249, backCamera: "50MP", frontCamera: "16MP", ram: "4GB", rom: "128GB", description: "Stylish mid-range phone with AMOLED display." },
    { brand: "Realme", model: "Realme Narzo 50", price: 199, backCamera: "50MP", frontCamera: "8MP", ram: "4GB", rom: "64GB", description: "Affordable device with solid performance." },
    { brand: "Realme", model: "Realme X7 Max", price: 399, backCamera: "64MP", frontCamera: "16MP", ram: "8GB", rom: "128GB", description: "Performance-centric phone with Dimensity 1200." },
    { brand: "Realme", model: "Realme GT Master Edition", price: 349, backCamera: "64MP", frontCamera: "32MP", ram: "6GB", rom: "128GB", description: "Stylish design with mid-range features." },
    { brand: "Realme", model: "Realme C53", price: 149, backCamera: "50MP", frontCamera: "8MP", ram: "4GB", rom: "64GB", description: "Budget phone with a sleek look." }
  ];

function loadPage(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) throw new Error('Page not found');
        return response.text();
      })
      .then(data => {
        document.getElementById('main').innerHTML = data;
      })
      .catch(error => {
        document.getElementById('main').innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }

const mobileCardsContainer = document.getElementById("mobileCards");

mobilePhones.forEach((phone) => {
  const card = document.createElement("div");
  card.className = "col-md-4";

  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${phone.brand} - ${phone.model}</h5>
        <p class="card-text"><strong>Price:</strong> $${phone.price}</p>
        <p class="card-text"><strong>Back Camera:</strong> ${phone.backCamera}</p>
        <p class="card-text"><strong>Front Camera:</strong> ${phone.frontCamera}</p>
        <p class="card-text"><strong>RAM:</strong> ${phone.ram}</p>
        <p class="card-text"><strong>ROM:</strong> ${phone.rom}</p>
        <p class="card-text">${phone.description}</p>
      </div>
    </div>
  `;

  mobileCardsContainer.appendChild(card);
});