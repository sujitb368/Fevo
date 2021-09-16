
const to_animate = document.querySelectorAll(".to_animate");
const header_item = document.querySelectorAll(".header_item");
const drop_down = document.querySelectorAll(".drop_down");
// const navbar = document.getElementById("nav");

const callback_fun = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log("element : ",entry.target );
            gsap.from(".circle_product > *", {
                y: 200,
                stagger: 0.2,
                opacity: 0

            })

        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const my_obserber = new IntersectionObserver(callback_fun, options);


to_animate.forEach(done => {
    my_obserber.observe(done);
})
// const scrollFunction = () => {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         console.log(document.body.scrollTop);
//         navbar.style.padding = " 0 40px";

//     } else {
//         console.log("inside else");
//         navbar.style.padding = "50px 40px 10 40px;";

//     }

// }
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "0 40px";
  } else {
    document.getElementById("nav").style.padding = "50px 40px 10 40px";
  }
}