// JavaScript cho các hiệu ứng cuộn và tương tác khác
document.addEventListener('DOMContentLoaded', function() {
    // Thêm các hiệu ứng cuộn hoặc tương tác khác ở đây
});
document.addEventListener('DOMContentLoaded', function () {
    // Chọn tất cả các phần tử có class "fade-in"
    const fadeElements = document.querySelectorAll('.fade-in');

    // Kiểm tra xem phần tử có nằm trong vùng nhìn thấy không
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
    });

    // Gắn observer vào từng phần tử
    fadeElements.forEach(el => observer.observe(el));
});
// JavaScript cho các hiệu ứng cuộn và tương tác khác
document.addEventListener('DOMContentLoaded', function () {
    // Chọn tất cả các phần tử có class "fade-in"
    const fadeElements = document.querySelectorAll('.fade-in');

    // Kiểm tra xem phần tử có nằm trong vùng nhìn thấy không
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
    });

    // Gắn observer vào từng phần tử
    fadeElements.forEach(el => observer.observe(el));
});
// Thêm logic cho nút cuộn lên đầu
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Hiển thị nút khi cuộn xuống
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Xuất hiện khi cuộn xuống hơn 200px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Cuộn mượt mà lên đầu khi nhấn
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// JavaScript cho nhiều hiệu ứng
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .rotate-in, .zoom-in, .fade-in-bg, .bounce-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
    });

    animatedElements.forEach(el => observer.observe(el));
});

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-slide');
    const slideButton = document.getElementById('slideButton');

    slideButton.addEventListener('click', () => {
        images.forEach((image) => {
            image.classList.toggle('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG') {
                const src = event.target.getAttribute('src');
                const alt = event.target.getAttribute('alt');
                alert(`You clicked on ${alt} with source ${src}`);
            }
        });
    });
});
  // JavaScript để xử lý Lightbox
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('img');

  galleryImages.forEach(image => {
      image.addEventListener('click', () => {
          const largeImageURL = image.getAttribute('data-large');
          lightboxImage.src = largeImageURL;
          lightbox.style.display = 'flex';
      });
  });

  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
          lightbox.style.display = 'none';
      }
  });
  function showAlbum(albumNumber) {
    const albums = document.querySelectorAll('.album');
    albums.forEach((album, index) => {
        album.style.display = (index + 1 === albumNumber) ? 'block' : 'none';
    });
}
