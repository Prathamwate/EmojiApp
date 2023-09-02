const searchField = document.getElementById("searchBar");
const submitButton = document.getElementById("submitButton");

const searchEmoji = () => {
    const searchFieldValue = searchField.value;

    const filteredList = emojiList.filter((e) => {
        if (e.aliases.some((ele) => ele.startsWith(searchFieldValue))) {
            return true;
        }
        if (e.tags.some((ele) => ele.startsWith(searchFieldValue))) {
            return true;
        }
    });
    const searchResultContainer = document.getElementById("searchResultContainer");
    searchResultContainer.innerText = "";
    filteredList.map((ele) => {
        const div = document.createElement("div");

        div.innerHTML = `<h3>${ele.category}</h3></>
                         <p>${ele.description}</p>
                        <h1>${ele.emoji}</h1>`;

        div.id = "res";
        searchResultContainer.appendChild(div);
    });
};

submitButton.addEventListener("click", searchEmoji);
searchField.addEventListener("keyup", searchEmoji);

window.onload = () => searchEmoji();