// footer.js
function renderFooter(lang) {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const dict = (typeof translations !== 'undefined' && translations[lang]) 
        ? translations[lang] 
        : (typeof translations !== 'undefined' ? translations['zh-CN'] : {});

    footerPlaceholder.innerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-col">
                    <h3>AW Games</h3>
                    <p class="author-name">${dict.footer_author || "作者：AW"}</p>
                    <p class="author-desc">${dict.footer_desc || "独立游戏开发者，致力于把灵机一动的想法写进游戏。"}</p>
                </div>
                <div class="footer-col">
                    <h4>${dict.footer_nav || "导航"}</h4>
                    <ul class="footer-list">
                        <!-- 移除了“支持我” -->
                        <li><a href="index.html">${dict.footer_home || "返回主页"}</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>${dict.footer_interact || "互动"}</h4>
                    <ul class="footer-list">
                        <li><a href="survey.html">${dict.footer_survey || "问卷调查"}</a></li>
                        <li><a href="mailto:antw6426@gmail.com">${dict.footer_contact || "联系作者"}</a></li>
                        <li><a href="https://space.bilibili.com/1385308308" target="_blank">Bilibili ↗</a></li>
                        <li><a href="https://github.com/aw-gd/AWGames" target="_blank">GitHub ↗</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${dict.footer_rights || "&copy; 2026 AW Games. All rights reserved."}</p>
            </div>
        </footer>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const currentLang = localStorage.getItem('site-lang') || 'zh-CN';
        renderFooter(currentLang);
    }, 50);
});