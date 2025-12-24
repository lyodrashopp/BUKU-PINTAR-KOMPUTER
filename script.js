// Function to change pages
function changePage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });
    
    // Show the requested page
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
        
        // Scroll to top of the page
        window.scrollTo(0, 0);
    }
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', function() {
    // Set the first page as active
    const firstPage = document.getElementById('page-1');
    if (firstPage) {
        firstPage.classList.remove('hidden');
        firstPage.classList.add('active');
    }
});
