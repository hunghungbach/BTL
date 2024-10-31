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
        description: 'Sinh Nhật: 14/10/2005 - Cung Thiên Bình<br>Sở Thích: Mình thích Ngủ, Hát, Nghe Nhạc<br>Mục tiêu trước mắt: Chưa suy nghĩ được<br>Mục tiêu lâu dài: Sau này có cuộc sống an nhàn, vô lo vô nghĩ<br>Liên hệ với mình qua:<br>  -Email: <a href="mailto:223001768@daihocthudo.edu.vn" class="custom-link" target="_blank">Đây nè</a><br>Mạng xã hội:<br>  -Facebook: <a href="https://www.facebook.com/nguyentramy141025" class="custom-link" target="_blank">Dưới này :D</a><br> Bí mật nhỏ của mình:<br>  -Mình rất thích ăn, mình không hề kén ăn và mình ăn rất nhiều<br> Tiểu sử:<br>  -Mình lớn lên ở Thanh Hoá, nơi gắn bó với bao kỷ niệm tuổi thơ. Hồi đó, mình học ở trường Mai Anh Tuấn, nơi đã tạo ra biết bao niềm vui<br>và cả những thử thách đầu đời. Bạn bè, thầy cô ở đấy luôn là những người đồng hành thân thiết, giúp mình dần nhận ra con đường mình<br>muốn đi. Giờ đây, mình đang theo học ở Đại Học Thủ Đô Hà Nội, hy vọng hành trình học hành sẽ thuận lợi để mình phát triển và làm được<br>những điều có ý nghĩa. Hy vọng mọi thứ sẽ diễn ra tốt đẹp!',
        sticker: 'https://shopthietke.com/wp-content/uploads/edd/2020/01/B%E1%BB%99-Sticker-500-PNG-Cute-D%E1%BB%85-Th%C6%B0%C6%A1ng-%C4%90%E1%BB%83-Gh%C3%A9p-%E1%BA%A2nh-7-Copy.png'
    },
    Son: {
        name: 'Tạ Đức Sơn',
        description: 'Sinh Nhật: 09/02/2005 - Cung Bảo Bình<br>Sở Thích: Mình thích Porche, game nhàn rỗi, và xem phim<br>Ngoài ra, mình còn đam mê NGHÈO<br>Mục tiêu trước mắt: Mình muốn kiếm một quý cô fuba và giàu nổi<br>Mục tiêu lâu dài: Cố gắng hiểu thêm về HTML, CSS và JS để có thể trở thành một IT tài năng trong tương lai<br>Liên hệ với mình qua:<br>  -Email: <a href="mailto:223001878@daihocthudo.edu.vn" class="custom-link" target="_blank">Tại Đây</a><br>Mạng xã hội:<br>  -Facebook: <a href="https://web.facebook.com/profile.php?id=100055891231892" class="custom-link" target="_blank">Tại Đây</a><br>  -Instagram: <a href="https://www.instagram.com/tdson_2005/profilecard/?igsh=MWkwYmZlNXl6OGwzZA==" class="custom-link" target="_blank">Tại Đây</a><br>  -Locket: <a href="https://locket.camera/links/gAuNmcVSmkQ1xtYp7" class="custom-link" target="_blank">Tại Đây</a><br>Những điều đặc biệt về mình:<br>  -Mình rất thích món Croissant<br>  -Mình vừa bị ăn mất cái bánh kem do chị xinh gái mua cho nên mình rất buồn<br>  -Mèo là một ngoại lệ cho bất kì việc gì với mình<br>Tiểu sử:<br>  -Mình sinh ra và lớn lên tại Vĩnh Phúc, đã từng học tại trường Trung Học Phổ Thông Nguyễn Thái Học, hiện đang theo học tại Trường Đại Học<br>Thủ Đô Hà Nội. Mình luôn yêu thích việc học hỏi và khám phá những điều mới mẻ. Mong muốn của mình là có thể kết nối và làm quen với thật<br>nhiều bạn mới để cùng nhau học tập và phát triển.',
        sticker: 'https://i.pinimg.com/564x/fb/8a/1d/fb8a1dfb88cbed6a315bdcebb1105bde.jpg'
    },
    Hung: {
        name: 'Trần Đăng Hưng',
        description: 'Sinh Nhật: 27/12/2005 - Cung Ma Kết<br>Sở Thích: Mình thích chiêm tinh, tarot, đi cinema và chơi một vài game nhàn nhã<br>Hơn hết mình nghèo nhưng thích nuôi mèo<br>Mục tiêu trước mắt: Chạy hết deadline để giải phóng bản thân khỏi chiếc bàn học tập và xiềng xích của tư bản<br>Mục tiêu lâu dài: Học hỏi thêm về các ngôn ngữ code như C#, Python cũng như là hiểu thêm về HTML, JS và CSS<br>Liên hệ với mình qua:<br>  -<a href="mailto:223001742@daihocthudo.edu.vn" class="custom-link" target="_blank">Email</a><br>Mạng xã hội:<br>  -<a href="https://web.facebook.com/hungkokoo" class="custom-link" target="_blank">Facebook</a><br>  -<a href="https://www.instagram.com/ma563du/" class="custom-link" target="_blank">Instagram</a><br>Những điều dễ thấy về mình:<br>  -Mình rất thích đồ ngọt<br>  -Mình đôi lúc hơi vô tri<br>  -Dokki rủ là đi :D<br>Tiểu sử:<br>  -Sinh ra và lớn lên tại Hà Nội, mình từng gắn bó với những kỷ niệm thời học sinh tại THPT Xuân Phương và hiện đang tiếp tục hành trình<br>tri thức tại Đại học Thủ đô Hà Nội. Mình đam mê tìm tòi, luôn muốn khám phá những điều mới mẻ để hoàn thiện bản thân mỗi ngày.<br>Dù có hơi ngại ngùng nhưng mình vẫn mong muốn gặp gỡ nhiều bạn bè mới, xây dựng những mối quan hệ bền chặt và cùng nhau chia sẻ<br>kiến thức, tạo ra những kỷ niệm đáng nhớ. Việc được học hỏi từ mọi người xung quanh và khám phá những chân trời mới luôn là động lực<br>giúp mình tiến bước trong cuộc sống.',
        sticker: 'https://i.pinimg.com/564x/46/44/0b/46440bd54394ee31a88f761a12a7d7bf.jpg'
    },
    Ki: {
        name: 'Nguyễn Cao Kỳ',
        description: 'Sinh Nhật: 02/11/2005 <br>Sở Thích: Xem phim, nghe nhạc và chơi game<br>Đặc biệt mình thích các dòng phim Anime, một số dòng phim Tokusatsu ,Donghua và các bộ phim 3D <br>Mục tiêu trước mắt: qua môn và sống qua ngày<br>Mục tiêu lâu dài: Tiếp thu thêm kiến thức về ngành để có thể áp dụng trong công việc sau này<br>Liên hệ với mình qua:<br> -Email: <a href="mailto:223001748@daihocthudo.edu.vn" class="custom-link" target="_blank">Tại Đây</a><br>Với niềm đam mê về phim mình mong muốn giới thiệu / recommend cho mọi người các web coi phim sau:<br> -HHPANDA: <a href="https://hhpanda.info/" class="custom-link" target="_blank">Nơi xem Toku</a><br> -Unmei Fansub: <a href=" https://www.facebook.com/UnmeiTOFU " class="custom-link" target="_blank">Nơi xem Anime</a><br> -MuseVN: <a href=" https://www.youtube.com/c/MuseVi%E1%BB%87tNam " class="custom-link" target="_blank">Tại Đây</a><br> Tiểu sử:<br> -Mình sinh ra và lớn lên ở Hà Nội, sống ở Long Biên, nơi mà mỗi góc phố đều gợi nhớ những kỷ niệm tuổi thơ tươi đẹp. Hàng ngày, mình vẫn<br>thường đi dạo quanh khu phố, cảm nhận không khí quen thuộc và thân thuộc của nơi này. Hiện tại, mình đang theo học tại Trường Đại Học<br>Thủ Đô Hà Nội, nơi mình hy vọng sẽ mở ra nhiều cơ hội và mang lại cho mình những trải nghiệm thú vị. Mình rất mong hành trình học tập<br>này sẽ suôn sẻ, giúp mình trang bị được kiến thức và kỹ năng cần thiết để theo đuổi ước mơ của bản thân trong tương lai.',
        sticker: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462568274_1307207153605157_8110175956603165962_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeExFir8LG9hP3JexN1X35ifnNppzFHSQ9qc2mnMUdJD2qP4R_YL8PKhYoyrIPt4gToaIiNOH65v5vgE5dM-Qbai&_nc_ohc=4Smq5qqiJhgQ7kNvgF4dZdW&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AHHqjrI_A-CuNsf7bOeSF-8&oh=03_Q7cD1QHpDl2r8ST2bp0CVZL5TK4hstLBd9cFOeRN38pR1PfvUw&oe=674B0166'
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

        // Cập nhật sticker
        const sticker = document.getElementById('sticker1'); // Lấy sticker
        sticker.src = profileData[profileKey].sticker; // Cập nhật hình ảnh sticker

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