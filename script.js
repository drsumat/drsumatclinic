// Smooth fade-in animation on scroll

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Sticky header shadow

window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");

    if(window.scrollY>50){
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
    }else{
        header.style.boxShadow="0 5px 25px rgba(0,0,0,.06)";
    }
});

