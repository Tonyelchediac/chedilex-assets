(function() {
    function injectFooter() {
        // Targets the placeholder div in your websites
        const containers = document.querySelectorAll('.chedilex-footer-container');
        
        if (containers.length > 0) {
            // Updated with your specific GitHub details
            const username = "Tonyelchediac"; 
            const repo = "chedilex-assets";
            const branch = "main";
            
            // CDN link to fetch your logo from the same repository
            const repoPath = `https://cdn.jsdelivr.net/gh/${username}/${repo}@${branch}`;
            const logoURL = `${repoPath}/logo.png`;

            const footerHTML = `
                <div class="chedilex-footer-content" style="margin-top: 20px; padding: 15px; display: flex; justify-content: center; align-items: center; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <span style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Developed by</span>
                    <a href="https://chedilex.pages.dev/" target="_blank" style="display: flex; align-items: center; text-decoration: none; margin-left: 8px; transition: opacity 0.2s;">
                        <img src="${logoURL}" alt="Chedilex Logo" style="height: 25px; margin-right: 6px; display: block; border: none;">
                        <span style="color: rgba(255, 255, 255, 0.9); font-weight: 600; font-size: 0.9rem;">Chedilex</span>
                    </a>
                </div>
            `;

            containers.forEach(container => {
                container.innerHTML = footerHTML;
            });
        }
    }

    // Initialize the injection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
