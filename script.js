// ========== HAMBURGER MENU FUNCTIONALITY ==========
// Bagian ini mengatur menu hamburger untuk navigasi mobile

// Mengambil elemen dengan class 'navbar-nav' dari HTML
// Element ini biasanya berisi daftar menu navigasi website
const navbarNav = document.querySelector('.navbar-nav');

// Menambahkan event listener pada tombol hamburger menu
// querySelector mencari elemen dengan ID 'hamburger-menu'
document.querySelector('#hamburger-menu').onclick = () => {
  // toggle() akan menambah class 'active' jika belum ada, atau menghapusnya jika sudah ada
  // Class 'active' biasanya digunakan untuk menampilkan/menyembunyikan menu dengan CSS
  navbarNav.classList.toggle('active');
};

// ========== SEARCH FORM FUNCTIONALITY ==========
// Bagian ini mengatur fungsionalitas form pencarian

// Mengambil elemen form pencarian dari HTML
const searchForm = document.querySelector('.search-form');
// Mengambil input field untuk mengetik pencarian
const searchBox = document.querySelector('#search-box');

// Event listener untuk tombol search
document.querySelector('#search-button').onclick = (e) => {
  // Menampilkan/menyembunyikan form pencarian dengan toggle class 'active'
  searchForm.classList.toggle('active');
  // focus() membuat cursor langsung aktif di dalam input search
  // Jadi user bisa langsung mengetik tanpa perlu klik lagi
  searchBox.focus();
  // preventDefault() mencegah perilaku default browser
  // Misalnya mencegah form submit atau navigasi link
  e.preventDefault();
};

// ========== SHOPPING CART FUNCTIONALITY ==========
// Bagian ini mengatur keranjang belanja

// Mengambil elemen keranjang belanja dari HTML
const shoppingCart = document.querySelector('.shopping-cart');

// Event listener untuk tombol keranjang belanja
document.querySelector('#shopping-cart-button').onclick = (e) => {
  // Toggle untuk menampilkan/menyembunyikan keranjang belanja
  shoppingCart.classList.toggle('active');
  // Mencegah perilaku default (misalnya jika tombol ada dalam link)
  e.preventDefault();
};

// ========== CLICK OUTSIDE TO CLOSE FUNCTIONALITY ==========
// Bagian ini membuat semua menu tertutup ketika user klik di area lain

// Menyimpan referensi ke tombol-tombol utama untuk pengecekan
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

// Event listener global yang mendeteksi setiap klik di halaman
document.addEventListener('click', function (e) {
  // Menutup navbar hamburger menu
  // contains() mengecek apakah elemen target klik ada di dalam elemen tertentu
  // Jika klik BUKAN di tombol hamburger DAN BUKAN di navbar itu sendiri
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    // Maka hapus class 'active' untuk menyembunyikan navbar
    navbarNav.classList.remove('active');
  }

  // Menutup search form dengan logika yang sama
  // Jika klik bukan di tombol search dan bukan di form search
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    // Maka sembunyikan form search
    searchForm.classList.remove('active');
  }

  // Menutup shopping cart dengan logika yang sama
  // Jika klik bukan di tombol cart dan bukan di cart itu sendiri
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    // Maka sembunyikan shopping cart
    shoppingCart.classList.remove('active');
  }
});

// ========== MODAL BOX FUNCTIONALITY ==========
// Bagian ini mengatur popup modal untuk detail produk

// Mengambil elemen modal yang berisi detail item/produk
const itemDetailModal = document.querySelector('#item-detail-modal');
// Mengambil SEMUA tombol yang bisa membuka modal detail
// querySelectorAll mengembalikan array/list dari semua elemen yang cocok
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// forEach digunakan untuk memberikan event listener ke setiap tombol detail
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    // Menampilkan modal dengan mengubah CSS display menjadi 'flex'
    // 'flex' memudahkan untuk center modal di tengah layar
    itemDetailModal.style.display = 'flex';
    // Mencegah perilaku default (biasanya navigasi link)
    e.preventDefault();
  };
});

// ========== MODAL CLOSE FUNCTIONALITY ==========
// Bagian ini mengatur tombol close (X) pada modal

// Event listener untuk tombol close di dalam modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  // Menyembunyikan modal dengan mengubah display menjadi 'none'
  itemDetailModal.style.display = 'none';
  // Mencegah perilaku default
  e.preventDefault();
};

// ========== CLICK OUTSIDE MODAL TO CLOSE ==========
// Bagian ini menutup modal ketika user klik di luar area modal

// window.onclick mendeteksi klik di mana saja di halaman
window.onclick = (e) => {
  // Mengecek apakah yang diklik adalah background modal itu sendiri
  // Bukan konten di dalam modal (seperti gambar, teks, tombol)
  if (e.target === itemDetailModal) {
    // Jika yang diklik adalah background modal, maka tutup modal
    itemDetailModal.style.display = 'none';
  }
};

// ========== RINGKASAN FUNGSIONALITAS ==========
/*
Script ini memberikan interaktivitas untuk website e-commerce dengan fitur:

1. HAMBURGER MENU: Menu navigasi yang bisa dibuka/tutup di mobile
2. SEARCH FORM: Form pencarian yang bisa ditampilkan/disembunyikan
3. SHOPPING CART: Keranjang belanja yang bisa dibuka/tutup
4. CLICK OUTSIDE: Menutup semua menu ketika klik di area lain
5. MODAL POPUP: Popup detail produk yang bisa dibuka dari tombol detail
6. MODAL CLOSE: Menutup modal dengan tombol X atau klik di luar modal

Semua fitur ini bekerja dengan cara menambah/menghapus class CSS 'active'
atau mengubah properti CSS 'display' untuk show/hide elemen.

User Experience yang dihasilkan:
- Website responsive dengan menu mobile yang rapi
- Pencarian yang mudah diakses
- Keranjang belanja yang selalu tersedia
- Detail produk yang bisa dilihat tanpa pindah halaman
- Interface yang intuitif (tutup otomatis ketika klik di luar)
*/