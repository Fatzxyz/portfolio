// Menangani pengiriman form kontak
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Menampilkan konfirmasi pengiriman
        alert(`Pesan telah dikirim!\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

        // Reset form setelah pengiriman
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Menangani pengiriman form kontak
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Menampilkan konfirmasi pengiriman
        alert(`Pesan telah dikirim!\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

        // Reset form setelah pengiriman
        form.reset();
    });

    // Mengambil tombol untuk switch dark mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        // Menambah atau menghapus kelas dark-mode dari body
        document.body.classList.toggle('dark-mode');

        // Mengubah teks tombol sesuai mode
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '🌞';
        } else {
            darkModeToggle.textContent = '🌙';
        }
    });

    // Mengecek apakah dark mode sudah diset sebelumnya di localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '🌞';
    }

    // Menyimpan preferensi pengguna pada localStorage
    darkModeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
