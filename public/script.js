const dishes = document.querySelectorAll(".dish")
const steps = document.querySelectorAll(".group")

for(let dish of dishes) { 
    dish.addEventListener("click", () => {    
        let dishId = dish.getAttribute("id")       
        window.location.href = `dishes/${dishId}`
    })
}

for(let step of steps) {
    const span = step.querySelector("span")
        span.addEventListener("click", () => {
        const stepContent = step.querySelector(".content-group")
        stepContent.classList.toggle("hidde")
        if(span.innerText == "ESCONDER"){
            span.innerText = "MOSTRAR"
        } else {
            span.innerText = "ESCONDER"
        }
    })
}