const dishes = document.querySelectorAll(".dish")

for(let dish of dishes) {
    dish.addEventListener("click", () => {      
        
        window.location.href = `dishes/:indexOf()`
    })
}

const steps = document.querySelectorAll(".step")

for(let step of steps) {
    const span = step.querySelector("span")
        span.addEventListener("click", () => {
        const stepContent = step.querySelector(".content")
        stepContent.classList.toggle("hidde")
    })
}
