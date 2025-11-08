// GitHub Repository Fetcher
async function fetchGitHubRepos() {
    const username = 'sidbhat';
    const repoContainer = document.getElementById('github-repos');
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        // Filter out forks and sort by stars
        const filteredRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        
        const repoHTML = filteredRepos.map(repo => `
            <div class="repo-card">
                <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="repo-meta">
                    ${repo.language ? `<span class="repo-language"><span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>${repo.language}</span>` : ''}
                    <span class="repo-stars">⭐ ${repo.stargazers_count}</span>
                    <span class="repo-forks">🔱 ${repo.forks_count}</span>
                </div>
                <div class="repo-links">
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-small">View on GitHub</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-primary">Live Demo</a>` : ''}
                </div>
            </div>
        `).join('');
        
        if (repoContainer) {
            repoContainer.innerHTML = repoHTML || '<p>No repositories found.</p>';
        }
        
        if (projectsContainer) {
            projectsContainer.innerHTML = repoHTML || '<p>No repositories found.</p>';
        }
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        const errorHTML = '<p class="error">Unable to load repositories. Please try again later.</p>';
        if (repoContainer) repoContainer.innerHTML = errorHTML;
        if (projectsContainer) projectsContainer.innerHTML = errorHTML;
    }
}

// Language color mapping (simplified)
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'Java': '#b07219',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Ruby': '#701516',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'C++': '#f34b7d',
        'C': '#555555',
        'PHP': '#4F5D95',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Dart': '#00B4AB'
    };
    return colors[language] || '#8257e5';
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Fetch GitHub repos if containers exist
    if (document.getElementById('github-repos') || document.getElementById('projects-container')) {
        fetchGitHubRepos();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if you add hamburger menu later)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Add active class to current nav item
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Copy code blocks to clipboard (for blog posts)
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((block) => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        
        button.addEventListener('click', async () => {
            await navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
        
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(button);
    });
});
