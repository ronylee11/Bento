const form = document.querySelector("#searchbar");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const search_google = document.querySelector("#search_google");
search_google.addEventListener("click", () => {
  const search = document.querySelector("#search").value;
  if (search === "") return;
  window.location.href = `https://www.google.com/search?q=${search}`;
});

const search_youtube = document.querySelector("#search_youtube");
search_youtube.addEventListener("click", () => {
  const search = document.querySelector("#search").value;
  if (search === "") return;
  window.location.href = `https://www.youtube.com/results?search_query=${search}`;
});
