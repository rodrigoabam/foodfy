const modalOverlay = document.querySelector(".modal-overlay")
const dishes = document.querySelectorAll(".dish")

for(let dish of dishes) {
    dish.addEventListener("click", () => {
        let img = dish.getAttribute("id")
        let h4 = dish.querySelector("h4").innerText
        let p = dish.querySelector("p").innerText
                
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `/imagens/${img}.png`
        modalOverlay.querySelector("h4").innerHTML = `${h4}`
        modalOverlay.querySelector("p").innerHTML = `${p}`
    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
})