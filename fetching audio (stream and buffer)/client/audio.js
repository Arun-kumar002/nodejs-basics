let songblock = document.querySelector(".songblock")
console.log(songblock)

async function sendnumber(num) {
    let res = await fetch("http://localhost:4500/audio",
        {
            method: "POST",
            headers: {"content-type": "application/json"},
            body:  JSON.stringify(num)
        })
}




songblock.addEventListener("click", e => {
    sendnumber(2)
    songblock.innerHTML = `
    <audio class="playsong">
    <source src="http://localhost:4500/audio/a1" type="audio/ogg">
    </audio>`
    songblock.children[0].play()

    console.log(songblock.previousElementSibling)
    console.log(songblock.nextElementSibling)

    songblock.nextElementSibling.addEventListener("click", e => {
        sendnumber(3)
    })
})

songblock.addEventListener("dblclick", e => {
    e.target.children.remove()
})
