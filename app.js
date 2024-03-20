const gifZone = $("#gif-zone");
const input = $("#search");

function addGif(item) {
    let amount = item.data.length;

    if(amount) {
        let randIndex = Math.floor(Math.random() * amount);
        let addCol = $("<div>", { class: "col-md-4 col-12 mb-4"});

        let newImage = $("<img>", {
            src: item.data[randIndex].images.original.url,
            class: "w-100"
        });

        addCol.append(newImage);
        gifZone.append(addCol);
    }
}
$("form").on("submit", async function(evt) {
    evt.preventDefault();

    let search = input.val();

    input.val("");

    const retrieve = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });

    addGif(retrieve.data);
})

$("#remove").on("click", function() {
    gifZone.empty();
  });