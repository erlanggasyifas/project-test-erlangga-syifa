document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById("mainNav");
    const jumbotronImage = document.querySelector(".jumbotron .custom-image");
    const jumbotronText = document.querySelector(".jumbotron .overlay");
    const itemInfo = document.getElementById("itemInfo"); 

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let offset = scrollTop * 0.5;
        jumbotronImage.style.transform = `translateY(${offset}px)`;
        jumbotronText.style.transform = `translate(-50%, calc(-50% + ${offset * 0.5}px))`;

        if (scrollTop > lastScrollTop) {
            navbar.classList.remove("scrolled-up");
            navbar.classList.add("scrolled-down");
        } else {
            navbar.classList.remove("scrolled-down");
            navbar.classList.add("scrolled-up");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    let links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    const posts = [
        { id: 1, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2023-07-01' },
        { id: 2, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 3, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2021-06-01' },
        { id: 4, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 5, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 6, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 7, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 8, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 9, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 10, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 11, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 12, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 13, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 14, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 15, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 16, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 17, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 18, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 19, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 20, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 21, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 22, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 23, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 24, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 25, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 26, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 27, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 28, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 29, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 30, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 31, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 32, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 33, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 34, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 35, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 36, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 37, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 38, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 39, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 40, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 41, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 42, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 43, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 44, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 45, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 46, title: 'Post Title 1', thumbnail: 'assets/basket-court.jpg', date: '2024-06-01' },
        { id: 47, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 48, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 49, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 50, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
        { id: 51, title: 'Post Title 1', thumbnail: 'assets/banner-img.png', date: '2024-06-01' },
    ];

    const postList = document.getElementById('postList');
    const sortSelect = document.getElementById('sortSelect');
    const itemsPerPage = document.getElementById('itemsPerPage');
    const pagination = document.getElementById('pagination');
    let currentPage = 1;

    function renderPosts() {
        const sortedPosts = sortPosts(posts);
        const paginatedPosts = paginatePosts(sortedPosts);
        postList.innerHTML = '';
        paginatedPosts.forEach(post => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6 mb-4';
            col.innerHTML = `
                <div class="card">
                    <img data-src="${post.thumbnail}" alt="${post.title}" class="card-img-top lazyload">
                    <div class="card-body">
                        <p class="card-text">${post.date}</p>
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                </div>`;
            postList.appendChild(col);
        });
        lazyload();
        showItemInfo(paginatedPosts.length);
    }

    function sortPosts(posts) {
        const sortBy = sortSelect.value;
        if (sortBy === 'newest') {
            return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
    }

    function paginatePosts(posts) {
        const perPage = parseInt(itemsPerPage.value);
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        return posts.slice(start, end);
    }

    function renderPagination(totalPosts) {
        const totalPages = Math.ceil(totalPosts / parseInt(itemsPerPage.value));
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = 'page-item' + (i === currentPage ? ' active' : '');
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderPosts();
                renderPagination(posts.length);
            });
            pagination.appendChild(li);
        }
    }

    sortSelect.addEventListener('change', () => {
        currentPage = 1;
        renderPosts();
        renderPagination(posts.length);
    });

    itemsPerPage.addEventListener('change', () => {
        currentPage = 1;
        renderPosts();
        renderPagination(posts.length);
    });

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('sort', sortSelect.value);
        localStorage.setItem('itemsPerPage', itemsPerPage.value);
        localStorage.setItem('currentPage', currentPage);
    });

    window.addEventListener('load', () => {
        if (localStorage.getItem('sort')) {
            sortSelect.value = localStorage.getItem('sort');
        }
        if (localStorage.getItem('itemsPerPage')) {
            itemsPerPage.value = localStorage.getItem('itemsPerPage');
        }
        if (localStorage.getItem('currentPage')) {
            currentPage = parseInt(localStorage.getItem('currentPage'));
        }
        renderPosts();
        renderPagination(posts.length);
    });

    function lazyload() {
        const images = document.querySelectorAll('.lazyload');
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazyload');
            }
        });
    }

    function showItemInfo(currentItemCount) {
        const perPage = parseInt(itemsPerPage.value);
        const startItem = (currentPage - 1) * perPage + 1;
        const endItem = Math.min(startItem + currentItemCount - 1, posts.length);
        const totalItems = posts.length;
        const infoText = `Showing ${startItem} - ${endItem} of ${totalItems}`;
        itemInfo.textContent = infoText;
    }
    const fullyBackBtn = document.getElementById('fullyBackBtn');
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const fullyForwardBtn = document.getElementById('fullyForwardBtn');

    fullyBackBtn.addEventListener('click', () => {
        currentPage = 1;
        renderPosts();
        renderPagination(posts.length);
    });

    backBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPosts();
            renderPagination(posts.length);
        }
    });

    forwardBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(posts.length / parseInt(itemsPerPage.value));
        if (currentPage < totalPages) {
            currentPage++;
            renderPosts();
            renderPagination(posts.length);
        }
    });

    fullyForwardBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(posts.length / parseInt(itemsPerPage.value));
        currentPage = totalPages;
        renderPosts();
        renderPagination(posts.length);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://suitmedia-backend.suitdev.com/api/ideas';
    const params = new URLSearchParams({
        'page[number]': 1,
        'page[size]': 10,
        'append[]': ['small_image', 'medium_image'],
        'sort': '-published_at'
    });

    fetch(apiUrl + '?' + params, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

