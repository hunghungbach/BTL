// Lấy tất cả các banner
const banners = document.querySelectorAll('.banner');
const overlay = document.querySelector('#overlay');
const backButton = document.getElementById('backButton');

// Xử lý sự kiện click cho từng banner
banners.forEach(banner => {
    banner.addEventListener('click', (e) => {
        // Lấy vị trí nhấp chuột
        const x = e.clientX;
        const y = e.clientY;

        // Đặt vị trí và ảnh nền cho overlay
        overlay.style.setProperty('--x', `${x}px`);
        overlay.style.setProperty('--y', `${y}px`);
        overlay.style.backgroundImage = `url(${banner.querySelector('img').src})`;

        // Hiển thị overlay với hiệu ứng
        overlay.classList.add('active');
        
        // Hiển thị nút quay trở lại
        backButton.classList.add('visible');
    });
});

// Hiện nút quay trở lại khi di chuột gần rìa trái
document.addEventListener('mousemove', (e) => {
    if (e.clientX < 150) { // Khi di chuột gần rìa trái
        backButton.classList.add('visible');
    } else {
        backButton.classList.remove('visible'); // Ẩn nếu ra ngoài
    }
});

// Xử lý sự kiện click cho nút quay trở lại
backButton.addEventListener('click', () => {
    overlay.classList.remove('active'); // Ẩn overlay
    backButton.classList.remove('visible'); // Ẩn nút quay trở lại
});
