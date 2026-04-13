(function() {
    function injectFooter() {
        // Looks for the placeholder div
        const containers = document.querySelectorAll('.chedilex-footer-container');
        
        if (containers.length > 0) {
            const username = "YOUR_USERNAME"; 
            const repo = "chedilex-assets";
            const branch = "main";
            
            const repoPath = `https://cdn.jsdelivr.net/gh/${username}/${repo}@${branch}`;
            const logoURL = `${repoPath}/logo.png`;

            const footerHTML = `
                <div class="chedilex-footer-content" style="margin-top: 20px; padding: 15px; display: flex; justify-content: center; align-items: center; font-family: sans-serif;">
                    <span style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Developed by</span>
                    <a href="https://chedilex.pages.dev/" target="_blank" style="display: flex; align-items: center; text-decoration: none; margin-left: 8px;">
                        <img src="${logoURL}" alt="Chedilex Logo" style="height: 25px; margin-right: 6px; display: block;">
                        <span style="color: rgba(255, 255, 255, 0.9); font-weight: bold; font-size: 0.9rem;">Chedilex</span>
                    </a>
                </div>
            `;

            containers.forEach(container => {
                container.innerHTML = footerHTML;
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();