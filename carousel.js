document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        const prevButton = carousel.querySelector('.prev-button');
        const nextButton = carousel.querySelector('.next-button');

        function showItem(index) {
            items.forEach((item, i) => {
                item.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }

        function goToNext() {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }

        function goToPrev() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showItem(currentIndex);
        }

        prevButton.addEventListener('click', goToPrev);
        nextButton.addEventListener('click', goToNext);

        // Initialize carousel
        showItem(currentIndex);
    });
});
