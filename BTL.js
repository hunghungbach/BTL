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
        description: 'Sinh Nhật: 09/02/2005 - Cung Bảo Bình<br>Sở Thích: Mình thích Porche, game nhàn rỗi, và xem phim<br>Ngoài ra, mình còn đam mê NGHÈO<br>Mục tiêu trước mắt: Mình muốn kiếm một quý cô fuba và giàu nổi<br>Mục tiêu lâu dài: Cố gắng hiểu thêm về HTML, CSS và JS để có thể trở thành một IT tài năng trong tương lai<br>Liên hệ với mình qua:<br>  -Email: <a href="mailto:223001878@daihocthudo.edu.vn" class="custom-link" target="_blank">Tại Đây</a><br>Mạng xã hội:<br>  -Facebook: <a href="https://web.facebook.com/profile.php?id=100055891231892" class="custom-link" target="_blank">Tại Đây</a><br>  -Instagram: <a href="https://www.instagram.com/tdson_2005/profilecard/?igsh=MWkwYmZlNXl6OGwzZA==" class="custom-link" target="_blank">Tại Đây</a><br>  -Locket: <a href="https://locket.camera/links/gAuNmcVSmkQ1xtYp7" class="custom-link" target="_blank">Tại Đây</a><br>Những điều đặc biệt về mình:<br>  -Mình rất thích món Croissant<br>  -Mình vừa bị ăn mất cái bánh kem do chị xinh gái mua cho nên mình rất buồn<br>  -Mèo là một ngoại lệ cho bất kì việc gì với mình<br>Tiểu sử:<br>  -Mình sinh ra và lớn lên tại Vĩnh Phúc, đã từng học tại trường Trung Học Phổ Thông Nguyễn Thái Học, hiện đang theo học tại Trường Đại Học<br>Thủ Đô Hà Nội. Mình luôn yêu thích việc học hỏi và khám phá những điều mới mẻ. Mong muốn của mình là có thể kết nối và làm quen với thật<br>nhiều bạn mới để cùng nhau học tập và phát triển.'
    },
    Hung: {
        name: 'Trần Đăng Hưng',
        description: 'Sinh Nhật: 27/12/2005 - Cung Ma Kết<br>Sở Thích: Mình thích chiêm tinh, tarot, đi cinema và chơi một vài game nhàn nhã<br>Hơn hết mình nghèo nhưng thích nuôi mèo<br>Mục tiêu trước mắt: Chạy hết deadline để giải phóng bản thân khỏi chiếc bàn học tập và xiềng xích của tư bản<br>Mục tiêu lâu dài: Học hỏi thêm về các ngôn ngữ code như C#, Python cũng như là hiểu thêm về HTML, JS và CSS<br>Liên hệ với mình qua:<br>  -Email: <a href="mailto:223001742@daihocthudo.edu.vn" class="custom-link" target="_blank">Tại Đây</a><br>Mạng xã hội:<br>  -Facebook: <a href="https://web.facebook.com/hungkokoo" class="custom-link" target="_blank">Tại Đây</a><br>  -Instagram: <a href="https://www.instagram.com/ma563du/" class="custom-link" target="_blank">Tại Đây</a><br>Những điều đặc biệt về mình:<br>  -Mình rất thích đồ ngọt<br>  -Mình đôi lúc hơi vô tri<br>  -Mình đã có 1 con mèo 1 năm tuổi và rất rất yêu nó<br>Tiểu sử:<br>  -Sinh ra và lớn lên tại Hà Nội, mình từng gắn bó với những kỷ niệm thời học sinh tại THPT Xuân Phương và hiện đang tiếp tục hành trình<br>tri thức tại Đại học Thủ đô Hà Nội. Mình đam mê tìm tòi, luôn muốn khám phá những điều mới mẻ để hoàn thiện bản thân mỗi ngày.<br>Mình mong muốn gặp gỡ nhiều bạn bè mới, xây dựng những mối quan hệ bền chặt và cùng nhau chia sẻ kiến thức, tạo ra những kỷ niệm đáng nhớ.<br>Việc được học hỏi từ mọi người xung quanh và khám phá những chân trời mới luôn là động lực giúp mình tiến bước trong cuộc sống.'
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
    'url("")',
    'url("")',
    'url("")'
];
let currentBackgroundIndex = 0;

function updateBackground() {
    const nextBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.setProperty('--background-image-2', backgrounds[nextBackgroundIndex]);
    document.body.style.setProperty('--background-image-1', backgrounds[currentBackgroundIndex]);

    document.body.classList.add('fade');
    setTimeout(() => {
        document.body.style.setProperty('--background-image-1', backgrounds[nextBackgroundIndex]);
        currentBackgroundIndex = nextBackgroundIndex;
        document.body.classList.remove('fade');
    }, 1500);
}

updateBackground();
setInterval(updateBackground, 7000);