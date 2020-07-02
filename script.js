const modalOverlay = document.querySelector(".modal-overlay")
const dishes = document.querySelectorAll(".dish")

for(let dish of dishes) {
    dish.addEventListener("click", () => {
        const dishId = dish.getAttribute("id")
        const dish4 = dish.getElementsByTagName("h4")
        
        modalOverlay.classList.add("active")
        console.log(dishId)
        console.log(dish4)
        modalOverlay.querySelector("img").src = `/imagens/${dishId}.png`
        modalOverlay.querySelector("h4").innerHTML = dish4.innerHTML;
        modalOverlay.querySelector("p").innerHTML = `${dishId}`
       
    })
}


document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
})


/* [
    {
        id: dish.getAttribute("id")
    },
    {
        imag: dish.querySelector("img")
    },
    {
         h4: dish.querySelector("h4")
    },
    {
        p: dish.querySelector("p")
    }
] */

/* = {
            id: dish.getAttribute("id"),
            img: dish.querySelector("img"),
            h4: dish.querySelector("h4"),
            p: dish.querySelector("p")
        } */