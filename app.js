async function generateRandomMeme() {
    let res = await fetch("https://meme-api.com/gimme")
    console.log(res)
    let json = await res.json()
    console.log(json)

}
generateRandomMeme();
