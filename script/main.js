/* eslint-disable no-undef */

const listItems = document.querySelectorAll('.value');

listItems.forEach((el) => {
    el.addEventListener('click', () => {
        const activeListItems = document.querySelectorAll('.active');
        if (activeListItems.length > 0) {
            // * Check if already there is an element w/ active class
            activeListItems.forEach((activeItem) => {
                // * if so, for each element
                activeItem.classList.remove('active'); // * remove active class and ...
            });
            el.classList.add('active'); // * ...add active class to the element clicked by the user
        } else {
            // * Otherwise
            el.classList.add('active'); // * add active class to the element clicked by the user
        }
    });
});
