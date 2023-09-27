document.addEventListener('DOMContentLoaded', function() {
    // Initialize content array
    let contentArray = [];

    // Function to display content
    function displayContent() {
        // Clear existing content
        document.getElementById('content-display').innerHTML = '';

        // Loop through contentArray and display content
        contentArray.forEach(function(item, index) {
            const contentItem = document.createElement('div');
            contentItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>`;
            document.getElementById('content-display').appendChild(contentItem);
        });
    }

    // Function to handle form submission
    document.getElementById('content-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            // Add or edit content based on context
            if (editIndex !== null) {
                contentArray[editIndex] = { title, content };
                editIndex = null;
            } else {
                contentArray.push({ title, content });
            }

            // Clear the form
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';

            // Display updated content
            displayContent();
        }
    });
 // Function to handle edit and delete buttons
 document.getElementById('content-display').addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.getAttribute('data-index');
        const item = contentArray[index];
        document.getElementById('title').value = item.title;
        document.getElementById('content').value = item.content;
        editIndex = index;
    } else if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        contentArray.splice(index, 1);
        displayContent();
    }
});

// Initialize the app
let editIndex = null; // Track editing context
displayContent();
});