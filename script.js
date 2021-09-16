
const to_animate = document.querySelectorAll(".to_animate");

const callback_fun = (entries, observer)=>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            console.log("element : ",entry.target );
            gsap.from(".circle_product > *",{
                y:30,
                stagger: 0.2,
                opacity:0
               
            })
        }      
    });
}

const options = {
    root: null,
    rootMargin:"5px",
    threshold: 0.8
}

const my_obserber = new IntersectionObserver(callback_fun,options);


to_animate.forEach( done =>{
    my_obserber.observe(done);
})