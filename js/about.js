const reviews = [
    {
        id: 1,
        name: "Annu",
        job: "backend programmer",
        img:
            "pics/Me.jpg",
        info:
            "hi,i'm annu,i Proficient At Document Processing And Some Programming. gmail:gordon.kao118@gmail.com github:AnnOLoveCat",
    },
];


// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    // linkContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } 
    else {
        linksContainer.style.height = 0;
    }
});

//fix navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

//select links
const scrolllinks = document.querySelectorAll(".scroll-link");

scrolllinks.forEach(function(link){
    link.addEventListener("click", function(e){
        //prevent Default
        e.preventDefault();

        //nagative to specific spot
        const id = e.currentTarget.getAttribute(".href").slice(1);
        const element = document.getElementById(id);

        //calculate heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

//preloder
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add("hide-preloader");
});

//load intial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});

//set starting item
let currentItem = 0;

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img; 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info; 
}
