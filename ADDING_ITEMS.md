# Adding New Items - Quick Guide

## 🚀 Quick Start

### Add a New App

1. **Create folder structure**:
   ```
   dist/apps/your-app-name/
   ```

2. **Add to data/apps.json**:
   ```json
   {
       "name": "Your App Name",
       "slug": "your-app-name",
       "description": "Brief description here",
       "url": "https://yourapp.com",
       "category": "Productivity",
       "detailPage": "dist/apps/your-app-name/index.html",
       "longDescription": "Detailed description about your app...",
       "features": [
           "Feature 1",
           "Feature 2",
           "Feature 3"
       ],
       "platforms": ["Web", "Windows", "macOS"],
       "pricing": "Free / $10/month"
   }
   ```

3. **Copy a template**:
   - Copy `dist/apps/notion/index.html`
   - Paste into `dist/apps/your-app-name/index.html`
   - Update the content

4. **Customize**:
   - Change title and heading
   - Update description and features
   - Modify the color scheme if desired
   - Update links

---

### Add a New Tool

1. **Create folder**: `dist/tools/your-tool-name/`

2. **Add to data/tools.json**:
   ```json
   {
       "name": "Your Tool Name",
       "slug": "your-tool-name",
       "description": "Brief description",
       "url": "https://yourtool.com",
       "category": "Development",
       "detailPage": "dist/tools/your-tool-name/index.html",
       "longDescription": "Detailed info...",
       "features": ["Feature 1", "Feature 2"],
       "useCases": ["Use case 1", "Use case 2"],
       "pricing": "Free"
   }
   ```

3. **Copy template**: Use `dist/tools/json-formatter/index.html` as template

---

### Add a New Tip

1. **Create folder**: `dist/tips/your-tip-slug/`

2. **Add to data/tips.json**:
   ```json
   {
       "title": "Your Tip Title",
       "slug": "your-tip-slug",
       "description": "Brief description",
       "category": "Windows",
       "detailPage": "dist/tips/your-tip-slug/index.html",
       "longDescription": "Detailed explanation...",
       "steps": [
           "Step 1: Do this",
           "Step 2: Then this",
           "Step 3: Finally this"
       ],
       "additionalTips": [
           "Bonus tip 1",
           "Bonus tip 2"
       ]
   }
   ```

3. **Copy template**: Use `dist/tips/take-screenshots-quickly/index.html` as template

---

## 📋 Slug Naming Rules

A slug is the URL-friendly version of the name:

- **Use lowercase**: `Password Generator` → `password-generator`
- **Replace spaces with hyphens**: `JSON Formatter` → `json-formatter`
- **Remove special characters**: `Ctrl+S` → `ctrl-s`
- **Keep it short**: `Take Screenshots Quickly in Windows` → `take-screenshots-quickly`

## 🎨 Color Schemes

Default gradient colors by category:

### Apps
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #667eea; /* for accents */
```

### Tools
```css
/* Blue-cyan */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
color: #4facfe;
```

### Tips
```css
/* Pink-yellow */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
color: #fa709a;
```

Feel free to use your own colors!

## ✅ Checklist

Before adding a new item:

- [ ] Created folder: `dist/{category}/{slug}/`
- [ ] Added to JSON file: `data/{category}.json`
- [ ] Created `index.html` in the folder
- [ ] Updated page title
- [ ] Updated heading and description
- [ ] Updated features/steps
- [ ] Updated external link
- [ ] Updated back button link
- [ ] Tested the page in browser
- [ ] Verified "Learn More" button works

## 🔗 Important Paths

When creating detail pages, make sure links are correct:

```html
<!-- CSS -->
<link rel="stylesheet" href="../../../assets/style.css">

<!-- JavaScript -->
<script src="../../../assets/script.js"></script>

<!-- Back button -->
<a href="../../../apps.html">← Back to Apps</a>
<a href="../../../tools.html">← Back to Tools</a>
<a href="../../../tips.html">← Back to Tips</a>
```

The `../../../` goes up 3 levels:
1. `../` from `index.html` → `dist/apps/notion/`
2. `../../` from `notion/` → `dist/apps/`
3. `../../../` from `apps/` → root folder

## 🎯 Example Workflow

Let's add a new app called "VS Code":

1. Create folder:
   ```
   dist/apps/vscode/
   ```

2. Copy template:
   ```
   Copy: dist/apps/notion/index.html
   To: dist/apps/vscode/index.html
   ```

3. Add to `data/apps.json`:
   ```json
   {
       "name": "VS Code",
       "slug": "vscode",
       "description": "Powerful code editor for developers.",
       "url": "https://code.visualstudio.com",
       "category": "Development",
       "detailPage": "dist/apps/vscode/index.html",
       "longDescription": "Visual Studio Code is a lightweight but powerful source code editor...",
       "features": [
           "IntelliSense code completion",
           "Built-in Git integration",
           "Extensions marketplace",
           "Debugging support"
       ],
       "platforms": ["Windows", "macOS", "Linux"],
       "pricing": "Free and Open Source"
   }
   ```

4. Edit `dist/apps/vscode/index.html`:
   - Change title to "VS Code - Code Editor | TechSite"
   - Update heading to "VS Code"
   - Update description and features
   - Update link to https://code.visualstudio.com

5. Open `apps.html` in browser and click on VS Code card!

---

**That's it!** Your new item is now live with its own beautiful detail page. 🎉
