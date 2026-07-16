// Mobile Menu
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Counter Animation
window.addEventListener("load", () => {

    const counters = document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const target = parseInt(counter.textContent);

        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            if (count < target) {

                count += increment;

                if (count > target) count = target;

                counter.textContent = count + "+";

                setTimeout(updateCounter, 20);

            } else {

                counter.textContent = target + "+";

            }

        };

        counter.textContent = "0+";
        updateCounter();

    });

});// Contact Form Message

// Service Search
const search = document.getElementById("serviceSearch");

if(search){
search.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card=>{

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block":"none";

});

});
}