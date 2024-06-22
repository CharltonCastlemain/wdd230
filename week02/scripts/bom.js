document.addEventListener('DOMContentLoaded', function() {
    // Get references to input, button, and list elements
    const chapterInput = document.getElementById('chapterInput');
    const addChapterButton = document.getElementById('addChapterButton');
    const chapterList = document.getElementById('chapterList');

    // Adding a new chapter
    const addChapter = () => {
        // Get value from the input field
        const chapterName = chapterInput.value.trim();

        // Check if input field is not empty
        if (chapterName !== '') {
            // Create a new list item
            const newChapter = document.createElement('li');
            newChapter.textContent = chapterName;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete'); 

            // Add the delete button to the list item
            newChapter.appendChild(deleteButton);

            // Add the list item to the chapter list
            chapterList.appendChild(newChapter);

            // Event listener for the delete button
            deleteButton.addEventListener('click', () => {
                // Remove the list item when delete button is clicked
                chapterList.removeChild(newChapter);
            });

            // Clear the input field after adding
            chapterInput.value = '';

            // Send focus back to the input field
            chapterInput.focus();
        } else {
            // If input is blank, provide a message (optional)
            alert('Please enter a chapter name.');

            // Return focus to the input field
            chapterInput.focus();
        }
    };

    // Event listener for the Add Chapter button
    addChapterButton.addEventListener('click', addChapter);
});
