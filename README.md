# TechSite - Tech Tips & Tools

A fully static website for curating technology tips, tricks, apps, and tools.

## 🚀 Live Demo

**Deployed on GitHub Pages:** `https://anil-dev3.github.io/tech-site/`

## 📦 Deployment

### Deploy to GitHub Pages (Recommended)
See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

**Quick Steps:**
1. Push code to GitHub
2. Enable GitHub Pages in Settings → Pages
3. Select `main` branch and `/ (root)` folder
4. Your site will be live in minutes!

## 💻 Local Development

Simply **open `index.html`** in your browser! No server required - all data is embedded in JavaScript.

You can:
- Open files directly with `file://` protocol
- Deploy to any static hosting (GitHub Pages, Netlify, Vercel, etc.)
- Share files without any dependencies

## Features
- 🏠 Dynamic sidebar navigation with icons
- 🔍 Global search in header
- 💡 Tips & Tricks collection
- 📱 Apps & Websites directory
- 🔧 Tools catalog
- 🎨 Responsive design

## 📝 Adding Content

### Add Menu Items
Edit the `menuItems` array in `assets/script.js`:
```javascript
const menuItems = [
    { href: 'index.html', icon: '🏠', text: 'Home' },
    { href: 'newpage.html', icon: '✨', text: 'New Page' }
];
```

### Add Tips, Apps, or Tools
Edit the data arrays at the top of `assets/script.js`:
```javascript
const tipsData = [
    {
        "title": "Your Tip Title",
        "description": "Your tip description",
        "category": "Category Name"
    }
];

const appsData = [
    {
        "name": "App Name",
        "description": "App description",
        "url": "https://example.com",
        "category": "Category Name"
    }
];
```

## Project Structure
```
tech-site/
├── index.html          # Home page
├── tips.html           # Tips & Tricks page
├── apps.html           # Apps & Websites page
├── tools.html          # Tools page
├── search.html         # Search page
├── assets/
│   ├── script.js       # JavaScript + embedded data
│   └── style.css       # Styles
└── data/               # (Optional - not used, kept for reference)
    ├── tips.json
    ├── apps.json
    └── tools.json
```