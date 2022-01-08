// let search = document.getElementById("textform");
// const form = document.getElementById("giphForm");
// const token = "c6aE5vBduk8oCDchfhPGYJEqN5qkRFe7";
// let imageArea = document.getElementById("giph-area");
// let removeBtn = document.getElementById("remove");

// form.addEventListener("submit", async function (event) {
//     event.preventDefault();
//     let searchVal = search.value;
//     search.value = " ";
//     const res = await axios.get('api.giphy.com/v1/gifs/search', {
//         params: {
//             q: searchVal,
//             api_key: token
//         }
//     });
//     newGiph();
//     console.log(res);
// });

// //created a new img with src from api
// function newGiph() {
//     let newGiph = document.createElement('img');
//     newGiph.setAttribute('src', url) //need url here
//     imageArea.appendChild(newGiph);
// }


// removeBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     newGiph.remove();

// })

//     async function getData() {
//         const res = await axios.get('api.giphy.com/v1/gifs/search', {
//             params: {
//                 q: search.value,
//                 api_key: token
//             }
//         })
//         console.log(res);
//     };

const giphArea = document.querySelector("#giph-area");
const searchBtn = document.querySelector("#submitBtn");
const searchForm = document.querySelector("#searchForm");
const removeBtn = document.querySelector("#remove");
const token = "c6aE5vBduk8oCDchfhPGYJEqN5qkRFe7";

searchBtn.addEventListener("click",function(event){
    event.preventDefault()
    getGiph()
    searchForm.value = ""
})

removeBtn.addEventListener("click", function(event){
    event.preventDefault()
    giphArea.innerHTML = ""
})

async function getGiph(){
    let term = searchForm.value
    let res = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params: {
            api_key: token,
            q:term
        }})
    const url = res.data.data[0].images.original.url
    console.log(url)
    makeImg(url)
}

function makeImg(url){
    const img = document.createElement("img")
    img.setAttribute("src", url)
    giphArea.append(img)
}
