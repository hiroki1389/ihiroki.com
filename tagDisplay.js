document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.project-item');

    items.forEach(item => {
        const itemTags = item.getAttribute('data-tags').split(' ');
        const tagsContainer = item.querySelector('.tags-container');

        // タグを表示する
        itemTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            tagElement.classList.add('tag');
            
            // タグの色を設定する
            if (tag === 'Unity' || tag == 'Android_Studio' || tag === 'Xcode' || tag == 'ROS2') {
                tagElement.style.backgroundColor = 'lightcoral';
            } else if (tag === 'Python' || tag === 'C#' || tag === 'Kotlin' || tag === 'Swift' || tag === 'HTML,CSS' || tag === 'JavaScript') {
                tagElement.style.backgroundColor = 'lightblue';
            } else if (tag === 'VR') {
                tagElement.style.backgroundColor = 'lightgreen';
            }
            
            tagsContainer.appendChild(tagElement);
        });
    });
});