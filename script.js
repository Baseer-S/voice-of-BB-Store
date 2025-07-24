   const products = [
            {
                title: "Premium Wireless Headphones",
                description: "High-quality sound with noise cancellation. Perfect for music lovers and professionals.",
                price: "₹1,999",
                originalPrice: "₹5,999",
                discount: "67% OFF",
                affiliateLink: "https://amzn.to/3TQK2tx",
                category: "Electronics",
                categoryIcon: "🎧",
                imageUrl: "https://m.media-amazon.com/images/I/71AvtEc1XPL._SL1500_.jpg"
            },
            {
                title: "Smart Fitness Watch",
                description: "Track your health, workouts, and stay connected. Waterproof design with long battery life.",
                price: " ₹1,399",
                originalPrice: " ₹4,999",
                discount: "72% OFF",
                affiliateLink: "https://amzn.to/4f0xbP4",
                category: "Fitness",
                categoryIcon: "⌚",
                imageUrl: "https://m.media-amazon.com/images/I/61-vRq2ulOL._SL1500_.jpg"
            },
            {
                title: "Portable Phone Charger",
                description: "20000mAh power bank with fast charging. Never run out of battery on the go.",
                price: " ₹939",
                originalPrice: " ₹3,999",
                discount: "77% OFF",
                affiliateLink: "https://amzn.to/4kS5adW",
                category: "Accessories",
                categoryIcon: "🔋",
                imageUrl: "https://m.media-amazon.com/images/I/61dSDJrmIlL._SL1500_.jpg"
            },
            {
                title: "Bluetooth Speaker",
                description: "Mivi Fort Q18 Soundbar with 18W Bluetooth Speakers Soundbar, 2.0 Channel with 2 in-Built Full-Range Speakers, Multiple Input Modes, 6H Playtime, 2000mAh.",
                price: "₹1,499",
                originalPrice: " ₹3,499",
                discount: "57% OFF",
                affiliateLink: "https://amzn.to/4o3tIDm",
                category: "Audio",
                categoryIcon: "🔊",
                imageUrl: "https://m.media-amazon.com/images/I/71Vttzrc1nL._SL1500_.jpg"
            },
            {
                title: "Gaming Mechanical Keyboard",
                description: "AULA T102 Gaming Keyboard and Mouse Combo.",
                price: " ₹1,599",
                originalPrice: " ₹6,999",
                discount: "77% OFF",
                affiliateLink: "https://amzn.to/3IC5TTf",
                category: "Gaming",
                categoryIcon: "⌨️",
                imageUrl: "https://m.media-amazon.com/images/I/71C5Pz-OqoL._SL1500_.jpg"
            },
            {
                title: "Wireless Charging Pad",
                description: "pTron Volta Pro 3-in-1 23W Wireless Charger, Magnetic Charging.",
                price: " ₹1,999",
                originalPrice: " ₹7,999",
                discount: "75% OFF",
                affiliateLink: "https://amzn.to/452dRwa",
                category: "Accessories",
                categoryIcon: "📱",
                imageUrl: "https://m.media-amazon.com/images/I/51XH5Us7kBL._SL1200_.jpg"
            },
            {
                title: "Reusable note",
                description: "KAANUKA Smart A Hybrid Reusable Notebook Tree-Free Notebook With 1 Erasable Pen And 1 Microfiber Cloth.",
                price: "₹469",
                originalPrice: " ₹999",
                discount: "53% OFF",
                affiliateLink: "https://amzn.to/3IY6vT2",
                category: "notebooks",
                categoryIcon: "📒",
                imageUrl: "https://m.media-amazon.com/images/I/81RJAVKdOSL._SL1500_.jpg"
            },
            {
                title: "Acoustic Foam",
                description: "YGM Acoustic Foams® Pyramid Soundproofing Studio (Set of 18) Acoustic Foam .",
                price: " ₹1,295",
                originalPrice: " ₹3,875",
                discount: "67% OFF",
                affiliateLink: "https://amzn.to/4o4pRWN",
                category: "Studio",
                categoryIcon: "🎙",
                imageUrl: "https://m.media-amazon.com/images/I/71OMQlnPPmL._SL1500_.jpg"
            }
        ];

        function createProductCard(product) {
            return `
                <div class="product-card">
                    <div class="channel-badge">Voice of BB</div>
                    <div class="product-image">
                        <div class="category-icon">${product.categoryIcon}</div>
                        <img src="${product.imageUrl}" alt="${product.title}" loading="lazy">
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="discount-badge">${product.discount}</div>
                    <div class="product-price">${product.price} <small style="text-decoration: line-through; color: #999;">${product.originalPrice}</small></div>
                    <a href="${product.affiliateLink}" class="affiliate-btn" onclick="trackClick('${product.title}')">
                        🛒 Buy Now on Amazon
                    </a>
                </div>
            `;
        }

        // Real-time YouTube subscriber count (simulated)
     let baseSubscribers = 147000;
    let baseViews = 312000;

    async function updateRealTimeStats() {
      try {
        // Simulate subscriber growth randomly (1 to 50)
        const randomSubGrowth = Math.floor(Math.random() * 80);
        baseSubscribers += randomSubGrowth;

        // Increase views by fixed 1000 every 15 seconds
        baseViews += 200;

        // Format values
        const formatNumber = (num) => {
          return num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' :
                 num >= 1000 ? (num / 1000).toFixed(0) + 'K' : num;
        };

        // Update DOM
        const subsElement = document.getElementById('subscriberCount');
        const viewsElement = document.getElementById('viewCount');

        if (subsElement) subsElement.textContent = formatNumber(baseSubscribers);
        if (viewsElement) viewsElement.textContent = formatNumber(baseViews);

      } catch (error) {
        console.log('Stats update error:', error);
      }
    }

    // Call initially and then every 15 seconds
    updateRealTimeStats();
    setInterval(updateRealTimeStats, 15000);
        // Add speed control buttons
    function changeScrollSpeed(speed) {
    const container = document.querySelector('.scroll-container');
    container.style.animationDuration = speed + 's';
}

        function loadProducts() {
            const container = document.getElementById('productContainer');
            if (container) {
                // Create multiple sets of products for continuous scrolling
                const productHTML = products.map(createProductCard).join('');
                container.innerHTML =  productHTML + productHTML; // Triple for smooth loop
            }
        }

        function trackClick(productName) {
            // Analytics tracking - replace with your actual tracking code
            console.log(`Product clicked: ${productName}`);
            // Example: gtag('event', 'click', { 'product_name': productName });
        }

        function showFeaturedProduct() {
            alert('🎯 Featured Product: Premium Wireless Headphones - Limited Time 40% OFF!\n\nClick OK to visit Amazon and grab this deal!');
            // Replace with actual affiliate link
            window.open('https://amazon.com', '_blank');
        }

        // Initialize on DOM load
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateRealTimeStats();
            
            const scrollContainer = document.querySelector('.scroll-container');
            
            if (scrollContainer) {
                // Pause scrolling on hover for desktop
                scrollContainer.addEventListener('mouseenter', function() {
                    this.style.animationPlayState = 'paused';
                });
                
                scrollContainer.addEventListener('mouseleave', function() {
                    this.style.animationPlayState = 'running';
                });
                
                // Touch events for mobile
                let touchStartY = 0;
                scrollContainer.addEventListener('touchstart', function(e) {
                    touchStartY = e.touches[0].clientY;
                    this.style.animationPlayState = 'paused';
                });
                
                scrollContainer.addEventListener('touchend', function() {
                    this.style.animationPlayState = 'running';
                });
            }
        });


        // Service Worker registration for better mobile performance
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // Register service worker here if needed
            });
        }