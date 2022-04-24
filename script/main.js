/* eslint-disable no-undef */

const listItems = document.querySelectorAll('.value');
const submitButton = document.querySelector('#submit-button');
const mainPage = document.querySelector('#main-page');
const thankyouPage = document.querySelector('#thankyou-page');
const finalValutationText = document.querySelector('#final-valutation');
let userValutation = 0;

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
            userValutation = el.value;
        } else {
            // * Otherwise
            el.classList.add('active'); // * add active class to the element clicked by the user
            userValutation = el.value;
        }
    });
});

submitButton.addEventListener('click', () => {
    mainPage.classList.toggle('hidden');
    thankyouPage.classList.toggle('hidden');
    finalValutationText.innerHTML = `You selected ${userValutation} out of 5`;
});
