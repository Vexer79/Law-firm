document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".items");
    const items = carousel.querySelectorAll(".item");

    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
    });

    document.querySelector(".next").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });

    function showItem(index) {
        items.forEach((item, itemIndex) => {
            item.classList.remove("active");
            if (itemIndex === index) {
                item.classList.add("active");
            }
        });
    }
});