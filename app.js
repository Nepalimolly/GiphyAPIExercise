const $memeArea = $("#meme-area");
const $input = $("#search");

function addGif(res) {
  console.log(res);
  let numResults = res.data.length;
  if (numResults) {
    let random = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>");
    let $newGif = $("<img>", {
      src: res.data[random].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $memeArea.append($newCol);
  }
}

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchTerm = $input.val();
  $input.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

$("#remove").on("click", function () {
  $memeArea.empty();
});
// gBW1qLg7F5Jn2AU1SOA3VfqjdJPaUCUe
// const gifPost = document.querySelector("#meme-area");
// const input = document.querySelector("#meme-search");

// function addMeme(res) {
//   let results = res.data.length;
//   if (results) {
//     let random = Math.floor(Math.random() * results);
//     let newPost = document.createElement("DIV");
//     let newMeme = document.createElement("IMG");
//     newMeme.src = res.data[random].images.original.results;
//     newPost.append(newMeme);
//     gifPost.append(newPost);
//   }
// }

// async function getSearchedMeme(search) {
//   const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
//   const res = await axios.get(giphyUrl);
//   console.log(res);
//   const img = document.querySelector("#meme");
//   img.src = res.data.data.url;
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
//   getSearchedMeme(input.value);
//   input.value = "";
// });
