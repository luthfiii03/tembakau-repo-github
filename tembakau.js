// Product Data
const products = [
    {
      id: 1,
      name: "Tembakau Strong",
      description: "Kadar nikotin tinggi untuk pengalaman maksimal",
      price: 15000,
      image: "strong2.png",
      strength: "★★★★★"
    },
    {
      id: 2,
      name: "Tembakau Medium",
      description: "Keseimbangan rasa dan kekuatan",
      price: 15000,
      image: "Tembakau.png",
      strength: "★★★☆☆"
    },
    {
      id: 3,
      name: "Tembakau Soft",
      description: "Aroma lembut untuk pemula",
      price: 15000,
      image: "soft2.png",
      strength: "★☆☆☆☆"
    }
  ];
  
  // Render Products
  document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
      productList.innerHTML += `
        <div class="col-md-4">
          <div class="product-card">
            <img src="${product.image}" class="product-img w-100" alt="${product.name}">
            <div class="product-body">
              <h5 class="fw-bold">${product.name}</h5>
              <p class="text-muted small mb-2">${product.description}</p>
              <p class="mb-2">Kekuatan: ${product.strength}</p>
              <p class="price-tag mb-3">Rp ${product.price.toLocaleString('id-ID')}</p>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-outline-dark flex-grow-1">+ Keranjang</button>
                <a href="https://wa.me/6285183006859?text=Saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}" 
                   class="btn btn-sm btn-whatsapp">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  });
  
  // Countdown Timer
  function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
  
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
  
    const updateTimer = () => {
      const now = new Date();
      const diff = endOfDay - now;
  
      if (diff <= 0) {
        countdownElement.textContent = "PROMO TELAH BERAKHIR";
        return;
      }
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `PROMO BERAKHIR DALAM ${hours}J ${minutes}M ${seconds}D`;
    };
  
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', startCountdown);