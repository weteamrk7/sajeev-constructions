// Function to load and insert HTML components
function loadComponent(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        })
        .catch(error => {
            console.error(`Could not load component from ${filePath}:`, error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#footer-placeholder')) {
        loadComponent('#footer-placeholder', 'footer.html');
    }
});