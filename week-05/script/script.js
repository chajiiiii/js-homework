{
  const typeahead = document.querySelector(".typeahead");
  const searchInput = typeahead.querySelector("input");
  const predictionList = typeahead.querySelector("ul");

  searchInput.addEventListener("input", (e) => {
    const search = e.currentTarget.value.trim();
    const searchedList = COUNTRIES.filter(({ name }) =>
      name.startsWith(search)
    );

    if (!search) {
      predictionList.setAttribute("hidden", "true");
      return;
    }

    const listTemplate = searchedList.reduce((template, { name }) => {
      const searchLength = search.length;
      const toBold = name.substring(0, searchLength);
      const restName = name.substring(searchLength);
      template += `<li tabindex="0"><strong>${toBold}</strong>${restName}</li>`;
      return template;
    }, "");

    predictionList.innerHTML = listTemplate;
    predictionList.removeAttribute("hidden");
  });

  document.addEventListener("click", ({ target }) => {
    if (target.closest(".typeahead")) return;
    predictionList.setAttribute("hidden", "true");
  });

  predictionList.addEventListener(
    "click",
    ({ target, currentTarget: list }) => {
      if (!target.closest("li")) return;
      searchInput.value = target.textContent;
      list.setAttribute("hidden", "true");
    }
  );

  document.addEventListener("keydown", (e) => {
    const { key, target } = e;

    if (target.tagName === "LI" && (key === "Enter" || key === " ")) {
      e.preventDefault();
      searchInput.value = target.textContent;
      predictionList.setAttribute("hidden", "true");
      searchInput.focus();
    }
  });
}
