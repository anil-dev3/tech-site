// Helper to fetch JSON data
async function fetchData(file) {
    return fetch(file).then(res => res.json());
}

function createCard(item) {
    return `
        <div class="card">
            <h3>${item.title || item.name}</h3>
            <p>${item.description}</p>
            ${item.url ? `<a href="${item.url}" target="_blank">Visit</a>` : ""}
            <div><small>Category: ${item.category || 'General'}</small></div>
        </div>
    `;
}

// Home page: Show top tips and tools
if (document.getElementById('top-tips')) {
    fetchData('data/tips.json').then(tips => {
        // Take top 3 tips
        document.getElementById('top-tips').innerHTML = tips.slice(0, 3).map(createCard).join('');
    });
}
if (document.getElementById('top-tools')) {
    fetchData('data/tools.json').then(tools => {
        document.getElementById('top-tools').innerHTML = tools.slice(0, 3).map(createCard).join('');
    });
}

// Tips page
if (document.getElementById('tips-list')) {
    fetchData('data/tips.json').then(tips => {
        const categories = [...new Set(tips.map(t => t.category))];
        const select = document.getElementById('tips-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('tips-list').innerHTML = tips.filter(t => !val || t.category === val).map(createCard).join('');
        };
        select.onchange();
    });
}

// Apps page
if (document.getElementById('apps-list')) {
    fetchData('data/apps.json').then(apps => {
        const categories = [...new Set(apps.map(a => a.category))];
        const select = document.getElementById('apps-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('apps-list').innerHTML = apps.filter(a => !val || a.category === val).map(createCard).join('');
        };
        select.onchange();
    });
}

// Tools page
if (document.getElementById('tools-list')) {
    fetchData('data/tools.json').then(tools => {
        const categories = [...new Set(tools.map(t => t.category))];
        const select = document.getElementById('tools-category');
        select.innerHTML = `<option value="">All</option>` + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.onchange = () => {
            const val = select.value;
            document.getElementById('tools-list').innerHTML = tools.filter(t => !val || t.category === val).map(createCard).join('');
        };
        select.onchange();
    });
}

// Search page
if (document.getElementById('search-input')) {
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('search-results');

    Promise.all([
        fetchData('data/tips.json'),
        fetchData('data/apps.json'),
        fetchData('data/tools.json')
    ]).then(([tips, apps, tools]) => {
        function renderResults(q) {
            q = q.toLowerCase();
            const matches = [
                ...tips.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)),
                ...apps.filter(a => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)),
                ...tools.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
            ];
            resultsDiv.innerHTML = matches.length ? matches.map(createCard).join('') : "<p>No results found.</p>";
        }
        searchInput.addEventListener('input', () => renderResults(searchInput.value));
    });
}