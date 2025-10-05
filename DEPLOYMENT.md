# Deploying TechSite to GitHub Pages

## Quick Deployment Steps

### 1. **Commit Your Changes**
```bash
git add .
git commit -m "Prepare site for GitHub Pages deployment"
git push origin main
```

### 2. **Enable GitHub Pages**
1. Go to your repository: `https://github.com/anil-dev3/tech-site`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 3. **Wait for Deployment** (2-5 minutes)
GitHub will automatically build and deploy your site.

### 4. **Access Your Site**
Your site will be live at:
```
https://anil-dev3.github.io/tech-site/
```

## 🎯 That's It!

Your static site is now live and accessible to anyone!

## Updating Your Site

Whenever you make changes:
```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

## Custom Domain (Optional)

If you want to use your own domain:
1. Add a file named `CNAME` with your domain name
2. Configure DNS settings with your domain provider
3. Point to: `anil-dev3.github.io`

## Troubleshooting

### Site not loading?
- Check if GitHub Pages is enabled in Settings
- Verify branch is set to `main`
- Clear browser cache and try again

### Images/CSS not loading?
- Check file paths are relative (not absolute)
- Ensure all files are committed and pushed

### 404 Error?
- Make sure `index.html` is in the root directory
- Check that all file names match exactly (case-sensitive)

## Features That Work on GitHub Pages
✅ All HTML, CSS, JavaScript
✅ JSON data files (no CORS issues!)
✅ Static assets (images, fonts, etc.)
✅ Custom domains
✅ HTTPS by default
✅ Free hosting forever

## Monitoring Your Site
- Check deployment status: Repository → Actions tab
- View analytics: Settings → Pages → View site statistics
