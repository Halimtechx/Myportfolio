document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const pageViews = document.querySelectorAll('.page-view');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get target page key ID
            const targetPage = item.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });

    // Make navigation globally accessible for internal CTA buttons
    window.navigateToPage = (pageId) => {
        // Toggle Active States on Navigation Links
        navItems.forEach(link => {
            if(link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Toggle Content Viewports
        pageViews.forEach(view => {
            if(view.id === pageId) {
                view.classList.add('active-view');
                // Scroll beautifully up to the screen peak
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                view.classList.remove('active-view');
            }
        });
    };
});
