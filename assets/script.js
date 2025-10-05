// Navigation Menu Items - Edit this array to add/remove menu items
const menuItems = [
    { href: 'index.html', icon: 'fas fa-home', text: 'Home' },
    { href: 'tips.html', icon: 'fas fa-lightbulb', text: 'Tips & Tricks' },
    { href: 'apps.html', icon: 'fas fa-mobile-alt', text: 'Apps & Websites' },
    { href: 'tools.html', icon: 'fas fa-tools', text: 'Tools' }
];

// Load Navigation and Header Dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Create navigation HTML
    const menuHTML = menuItems.map(item => 
        `<li><a href="${item.href}"><span class="icon"><i class="${item.icon}"></i></span><span class="text">${item.text}</span></a></li>`
    ).join('');
    
    const headerHTML = `
        <header class="top-header">
            <div class="site-title">
                <a href="index.html">TechSite</a>
            </div>
            <div class="header-search">
                <input type="text" id="global-search" placeholder="Search tips, apps, or tools...">
                <div id="search-dropdown" class="search-dropdown"></div>
            </div>
        </header>
    `;
    
    const navHTML = `
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="sidebar" id="sidebar">
            <ul>
                ${menuHTML}
            </ul>
        </nav>
    `;
    
    // Insert header and navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML + navHTML);
    
    // Initialize hamburger menu
    initializeMenu();
    
    // Load data and initialize page content
    loadAllData();
});

// Hamburger Menu Toggle
function initializeMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }
}

// Global Search Functionality
function initializeGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    const searchDropdown = document.getElementById('search-dropdown');
    
    if (!searchInput || !searchDropdown) return;
    
    const allData = [...tipsData, ...appsData, ...toolsData];
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        const matches = allData.filter(item => {
            const title = (item.title || item.name || '').toLowerCase();
            const description = (item.description || '').toLowerCase();
            return title.includes(query) || description.includes(query);
        }).slice(0, 5); // Show max 5 results
        
        if (matches.length > 0) {
            searchDropdown.innerHTML = matches.map(item => `
                <div class="search-result-item">
                    <strong>${item.title || item.name}</strong>
                    <p>${item.description}</p>
                    ${item.url ? `<a href="${item.url}" target="_blank">Visit</a>` : ''}
                </div>
            `).join('');
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.innerHTML = '<div class="search-result-item">No results found</div>';
            searchDropdown.style.display = 'block';
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });
}

// Data will be loaded from JSON files
let tipsData = [];
let appsData = [];
let toolsData = [];

// Helper to fetch JSON data
async function fetchData(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        return [];
    }
}

// Load all data
async function loadAllData() {
    tipsData = await fetchData('data/tips.json');
    appsData = await fetchData('data/apps.json');
    toolsData = await fetchData('data/tools.json');
    
    // Initialize page-specific functionality after data is loaded
    initializePageContent();
}

function createCard(item) {
    const hasDetailPage = item.detailPage;
    const detailLink = hasDetailPage ? `<a href="${item.detailPage}" class="btn-detail">Learn More</a>` : '';
    const externalLink = item.url ? `<a href="${item.url}" target="_blank">Visit</a>` : '';
    
    return `
        <div class="card">
            <h3>${item.title || item.name}</h3>
            <p>${item.description}</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${detailLink}
                ${externalLink}
            </div>
            <div><small>Category: ${item.category || 'General'}</small></div>
        </div>
    `;
}

// Initialize page-specific content after data is loaded
function initializePageContent() {
    // Home page: Show top tips and tools
    if (document.getElementById('top-tips')) {
        document.getElementById('top-tips').innerHTML = tipsData.slice(0, 3).map(createCard).join('');
    }
    if (document.getElementById('top-tools')) {
        document.getElementById('top-tools').innerHTML = toolsData.slice(0, 3).map(createCard).join('');
    }

    // Tips page
    if (document.getElementById('tips-list')) {
        const categories = [...new Set(tipsData.map(t => t.category))];
        const select = document.getElementById('tips-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('tips-list').innerHTML = tipsData.filter(t => !val || t.category === val).map(createCard).join('');
        };
        select.onchange();
    }

    // Apps page
    if (document.getElementById('apps-list')) {
        const categories = [...new Set(appsData.map(a => a.category))];
        const select = document.getElementById('apps-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('apps-list').innerHTML = appsData.filter(a => !val || a.category === val).map(createCard).join('');
        };
        select.onchange();
    }

    // Tools page
    if (document.getElementById('tools-list')) {
        const categories = [...new Set(toolsData.map(t => t.category))];
        const select = document.getElementById('tools-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('tools-list').innerHTML = toolsData.filter(t => !val || t.category === val).map(createCard).join('');
        };
        select.onchange();
    }

    // Search page
    if (document.getElementById('search-input')) {
        const searchInput = document.getElementById('search-input');
        const resultsDiv = document.getElementById('search-results');

        function renderResults(q) {
            q = q.toLowerCase();
            const matches = [
                ...tipsData.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)),
                ...appsData.filter(a => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)),
                ...toolsData.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
            ];
            resultsDiv.innerHTML = matches.length ? matches.map(createCard).join('') : "<p>No results found.</p>";
        }
        searchInput.addEventListener('input', () => renderResults(searchInput.value));
    }
    
    // Initialize global search after data is loaded
    initializeGlobalSearch();
}