// DOM Elements
const articleBody = document.getElementById("articleBody");
const innerSearchInput = document.getElementById("innerSearchInput");
const innerSearchClear = document.getElementById("innerSearchClear");
const searchResultsInfo = document.getElementById("searchResultsInfo");
const btnShare = document.getElementById("btnShare");
const toastNotification = document.getElementById("toastNotification");
const btnToggleOrthography = document.getElementById("btnToggleOrthography");

// Cache original texts to dynamically switch orthography without destructive overwrites
let originalArticleHTML = articleBody.innerHTML;
let originalTitle = document.title;

// Elements outside the core article text that also need live translation mapping
const textNodesCache = [];

// Initialize state from localStorage
let currentOrthographyActive = localStorage.getItem("orthography_mode") === "custom";

// --- SECTION 1: Automatic Statistics Engine ---
function calculateStatistics() {
    const plainText = articleBody.innerText || articleBody.textContent;
    
    // 1. Characters count
    const charCount = plainText.length;
    document.getElementById("statCharacters").textContent = formatNumber(charCount);

    // 2. Words count
    const wordsArray = plainText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = wordsArray.length;
    document.getElementById("statWords").textContent = formatNumber(wordCount);

    // 3. Sentences count
    const sentencesArray = plainText.split(/[.!?؟]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentencesArray.length || 1;
    document.getElementById("statSentences").textContent = formatNumber(sentenceCount);

    // 4. Reading time
    const minutesRequired = Math.max(1, Math.ceil(wordCount / 130));
    document.getElementById("statReadTime").textContent = `${minutesRequired} د`;
}

function formatNumber(num) {
    const systemLoc = 'fa'; 
    return num.toLocaleString(systemLoc);
}

// --- SECTION 2: Mapping & Core Engine ---
function mapText(text) {
    if (!currentOrthographyActive) return text;
    return text.replace(/ې/g, "ؽ").replace(/ۏ/g, "و۟");
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Scrapes and caches all DOM text nodes outside the core article engine once on load
function indexGlobalTextNodes() {
    textNodesCache.length = 0;
    
    function walk(node) {
        // Skip the core article body completely (handled independently by highlight template backups)
        if (node === articleBody || node === btnToggleOrthography || node.id === "statCharacters" || node.id === "statWords" || node.id === "statSentences" || node.id === "statReadTime") return;
        
        if (node.nodeType === 3) { // Text Node
            const val = node.nodeValue.trim();
            if (val.length > 0) {
                textNodesCache.push({ node: node, original: node.nodeValue });
            }
        } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE', 'TEXTAREA'].includes(node.tagName)) {
            for (let i = 0; i < node.childNodes.length; i++) {
                walk(node.childNodes[i]);
            }
        }
    }
    walk(document.body);
}

function applyGlobalOrthographyAndHighlight() {
    // 1. Update Global Text Nodes (Sidebar, Header, Footer)
    textNodesCache.forEach(item => {
        item.node.nodeValue = mapText(item.original);
    });

    // 2. Update Document Title
    document.title = mapText(originalTitle);

    // 3. Update Article Body Content + Apply active search keywords highlights safely
    const query = innerSearchInput.value.trim();
    articleBody.innerHTML = originalArticleHTML;

    const escapedQuery = escapeRegExp(query);
    const regex = query ? new RegExp(`(${escapedQuery})`, 'gi') : null;
    let matchCount = 0;

    function walkArticleText(node) {
        if (node.nodeType === 3) {
            let text = node.nodeValue;
            text = mapText(text);

            if (regex && text.match(regex)) {
                matchCount += (text.match(regex) || []).length;
                const span = document.createElement('span');
                span.innerHTML = text.replace(regex, '<mark class="highlight">$1</mark>');
                node.parentNode.replaceChild(span, node);
            } else {
                node.nodeValue = text;
            }
        } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE', 'TEXTAREA'].includes(node.tagName)) {
            for (let i = 0; i < node.childNodes.length; i++) {
                walkArticleText(node.childNodes[i]);
            }
        }
    }

    walkArticleText(articleBody);

    // Update highlights counters panel
    if (query) {
        searchResultsInfo.style.display = "block";
        searchResultsInfo.textContent = `${mapText("تاپېلان سؤزجۆک سایېسې")}: ${formatNumber(matchCount)}`;
    } else {
        searchResultsInfo.style.display = "none";
    }

    // Refresh dynamic analytics blocks
    calculateStatistics();
}

// --- SECTION 3: Listeners & Controllers ---
innerSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    innerSearchClear.style.display = query.length > 0 ? "flex" : "none";
    applyGlobalOrthographyAndHighlight();
});

innerSearchClear.addEventListener("click", () => {
    innerSearchInput.value = "";
    innerSearchClear.style.display = "none";
    applyGlobalOrthographyAndHighlight();
    innerSearchInput.focus();
});

function updateToggleButtonUI() {
    if (currentOrthographyActive) {
        btnToggleOrthography.querySelector("span").textContent = "املانې دڲیشدیر (ۏ/ې طرزی)";
    } else {
        btnToggleOrthography.querySelector("span").textContent = "املانې دڲیشدیر (و۟/ؽ طرزی)";
    }
}

btnToggleOrthography.addEventListener("click", () => {
    currentOrthographyActive = !currentOrthographyActive;
    localStorage.setItem("orthography_mode", currentOrthographyActive ? "custom" : "standard");
    
    updateToggleButtonUI();
    applyGlobalOrthographyAndHighlight();
});

// --- SECTION 4: Sharing Engine ---
btnShare.addEventListener("click", () => {
    const dummyInput = document.createElement("input");
    dummyInput.value = window.location.href;
    document.body.appendChild(dummyInput);
    dummyInput.select();
    document.execCommand('copy');
    document.body.removeChild(dummyInput);

    toastNotification.classList.add("show");
    setTimeout(() => {
        toastNotification.classList.remove("show");
    }, 2500);
});

// --- SECTION 5: Theme Sync System ---
const themeToggleBtn = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

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

// Initializer Runtime Execution
window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    indexGlobalTextNodes(); // Maps the tree once
    updateToggleButtonUI(); // Aligns button styling with local storage configuration
    applyGlobalOrthographyAndHighlight(); // Renders state modifications
});