# Siddharth Bhat's Personal Website

A Jekyll-based personal website and blog hosted on GitHub Pages, showcasing projects and sharing technical insights.

## 🌐 Live Site

Visit the site at: [https://sidbhat.github.io](https://sidbhat.github.io)

## ✨ Features

- **Dynamic Project Showcase**: Automatically fetches and displays GitHub repositories using the GitHub API
- **Blog Platform**: Write posts in Markdown with categories and tags
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **SEO Optimized**: Built-in SEO tags for better search engine visibility
- **RSS Feed**: Subscribe to blog updates via RSS

## 🏗️ Built With

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting
- Vanilla JavaScript - Dynamic repository fetching
- CSS3 - Modern, responsive styling

## 📁 Project Structure

```
sidbhat.github.io/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base template
│   └── post.html           # Blog post template
├── _posts/                  # Blog posts (Markdown)
├── _includes/               # Reusable components
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript (GitHub API integration)
│   └── images/             # Images and media
├── projects/                # Project showcase pages
├── index.html              # Homepage
├── blog.html               # Blog listing
├── projects.html           # Projects page
├── about.md                # About page
├── Gemfile                 # Ruby dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sidbhat/sidbhat.github.io.git
   cd sidbhat.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**:
   Open [http://localhost:4000](http://localhost:4000)

The site will automatically reload when you make changes to files.

## ✍️ Writing Blog Posts

1. Create a new file in `_posts/` following the naming convention:
   ```
   YYYY-MM-DD-title-of-post.md
   ```

2. Add front matter at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2025-01-08
   categories: [tutorial, technical]
   tags: [python, ai, machine-learning]
   ---
   ```

3. Write your content in Markdown below the front matter

4. Commit and push to publish

## 🎨 Customization

### Update Personal Information

Edit `_config.yml` to update:
- Your name and description
- Email and social links
- Site URL

### Modify Styling

Edit `assets/css/style.css` to customize:
- Colors (CSS variables at the top)
- Layout and spacing
- Responsive breakpoints

### Change GitHub Username

Update the username in `assets/js/main.js`:
```javascript
const username = 'sidbhat';  // Change this
```

## 📦 Deployment

The site is automatically deployed via GitHub Pages when you push to the `main` branch.

### Manual Deployment Steps

1. **Create GitHub repository** named `yourusername.github.io`

2. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/sidbhat/sidbhat.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch `main`
   - Save

5. **Wait for deployment** (usually 1-2 minutes)

6. **Visit your site**: `https://yourusername.github.io`

## 🛠️ Maintenance

### Updating Jekyll

```bash
bundle update jekyll
```

### Adding New Plugins

1. Add to `_config.yml`:
   ```yaml
   plugins:
     - jekyll-new-plugin
   ```

2. Add to `Gemfile`:
   ```ruby
   gem "jekyll-new-plugin"
   ```

3. Run:
   ```bash
   bundle install
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal website, suggestions and feedback are welcome! Feel free to open an issue or reach out.

## 📧 Contact

- **GitHub**: [@sidbhat](https://github.com/sidbhat)
- **Email**: Update in `_config.yml`

## 🙏 Acknowledgments

- Jekyll and GitHub Pages for providing free hosting
- The open-source community for inspiration and tools

---

**Built with ❤️ using Jekyll and GitHub Pages**
