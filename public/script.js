const dishes = document.querySelectorAll(".dish")

for(let dish of dishes) {
    dish.addEventListener("click", () => {
        const dishId = dish.getAttribute("id")
        
        window.location.href = `dishes/${dishId}`
    })
}
