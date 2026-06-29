// Initial Classified Article Dataset (Written in South Azerbaijani - Arabic script)
// You can gradually add new cards directly to this Javascript array!
const articles = [
    {
        id: 1,
        title: "قارا تۏپراق نه دیر؟ نه‌دن سۏن ایللرده خبرلرده آدې چۏخ گئچیر؟",
        abstract: "سۏن ایللرده خبر باشلېقلارېنې ایزلرسه‌نیز، «قارا تۏپراق» عنوانېنا اۇغرارسېنېز اۏق. بۇ اصطلاح، یالنېز اکینچیلیک اصطلاحې دڲیل ده گۆنۆمۆزۆن سیاست، اقتصاد و چئوره بیلیمینده استراتژیک و اؤنملی بیر قۏنۇیا چئوریلمیش دیر. ایندی بۇ قارا تۏپراق نه دیر و نه‌یه سۏن وقتلرده هامېنې اؤزۆنه چکمیش دیر؟",
        category: "چئوره بیلیمی",
        tags: ["اقتصاد", "سیاست", "چئوره"],
        date: "۱۴۰۵/۰۳/۰۷",
        readTime: "۴ دقیقه",
        link: "14050307.html"
    }, 
    {
        id: 2,
        title: "صنعی ذکا و تۆرکجه‌نین ایراندا دۇرۇمۇ",
        abstract: "چاغداش دۆنیادا تکنولوژینین سرعتلی گلیشمڲی إنسان حیاتېنېن بۆتۆن ساحه‌لرینه، حتی دیل و ادبیاتا دا، درین ایز بېراخماقدا دېر. بۇ گلیشمکلرین ان باشېندا شبهه‌سیز صنعی ذکا دایانېر. صنعی ذکا سیستملری و بؤیۆک دیل مدللری دۆنیا دیللرینین دیجیتال میداندا یاشاماغې و إنکشافې اۆچۆن یئنی إمکانلار یارالدېر. بۇ اساسدا، ایراندا یاشایان میلیونلارجا تۆرکۆن آنا دیلی اۏلان تۆرکجه، صنعی ذکا عصرینده بؤیۆک فرصتلر و دقّته لایق چتینلیکلر ایله اۆز اۆزه دیر.",
        category: "بیلیم",
        tags: ["تکنولوژی", "بیلیم", "کیملیک", "دیل"],
        date: "۱۴۰۵/۰۳/۰۸",
        readTime: "۴ دقیقه",
        link: "14050308.html"
    }, 
    {
        id: 3,
        title: "«ابن تغری بردی» و اۏنۇن «النجوم الزاهرة فی ملوک مصر وقاهرة» کتابې",
        abstract: "مملوکلار دَوری، إسلام تاریخی و مدنیّتینین، خصوصییله ده تۆرک تاریخینین ان پارلاق و زنگین دَورلریندن بیری حساب اۏلۇنۇر. بۇ دَورده مصر و شام بؤلگه‌سینده قۇرۇلان تۆرک دَولتی، «دَولت الأتراک»، یالنېز حربی و سیاسی باخېمدان دڲیل، بیلیم و تاریخچیلیک ساحه‌سینده ده بیر اۏیانېشا صحنه اۏلمۇش دۇر. بۇ دَورین ان تانېنمېش و اؤنده گئدن مورّخلریندن بیری، تۆرک کؤکنلی اۏلان «ابن تغری بردی» دیر. اۏنۇن اثری اۏلان «النجوم الزاهرة فی ملوک المصر والقاهرة»، تۆرک حاکمیّتی دَورینین عینی انعکاسې و ان اعتمادلې قایناقلارېندان بیری دېر. ",
        category: "ادبیات تاریخی",
        tags: ["تاریخ", "ادبیات", "دیل"],
        date: "۱۴۰۵/۰۳/۰۹",
        readTime: "۴ دقیقه",
        link: "14050309.html"
    },
{
        id: 4,
        title: "تبریزدن تبریزه و آذربایجاندان سیبرییه",
        abstract: "سیبرینین اۏیان-بۇیانېنې گزرکن، قارلې چؤللری و سۏنسۇز مئشه‌لری باغرېندا، تانېش بیر آد ایله قارشېلاشابیله‌ریک. بۇ آد بیر لحظه‌ده إنسانې مینلرجه کیلومتر اۇزاقلېغا، آذربایجان مدنیّتینین مرکزی، تبریزه آپارېر. روسیه‌نین اۏمسک اۏبلاستېنېن تارا بؤلگه‌سینده یئرلشن تَوریز کندی، یالنېز بیر یاشام مرکزی دڲیل دیر، کؤچلرین، تجارتین، حسرتین و تاریخه گؤمۆلن اۇزاق کؤکلرین جانلې بیر شاهدی دیر.",
        category: "تاریخی",
        tags: ["تاریخ", "کیملیک", "دیل"],
        date: "۱۴۰۵/۰۴/۰۷",
        readTime: "۳ دقیقه",
        link: "14050407.html"
    }
];

// Core App State
let searchQuery = "";
let activeTag = "all";

// DOM Element Cache
const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const tagsContainer = document.getElementById("tagsContainer");
const resultsCount = document.getElementById("resultsCount");
const sectionTitle = document.getElementById("sectionTitle");
const themeToggleBtn = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

function la2ar(latin) {
    const digitDict = {
        "0":"۰", "1":"۱", "2":"۲", "3":"۳", "4":"۴", 
        "5":"۵", "6":"۶", "7":"۷", "8":"۸", "9":"۹", 
    };
    let ar = "";
    for (let i = 0; i < latin.length; i++) {
        ar += digitDict[latin[i]] || latin[i];
    }
    return ar;
}

// Theme Toggle Icon sync (Class setting already resolved instantly in <head>)
function initTheme() {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    if (isDarkMode) {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
}

themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    if (isDarkMode) {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
});

// Initialize Dynamic Tags / Keywords
function getUniqueTags() {
    const allTags = [];
    articles.forEach(article => {
        allTags.push(...article.tags);
    });
    // Get unique tags and limit to popular tags
    return ["all", ...new Set(allTags)];
}

function renderTags() {
    const uniqueTags = getUniqueTags();
    tagsContainer.innerHTML = "";
    
    uniqueTags.forEach(tag => {
        const tagElement = document.createElement("button");
        tagElement.className = `filter-tag ${tag === activeTag ? 'active' : ''}`;
        tagElement.textContent = tag === "all" ? "هامېسې" : `# ${tag}`;
        
        tagElement.addEventListener("click", () => {
            activeTag = tag;
            renderTags();
            renderArticles();
        });
        tagsContainer.appendChild(tagElement);
    });
}

// Search Handlers
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    if (searchQuery.length > 0) {
        searchClear.style.display = "flex";
    } else {
        searchClear.style.display = "none";
    }
    renderArticles();
});

searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.style.display = "none";
    renderArticles();
    searchInput.focus();
});

// Main Render Function for Articles (Cards Grid)
function renderArticles() {
    // Filter algorithm (Checks against Title, Abstract, Category, and Tags)
    const filteredArticles = articles.filter(article => {
        const matchesSearch = 
            article.title.toLowerCase().includes(searchQuery) ||
            article.abstract.toLowerCase().includes(searchQuery) ||
            article.category.toLowerCase().includes(searchQuery) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        
        const matchesTag = activeTag === "all" || article.tags.includes(activeTag);
        
        return matchesSearch && matchesTag;
    });

    // Update Header Counts & Text
    if (activeTag === "all" && searchQuery === "") {
        sectionTitle.textContent = "بۆتۆن یازېلار";
    } else if (activeTag !== "all" && searchQuery === "") {
        sectionTitle.textContent = `«${activeTag}» بؤلۆمۆنده‌کی یازېلار`;
    } else {
        sectionTitle.textContent = "آختارېش نتیجه‌لری";
    }
    
    resultsCount.textContent = `تاپېلان یازې سایېسې: ${la2ar(`${filteredArticles.length}`)} داا`;

    // Render Cards to DOM
    cardsGrid.innerHTML = "";
    
    if (filteredArticles.length === 0) {
        cardsGrid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3>تأسفله بیرر ایسه یازې تاپېلمادې!</h3>
                <p>یئنیدن آختارېنېز، یۏخ ایسه باشقا آچار سؤزلری سېنایېنېز.</p>
            </div>
        `;
        return;
    }

    filteredArticles.forEach(article => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="card-category">${article.category}</span>
                    <span class="card-date">${article.date}</span>
                </div>
                <h2 class="card-title">${article.title}</h2>
                <p class="card-abstract">${article.abstract}</p>
            </div>
            <div class="card-footer">
                <a href="${article.link}" class="card-link">
                    <span>اۏخۇ</span>
                    <svg viewBox="0 0 24 24">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </a>
                <span class="card-reading-time">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${article.readTime}</span>
                </span>
            </div>
        `;
        cardsGrid.appendChild(card);
    });
}

// On Load Initializations
window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderTags();
    renderArticles();
});
