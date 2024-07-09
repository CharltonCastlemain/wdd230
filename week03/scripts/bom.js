document.addEventListener('DOMContentLoaded', function() {
    const chapterInput = document.getElementById('chapterInput');
    const addChapterButton = document.getElementById('addChapterButton');
    const chapterList = document.getElementById('chapterList');

    let chaptersArray = getChapterList() || [];

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    function displayList(item) {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);
        chapterList.appendChild(li);

        deleteButton.addEventListener('click', () => {
            chapterList.removeChild(li);
            deleteChapter(item);
            chapterInput.focus();
        });
    }

    function deleteChapter(chapter) {
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }

    addChapterButton.addEventListener('click', () => {
        if (chapterInput.value !== '') {
            displayList(chapterInput.value);
            chaptersArray.push(chapterInput.value);
            setChapterList();
            chapterInput.value = '';
            chapterInput.focus();
        } else {
            alert('Please enter a chapter name.');
            chapterInput.focus();
        }
    });

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });
});
