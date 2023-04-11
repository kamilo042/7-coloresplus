const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/logo1.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">HOME</a></li>
    <li class="link-item"><a href="product.html" class="link">PRODUCT</a></li>
    <li class="link-item"><a href="#" class="link">NEW IN</a></li>
    <li class="link-item"><a href="#" class="link">POSTERS</a></li>
    <li class="link-item"><a href="#" class="link">GREETING CARDS</a></li>
</ul>
    `;

}

createNav();