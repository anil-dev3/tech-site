# 🚀 Complete GitHub Pages Deployment Guide

## Current Status
✅ All files are committed locally
⏳ Need to push to GitHub

## Step 1: Fix GitHub Authentication

You have a permission issue. Here are solutions:

### Option A: Using GitHub Desktop (Easiest)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Sign in with your `anil-dev3` account
4. Add this repository: File → Add Local Repository → Select `E:\github_repos\tech-site`
5. Click "Push origin" button

### Option B: Using Git Credential Manager
```powershell
# Remove old credentials
git credential reject
protocol=https
host=github.com

# Then push again (it will prompt for credentials)
git push origin main
```

### Option C: Using Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "tech-site-deploy"
4. Select scope: `repo` (full control)
5. Click "Generate token"
6. Copy the token (save it somewhere safe!)
7. Push with token:
```powershell
git push https://YOUR_TOKEN@github.com/anil-dev3/tech-site.git main
```

### Option D: Using SSH (Most Secure)
1. Generate SSH key:
```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```
2. Add key to GitHub: https://github.com/settings/keys
3. Change remote URL:
```powershell
git remote set-url origin git@github.com:anil-dev3/tech-site.git
git push origin main
```

## Step 2: Enable GitHub Pages

Once pushed successfully:

1. Go to: https://github.com/anil-dev3/tech-site
2. Click **Settings** tab (top right)
3. Click **Pages** in left sidebar
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

## Step 3: Wait for Deployment

- GitHub will show: "Your site is ready to be published"
- Wait 2-5 minutes for the build
- Refresh the page to see: "Your site is live at..."

## Step 4: Access Your Site

Your site will be available at:
```
https://anil-dev3.github.io/tech-site/
```

## Step 5: Verify Everything Works

Open your live site and check:
- ✅ Sidebar menu works
- ✅ Hamburger button toggles menu
- ✅ Search in header works
- ✅ All pages load correctly
- ✅ Data displays properly

## Future Updates

After initial deployment, updating is simple:

```powershell
# Make your changes to files
git add .
git commit -m "Update content"
git push origin main
```

GitHub Pages will auto-deploy in 1-2 minutes!

## Troubleshooting

### Push fails with 403 error
- You're not authenticated as `anil-dev3`
- Follow Option A, B, or C above

### Site shows 404
- Wait 5 minutes and refresh
- Check Settings → Pages is enabled
- Verify `index.html` is in root folder

### CSS/JS not loading
- Check browser console (F12)
- Verify all file paths are relative
- Clear browser cache (Ctrl+F5)

### Data not showing
- Check browser console for errors
- Verify embedded data in `assets/script.js`
- Try in incognito mode

## Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- GitHub Support: https://support.github.com/
