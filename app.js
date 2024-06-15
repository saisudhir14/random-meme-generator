async function generateRandomMeme() {
    let img = document.querySelector(".meme img")
    let res = await fetch("https://meme-api.com/gimme")
    console.log(res)
    let json = await res.json()
    console.log(json)
    let url = await json.url
    console.log(url)
    img.src = url;

}
generateRandomMeme();
let time = setInterval(generateRandomMeme,7000);

img.addEventListener("mouseover",function(){
    clearInterval(time);
})