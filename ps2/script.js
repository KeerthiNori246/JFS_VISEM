// Example: alert subject when clicked
const subjects = document.querySelectorAll('td.subject');

subjects.forEach(cell => {
    cell.addEventListener('click', () => {
        alert(`You clicked on ${cell.textContent}`);
    });
});
