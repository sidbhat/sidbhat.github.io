# AI Intelligence Digests

Simple static site showcasing AI news digests from the repository.

## 🌐 Live Site

Visit: [https://sidbhat.github.io](https://sidbhat.github.io)

## 📋 Overview

This site automatically displays AI intelligence digest markdown files from your repository in a clean, SAP UI5-inspired interface.

## 🎨 Features

- **SAP Fiori/UI5 Design**: Clean, professional interface inspired by SAP design system
- **Automatic Digest Loading**: Fetches .md files from your repository using GitHub API
- **Simple & Fast**: No complex build process, just HTML/CSS/JS
- **Responsive**: Works on all devices

## 📁 Structure

```
sidbhat.github.io/
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── style.css      # SAP-inspired styling
│   └── js/
│       └── main.js        # Digest fetching logic
├── Downloads/
│   └── daily-digest/      # Your AI digest markdown files go here
└── README.md
```

## 🚀 How It Works

1. The site uses GitHub API to fetch markdown files from `Downloads/daily-digest/`
2. Displays them as cards with date, size, and download links
3. Files are sorted by date (newest first)
4. Clicking "View Digest" opens the file on GitHub
5. "Download" button downloads the markdown file

## 📝 Adding New Digests

Simply commit your markdown digest files to:
```
Downloads/daily-digest/YYYY-MM-DD-digest-title.md
```

The site will automatically pick them up and display them.

## 🔧 Configuration

To change the repository or path where digests are stored, edit `assets/js/main.js`:

```javascript
const username = 'sidbhat';           // Your GitHub username
const repoName = 'sidbhat.github.io'; // Repository name
const digestsPath = 'Downloads/daily-digest'; // Path to digests
```

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --sap-blue: #0070f2;
    --sap-dark-blue: #0854a0;
    /* ... other colors */
}
```

### Content
Edit `index.html` to change:
- Page title
- Header text
- Introduction content

## 📦 Deployment

Already deployed! The site is live at `https://sidbhat.github.io`

Any push to the `main` branch automatically updates the live site.

## 🔄 Updates

```bash
# Make changes, then:
git add .
git commit -m "Update digests"
git push origin main
```

Changes appear live in 1-2 minutes.

## 📧 Contact

GitHub: [@sidbhat](https://github.com/sidbhat)

---

**Built with simple HTML/CSS/JS** • **Styled with SAP Fiori/UI5 design principles**
