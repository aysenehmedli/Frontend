function toggleText(contentId) {
    const contents = document.querySelectorAll('.content');
    const triangles = document.querySelectorAll('.triangle');
    
    contents.forEach(content => {
        if (content.id === contentId) {
            content.classList.toggle('active');
        } else {
            content.classList.remove('active');
        }
    });

    triangles.forEach(triangle => {
        const content = triangle.parentElement.nextElementSibling;
        if (content.id === contentId) {
            if (content.classList.contains('active')) {
                triangle.style.transform = 'rotate(180deg)';
            } else {
                triangle.style.transform = 'rotate(0deg)';
            }
        } else {
            triangle.style.transform = 'rotate(180deg)';
        }
    });
}
