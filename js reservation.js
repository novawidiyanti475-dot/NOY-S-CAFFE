document.addEventListener('DOMContentLoaded', () => {
    // ===== ISI DROPDOWN MENU =====
    const selectMenu = document.getElementById('menuPilihan');
    if (selectMenu) {
        menuItems.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
            selectMenu.appendChild(opt);
        });
    }

    // ===== TAMPILKAN DETAIL MENU (jika ada id di URL) =====
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const detailSection = document.getElementById('detailSection');

    if (id && detailSection) {
        const item = menuItems.find(m => m.id == id);
        if (item) {
            detailSection.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <div class="detail-info">
                    <h2>${item.name}</h2>
                    <p class="price">Rp ${item.price.toLocaleString()}</p>
                    <p class="desc">${item.description}</p>
                    <p><strong>Kategori:</strong> ${item.category}</p>
                    <a href="#reservationForm" class="cta-btn" style="margin-top:0.8rem;">Reservasi Sekarang</a>
                </div>
            `;
        } else {
            detailSection.innerHTML = `<p style="text-align:center;width:100%;">Menu tidak ditemukan.</p>`;
        }
    }

    // ===== FORM RESERVASI =====
    const form = document.getElementById('reservationForm');
    const message = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const jumlah = document.getElementById('jumlah').value;
            const menuPilihan = document.getElementById('menuPilihan').value;
            const tanggal = document.getElementById('tanggal').value;

            // Validasi sederhana
            if (!nama || !email || !jumlah || !menuPilihan || !tanggal) {
                message.textContent = '❌ Semua field harus diisi!';
                message.style.color = '#d4738e';
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                message.textContent = '❌ Email tidak valid!';
                message.style.color = '#d4738e';
                return;
            }

            // Simulasi sukses
            message.textContent = '✅ Reservasi berhasil! Kami akan menghubungi Anda segera. ♡';
            message.style.color = '#4CAF50';
            form.reset();
        });
    }
});
