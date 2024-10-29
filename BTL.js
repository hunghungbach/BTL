// Lấy tất cả các banner
const banners = document.querySelectorAll('.banner');
const overlay = document.querySelector('#overlay');
const backButton = document.getElementById('backButton');
const profileContent = document.getElementById('profileContent');
const profileName = document.getElementById('profileName');
const profileDescription = document.getElementById('profileDescription');

// Dữ liệu thông tin cá nhân cho từng banner
const profileData = {
    My: {
        name: 'Nguyễn Trà My',
        description: 'Sinh ngày: <br>Sở thích: <br>'
    },
    Son: {
        name: 'Tạ Đức Sơn',
        description: 'Thông tin về Son: <Br>Chuyên gia phát triển phần mềm và có kinh nghiệm<br> trong quản lý dự án.'
    },
    Hung: {
        name: 'Trần Đăng Hưng',
        description: 'Thông tin về Hung: Một người đam mê công nghệ và luôn tìm tòi học hỏi những điều mới.'
    },
    Ki: {
        name: 'Nguyễn Cao Kỳ',
        description: 'Thông tin về Ki: Nhà thiết kế đồ họa với sự sáng tạo và tỉ mỉ trong từng sản phẩm.'
    }
};

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

        // Hiển thị thông tin cá nhân
        const profileKey = banner.classList[1]; // Lấy tên lớp thứ hai làm khóa
        profileName.textContent = profileData[profileKey].name;
        profileDescription.innerHTML = profileData[profileKey].description;

        // Hiển thị nút quay trở lại
        backButton.classList.add('visible');
    });
});

// Hiện nút quay trở lại khi di chuột gần rìa trái
document.addEventListener('mousemove', (e) => {
    if (e.clientX < 150) {
        backButton.classList.add('visible');
    } else {
        backButton.classList.remove('visible');
    }
});

// Xử lý sự kiện click cho nút quay trở lại
backButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    backButton.classList.remove('visible');
});

const backgrounds = [
    'url("https://tl.cdnchinhphu.vn/344445545208135680/2022/10/11/dai-hoc-thu-do-16654910570421220818521.png")',
    'url("https://cafefcdn.com/203337114487263232/2022/10/30/photo-1-16671039984241626240805.jpg")',
    'url("link3.jpg")',
    'url("link4.jpg")',
    'url("link5.jpg")'
];
let currentBackgroundIndex = 0;

function updateBackground() {
    const nextBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.setProperty('--background-image-2', backgrounds[nextBackgroundIndex]);
    document.body.style.setProperty('--background-image-1', backgrounds[currentBackgroundIndex]);

    // Mờ dần ảnh hiện tại và hiện ảnh mới
    document.body.classList.add('fade');
    setTimeout(() => {
        document.body.style.setProperty('--background-image-1', backgrounds[nextBackgroundIndex]);
        currentBackgroundIndex = nextBackgroundIndex;
        document.body.classList.remove('fade');
    }, 1500);
}

setInterval(updateBackground, 7000);
