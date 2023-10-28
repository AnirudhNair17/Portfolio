// Get the "Projects" link in your navbar by its class or ID.
const projectsLink = document.querySelector('.nav-link-projects'); // Replace with the actual class or ID of the "Projects" link.

// Get the "Projects" section by its ID.
const projectsSection = document.getElementById('projects');

// Add an event listener to the "Projects" link to toggle the visibility.
projectsLink.addEventListener('click', () => {
    if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {
        projectsSection.style.display = 'block';
    } else {
        projectsSection.style.display = 'none';
    }
});
