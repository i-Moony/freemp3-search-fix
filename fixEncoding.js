/**
 * Copyright © 2023 Danila Kononov (nickname: moony). All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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