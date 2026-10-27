// i18n.js
const translations = {
    'zh-CN': {
        // 导航栏
        nav_brand: "AW Games", 
        nav_github: "GitHub", 
        
        // 主页 Hero
        hero_title: "AW Games",
        hero_subtitle: "代码创造世界，世界改变生活。", 
        
        // 搜索与筛选
        search_placeholder: "搜寻游戏...",
        filter_all: "全部", 
        filter_published: "已发布", 
        filter_unpublished: "未发布",
        empty_state: "没有找到相关游戏",
        
        // 分类标签
        cat_all: "所有分类", 
        cat_race: "竞速", 
        cat_battle: "战斗", 
        cat_rpg: "回合制", 
        cat_parkour: "跑酷", 
        cat_story: "剧情",
        
        // 按钮
        btn_download: "下载游戏", 
        btn_unpublished: "暂未发布", 
        
        // 游戏信息
        game_rezero_title: "Re:Zero", 
        game_rezero_desc: "《Re:从零开始的异世界生活》二创游戏，目前正在紧锣密鼓地开发中，敬请期待。",
        game_savior_title: "Savior", 
        game_savior_desc: "2D 平面战斗游戏。目前正在优化核心手感，敬请期待。",
        game_djs_title: "冲，跳，射", 
        game_djs_desc: "硬核 3D 跑酷，努力抵达最高处吧！",
        game_racecar_title: "Racecar", 
        game_racecar_desc: "体验极致的竞速快感。",
        game_zzz_title: "ZZZ", 
        game_zzz_desc: "绝区零风格小游戏集锦，富有挑战性。",
        game_starrail_title: "Starrail", 
        game_starrail_desc: "基于《崩坏：星穹铁道》世界观打造的 2D 二创回合制游戏。",

        // 问卷页
        survey_title: "游戏反馈问卷",
        survey_desc: "您的反馈对 AW 非常重要，感谢您的支持！",
        survey_game_label: "选择玩了的游戏",
        survey_game_placeholder: "请选择一款游戏",
        survey_time_label: "填写游玩时长",
        survey_time_placeholder: "例如：2 小时 / 每天玩半小时",
        survey_rating_title: "游戏评分 (1 - 10分)",
        survey_score_overall: "整体评分",
        survey_score_gameplay: "玩法评分",
        survey_score_content: "内容评分",
        survey_score_music: "音乐评分",
        survey_score_sfx: "音效评分",
        survey_score_easy: "易玩程度",
        survey_feedback_label: "其他意见或建议",
        survey_feedback_placeholder: "有任何想法、Bug反馈或建议，都可以写在这里...",
        survey_submit_btn: "提交反馈",

        // 支持我页
        support_title: "支持我",
        support_desc: "你的每一份支持，都是 AW 继续创造世界的动力。",
        support_bili_title: "关注我的 B 站",
        support_bili_desc: "在这里可以看到开发日志、游戏预告和实况。",
        support_bili_btn: "前往 Bilibili ↗",
        
        // 底部栏
        footer_author: "作者：AW",
        footer_desc: "独立游戏开发者，致力于把灵机一动的想法写进游戏。",
        footer_nav: "导航",
        footer_home: "返回主页",
        footer_interact: "互动",
        footer_survey: "问卷调查",
        footer_contact: "联系作者",
        footer_rights: "&copy; 2026 AW Games. All rights reserved."
    },
    'zh-TW': {
        // 导航栏
        nav_brand: "AW Games", 
        nav_github: "GitHub", 
        
        // 主页 Hero
        hero_title: "AW Games",
        hero_subtitle: "代碼創造世界，世界改變生活。", 
        
        // 搜索与筛选
        search_placeholder: "搜尋遊戲...",
        filter_all: "全部", 
        filter_published: "已發佈", 
        filter_unpublished: "未發佈",
        empty_state: "沒有找到相關遊戲",
        
        // 分类标签
        cat_all: "所有分類", 
        cat_race: "競速", 
        cat_battle: "戰鬥", 
        cat_rpg: "回合制", 
        cat_parkour: "跑酷", 
        cat_story: "劇情",
        
        // 按钮
        btn_download: "下載遊戲", 
        btn_unpublished: "暫未發佈", 
        
        // 游戏信息
        game_rezero_title: "Re:Zero", 
        game_rezero_desc: "《Re:從零開始的異世界生活》二創遊戲，目前正在緊鑼密鼓地開發中，敬請期待。",
        game_savior_title: "Savior", 
        game_savior_desc: "2D 平面戰鬥遊戲。目前正在優化核心手感，敬請期待。",
        game_djs_title: "衝，跳，射", 
        game_djs_desc: "硬核 3D 跑酷，努力抵達最高處吧！",
        game_racecar_title: "Racecar", 
        game_racecar_desc: "體驗極致的競速快感。",
        game_zzz_title: "ZZZ", 
        game_zzz_desc: "絕區零風格小遊戲集錦，富有挑戰性。",
        game_starrail_title: "Starrail", 
        game_starrail_desc: "基於《崩壞：星穹鐵道》世界觀打造的 2D 二創回合制遊戲。",

        // 问卷页
        survey_title: "遊戲反饋問卷",
        survey_desc: "您的反饋對 AW 非常重要，感謝您的支持！",
        survey_game_label: "選擇玩過的遊戲",
        survey_game_placeholder: "請選擇一款遊戲",
        survey_time_label: "填寫遊玩時長",
        survey_time_placeholder: "例如：2 小時 / 每天玩半小時",
        survey_rating_title: "遊戲評分 (1 - 10分)",
        survey_score_overall: "整體評分",
        survey_score_gameplay: "玩法評分",
        survey_score_content: "內容評分",
        survey_score_music: "音樂評分",
        survey_score_sfx: "音效評分",
        survey_score_easy: "易玩程度",
        survey_feedback_label: "其他意見或建議",
        survey_feedback_placeholder: "有任何想法、Bug反饋或建議，都可以寫在這裡...",
        survey_submit_btn: "提交反饋",

        // 支持我页
        support_title: "支持我",
        support_desc: "你的每一份支持，都是 AW 繼續創造世界的動力。",
        support_bili_title: "關注我的 B 站",
        support_bili_desc: "在這裡可以看到開發日誌、遊戲預告和實況。",
        support_bili_btn: "前往 Bilibili ↗",
        
        // 底部栏
        footer_author: "作者：AW",
        footer_desc: "獨立遊戲開發者，致力於把靈機一動的想法寫進遊戲。",
        footer_nav: "導航",
        footer_home: "返回主頁",
        footer_interact: "互動",
        footer_survey: "問卷調查",
        footer_contact: "聯繫作者",
        footer_rights: "&copy; 2026 AW Games. All rights reserved."
    },
    'en': {
        // 导航栏
        nav_brand: "AW Games", 
        nav_github: "GitHub", 
        
        // 主页 Hero
        hero_title: "AW Games",
        hero_subtitle: "Where code creates worlds, and worlds change lives.", 
        
        // 搜索与筛选
        search_placeholder: "Search games...",
        filter_all: "All", 
        filter_published: "Published", 
        filter_unpublished: "Unpublished",
        empty_state: "No games found",
        
        // 分类标签
        cat_all: "All Categories", 
        cat_race: "Racing", 
        cat_battle: "Battle", 
        cat_rpg: "RPG", 
        cat_parkour: "Parkour", 
        cat_story: "Story",
        
        // 按钮
        btn_download: "Download Game", 
        btn_unpublished: "Coming Soon", 
        
        // 游戏信息
        game_rezero_title: "Re:Zero", 
        game_rezero_desc: "A fan game based on 'Re:Zero'. Currently in development, stay tuned.",
        game_savior_title: "Savior", 
        game_savior_desc: "A 2D action game. Currently optimizing gameplay, stay tuned.",
        game_djs_title: "Dash, Jump, Shoot", 
        game_djs_desc: "Hardcore 3D parkour, try to reach the top!",
        game_racecar_title: "Racecar", 
        game_racecar_desc: "Experience the ultimate racing thrill.",
        game_zzz_title: "ZZZ", 
        game_zzz_desc: "A collection of ZZZ-style mini-games, highly challenging.",
        game_starrail_title: "Starrail", 
        game_starrail_desc: "A 2D fan-made RPG based on the 'Honkai: Star Rail' universe.",

        // 问卷页
        survey_title: "Game Feedback Survey",
        survey_desc: "Your feedback is very important to AW. Thank you for your support!",
        survey_game_label: "Select the game you played",
        survey_game_placeholder: "Please select a game",
        survey_time_label: "Playtime",
        survey_time_placeholder: "e.g., 2 hours / half an hour a day",
        survey_rating_title: "Game Ratings (1 - 10)",
        survey_score_overall: "Overall",
        survey_score_gameplay: "Gameplay",
        survey_score_content: "Content",
        survey_score_music: "Music",
        survey_score_sfx: "Sound Effects",
        survey_score_easy: "Ease of Play",
        survey_feedback_label: "Other Comments or Suggestions",
        survey_feedback_placeholder: "Any thoughts, bug reports, or suggestions? Write them here...",
        survey_submit_btn: "Submit Feedback",

        // 支持我页
        support_title: "Support Me",
        support_desc: "Every bit of your support is the motivation for AW to keep creating worlds.",
        support_bili_title: "Follow my Bilibili",
        support_bili_desc: "Here you can find devlogs, game trailers, and gameplay videos.",
        support_bili_btn: "Go to Bilibili ↗",
        
        // 底部栏
        footer_author: "Author: AW",
        footer_desc: "Indie game developer, dedicated to bringing spontaneous ideas to life through games.",
        footer_nav: "Navigation",
        footer_home: "Home",
        footer_interact: "Connect",
        footer_survey: "Survey",
        footer_contact: "Contact Author",
        footer_rights: "&copy; 2026 AW Games. All rights reserved."
    }
};

function setLanguage(lang) {
    localStorage.setItem('site-lang', lang);

    // 1. 替换页面文字
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // 2. 更新按钮高亮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 3. 调用重新渲染 Footer
    if (typeof renderFooter === 'function') {
        renderFooter(lang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    let currentLang = localStorage.getItem('site-lang');
    if (!currentLang) {
        const browserLang = navigator.language;
        if (browserLang.includes('TW') || browserLang.includes('HK')) currentLang = 'zh-TW';
        else if (browserLang.includes('zh')) currentLang = 'zh-CN';
        else currentLang = 'en';
    }

    // 初始化渲染
    setLanguage(currentLang);

    // 绑定按钮点击事件
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.getAttribute('data-lang'));
        });
    });
});