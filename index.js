const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "24af5dc2",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input class="input" />
<div class="dropdown">
<div class="dropdown-menu">
<div class="dropdown-content results"></div>
</div>
</div>
`;

const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const resultsWraper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  resultsWraper.innerHTML = "";
  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const options = document.createElement("a");
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    options.classList.add("dropdown-item");
    options.innerHTML = `
    <img src="${imgSrc}" />
    ${movie.Title}
    `;

    resultsWraper.appendChild(options);
  }
};
input.addEventListener("input", debounce(onInput, 500));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
