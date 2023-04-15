//Wait for document to load.
document.addEventListener("DOMContentLoaded", handleSearch);

/**
 * Gets query parameters.
 * Gets button and search field.
 * 
 * If everything fine inserts search query into search field and presses the button.
 * @returns {void}
 */
function handleSearch()
{
    const parameters = new URLSearchParams(window.location.search),
    searchField = document.getElementById("q"),
    searchButton = document.getElementById("snd");

    if (!searchButton || !searchField)
        return;

    if (!parameters.get("search") || parameters.get("search").length === 0)
        return;

    searchField.value = parameters.get("search");
    searchButton.click();
};