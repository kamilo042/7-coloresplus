const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo1.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Cards</li>
            <li><a href="#" class="footer-link">Birthday Cards</a></li>
            <li><a href="#" class="footer-link">Greeting Cards</a></li>
            <li><a href="#" class="footer-link">Puzzle Cards</a></li>
            <li><a href="#" class="footer-link">Notebooks</a></li>
            <li><a href="#" class="footer-link">Journals</a></li>
            <li><a href="#" class="footer-link">Moms day</a></li>
            <li><a href="#" class="footer-link">Fathers day</a></li>
            <li><a href="#" class="footer-link">Posters</a></li>
            <li><a href="#" class="footer-link">Books</a></li>
            <li><a href="#" class="footer-link">Random</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">More</li>
            <li><a href="#" class="footer-link">Birthday Cards</a></li>
            <li><a href="#" class="footer-link">Greeting Cards</a></li>
            <li><a href="#" class="footer-link">Puzzle</a></li>
            <li><a href="#" class="footer-link">Notebooks</a></li>
            <li><a href="#" class="footer-link">Journals</a></li>
            <li><a href="#" class="footer-link">Moms day</a></li>
            <li><a href="#" class="footer-link">Fathers day</a></li>
            <li><a href="#" class="footer-link">Posters</a></li>
            <li><a href="#" class="footer-link">Books</a></li>
            <li><a href="#" class="footer-link">Random</a></li>
        </ul>
    </div>
   
</div>
<p class="footer-title">About Company</p>
<p class="info"> 
    Welcome to "Simplicity Stationery", where the essence of minimalism is celebrated in every product we offer. Our stationery is designed with clean lines, sleek finishes, and a focus on functionality. We believe that less is more and that the beauty of simplicity lies in its ability to highlight the essence of an object. From notebooks to pens, every item in our collection has been thoughtfully curated to elevate your daily routines. Our mission is to inspire simplicity, creativity, and organization in every aspect of your life. Experience the art of minimalism with "Simplicity Stationery".
</p>
<p class="info">Support emails- kamilo042.cp@gmail.com</p>
<p class="info">Telephone +57 300 630 7557</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms and services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>    
</div>
<p class="footer-credit">Creative cards, Creative moments</p>
    `;
}

createFooter();