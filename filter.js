document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.tag');
    const items = document.querySelectorAll('.project-item');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // クリックされたタグを取得
            const selectedTag = this.getAttribute('data-tag');

            filters.forEach(filter => {
                // すべてのタグボタンから強調表示を解除
                filter.classList.remove('selected');
            });

            // クリックされたタグボタンを強調表示
            this.classList.add('selected');

            items.forEach(item => {
                const itemTags = item.getAttribute('data-tags').split(' ');
                if (selectedTag === 'all' || itemTags.includes(selectedTag)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});