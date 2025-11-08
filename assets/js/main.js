// Fetch AI Digests from GitHub Repository
async function fetchAIDigests() {
    const username = 'sidbhat';
    const repoName = 'sidbhat.github.io'; // Change this if digests are in a different repo
    const digestsPath = 'Downloads/daily-digest'; // Path to your digest markdown files
    const container = document.getElementById('digests-container');
    
    try {
        // Fetch repository contents
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${digestsPath}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch digests');
        }
        
        const files = await response.json();
        
        // Filter for markdown files and sort by date (newest first)
        const digestFiles = files
            .filter(file => file.name.endsWith('.md') || file.name.endsWith('.MD'))
            .sort((a, b) => b.name.localeCompare(a.name)); // Sort descending by filename
        
        if (digestFiles.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No digests found</h3>
                    <p>Check back soon for AI intelligence digests.</p>
                </div>
            `;
            return;
        }
        
        // Create cards for each digest
        const digestHTML = await Promise.all(
            digestFiles.map(async (file) => {
                // Extract date from filename (assuming format: YYYY-MM-DD-title.md)
                const dateMatch = file.name.match(/(\d{4}-\d{2}-\d{2})/);
                const date = dateMatch ? formatDate(dateMatch[1]) : 'Unknown date';
                
                // Get file size in KB
                const sizeKB = Math.round(file.size / 1024);
                
                // Extract title from filename
                const title = file.name
                    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
                    .replace(/\.md$/i, '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                
                return `
                    <div class="digest-card">
                        <h3><a href="${file.html_url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
                        <div class="digest-meta">
                            <span class="digest-date">${date}</span>
                            <span class="digest-size">${sizeKB} KB</span>
                        </div>
                        <div class="digest-excerpt">
                            Strategic AI intelligence digest covering industry developments, research breakthroughs, and market insights.
                        </div>
                        <div class="digest-actions">
                            <a href="${file.html_url}" target="_blank" rel="noopener noreferrer" class="sap-button">View Digest</a>
                            <a href="${file.download_url}" download class="sap-button sap-button-secondary">Download</a>
                        </div>
                    </div>
                `;
            })
        );
        
        container.innerHTML = digestHTML.join('');
        
    } catch (error) {
        console.error('Error fetching digests:', error);
        container.innerHTML = `
            <div class="error">
                <strong>Error:</strong> Unable to load AI digests. Please check the repository configuration.
                <br><small>Error details: ${error.message}</small>
            </div>
        `;
    }
}

// Format date string to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchAIDigests();
});
