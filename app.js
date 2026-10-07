// Data proyek
const proyek = [
    {
        nama: "Website Profil",
        kategori: "web"
    },
    {
        nama: "Aplikasi Data Mahasiswa",
        kategori: "data"
    },
    {
        nama: "Website Tugas Kuliah",
        kategori: "web"
    }
];

// Mengambil elemen HTML
const daftar = document.querySelector("#daftar");
const filter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

// Fungsi untuk menampilkan proyek
function tampilkanProyek(kategori = "semua") {
    daftar.innerHTML = "";

    const hasil = proyek.filter(function(item) {
        return kategori === "semua" || item.kategori === kategori;
    });

    hasil.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item.nama;
        daftar.appendChild(li);
    });

    // Menampilkan pesan jika tidak ada data
    pesanKosong.hidden = hasil.length !== 0;
}

// Event ketika tombol filter diklik
filter.addEventListener("click", function(event) {

    const tombol = event.target.closest("button");

    if (!tombol) {
        return;
    }

    const kategori = tombol.dataset.kategori;

    tampilkanProyek(kategori);
});

// Menampilkan semua proyek saat halaman pertama dibuka
tampilkanProyek();