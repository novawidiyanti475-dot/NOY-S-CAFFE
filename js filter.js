document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('menuGrid');
    const buttons = document.querySelectorAll('.filter-btn');

    function renderMenu(category) {
        const filtered = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);

        grid.innerHTML = filtered.map(item => `
            <div class="menu-card">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p class="price">Rp ${item.price.toLocaleString()}</p>
                <p style="font-size:0.85rem; color:#6a5a62; margin:0.3rem 0;">${item.description}</p>
                <a href="detail.html?id=${item.id}" class="detail-link">Lihat Detail</a>
            </div>
        `).join('');
    }

    // Filter klik
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.filter);
        });
    });

    // Tampilkan semua awal
    renderMenu('all');
});

// Toggle menu mobile (dari index.html & lainnya)
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});
