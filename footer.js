// footer.js
document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="site-footer">
                <div class="footer-container">
                    <div class="footer-col">
                        <h3>AW Games</h3>
                        <p class="author-name">作者：AW</p>
                        <p class="author-desc">独立游戏开发者。热爱编程与创造，致力于制作有趣、简单、纯粹的小游戏。</p>
                    </div>
                    <div class="footer-col">
                        <h4>导航</h4>
                        <ul class="footer-list">
                            <li><a href="index.html">返回主页</a></li>
                            <li><a href="mailto:antw6426@gmail.com">联系作者</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>互动</h4>
                        <ul class="footer-list">
                            <li><a href="survey.html">问卷调查</a></li>
                            <li><a href="https://github.com/aw-gd/AWGames" target="_blank">GitHub 仓库 ↗</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 AW Games. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
});