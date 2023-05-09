// Get project list and sort dropdown
const projectList = document.getElementById('project-list');
const sortDropdown = document.getElementById('sort');

// Function to sort projects by date
function sortByDate() {
  const projects = [...projectList.children];
  projects.sort((a, b) => {
    return new Date(b.dataset.date) - new Date(a.dataset.date);
  });
  projects.forEach(project => projectList.appendChild(project));
}

// Function to sort projects by name
function sortByName() {
  const projects = [...projectList.children];
  projects.sort((a, b) => {
    return a.querySelector('h2').textContent.localeCompare(b.querySelector('h2').textContent);
  });
  projects.forEach(project => projectList.appendChild(project));
}

// Event listener for sort dropdown change
sortDropdown.addEventListener('change', () => {
  if (sortDropdown.value === 'recent') {
    sortByDate();
  } else if (sortDropdown.value === 'name') {
    sortByName();
  }
});
