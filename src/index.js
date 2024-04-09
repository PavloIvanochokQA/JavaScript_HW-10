const debounce = require("lodash.debounce")
import { Notify } from 'notiflix';
import { fetchCountries } from './js/fetchCountries'
import { createMarkupBigCard, createMarkupLittleCard } from './js/markup';

const inputFieldRef = document.querySelector('#search-box');
const productsListRef = document.querySelector('.productsList');
inputFieldRef.addEventListener("input", debounce(onSearchFormSubmit, 500));

async function onSearchFormSubmit(event) {
    event.preventDefault();
    const query = event.target.value.toLowerCase().trim();
    if (!query) {
        productsListRef.innerHTML = '';
        return;
    };

    try {
        const result = await fetchCountries(query);


        if (result.length > 20) {
            Notify.info(`Too many matches found. Please enter a more specific name!`);
            productsListRef.innerHTML = "";
            return;
        };

        if (result.length > 1 && result.length <= 20) {
            productsListRef.innerHTML = createMarkupLittleCard(result);
            return;
        }
        productsListRef.innerHTML = createMarkupBigCard(result);
        return;
    }
    catch (error) {
        productsListRef.innerHTML = "";
        Notify.failure(`Oops, there is no country with that name`);
        console.log(error.message);

    };
};