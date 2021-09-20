
const to_animate = document.querySelectorAll(".to_animate");
const header_item = document.querySelectorAll(".header_item");
const drop_down = document.querySelectorAll(".drop_down");
const icon = document.querySelector(".icon");
const nav_links = document.querySelector(".nav_links");
const nav = document.getElementById("nav")
const container = document.getElementById("container")

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

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.remove("nav_top_padding")
  
  } 
  else {
    
    nav.classList.add("nav_top_padding")
  }
}

const overlay = document.querySelector(".overlay");

const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");

function close(){
  nav_links.classList.remove("nav_links_active");
    overlay.classList.remove("overlay_active")

}
overlay.addEventListener("click", close);

icon.addEventListener("click", function(){
  
  if( nav_links.classList.contains("nav_links_active")){
    
    close();

  }else{
    nav_links.classList.add("nav_links_active");
    overlay.classList.add("overlay_active");
    cross.classList.add("icon_cross_active")
  }
 

})

cross.addEventListener("click", ()=>{
  cross.classList.remove("icon_cross_active");
  close()
})
