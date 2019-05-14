const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll("nav a");
navItems[0].innerText = siteContent["nav"]["nav-item-1"];
navItems[1].innerText = siteContent["nav"]["nav-item-2"];
navItems[2].innerText = siteContent["nav"]["nav-item-3"];
navItems[3].innerText = siteContent["nav"]["nav-item-4"];
navItems[4].innerText = siteContent["nav"]["nav-item-5"];
navItems[5].innerText = siteContent["nav"]["nav-item-6"];

// Start of task 3
const appendNode = document.createElement("a")
const prependNode = document.createElement("a")
appendNode.innerText = "New A Tag!"
prependNode.innerText = "Using DOM!"
const nav = document.querySelector("nav")
nav.appendChild(appendNode)
nav.prepend(prependNode)
//different way to appendChild or prepend
// document.getElementByName("nav").appendChild(lastNode)

// navItems[0].style.color = "green";
// navItems[1].style.color = "green";
//More efficient way is with forEach
const navItemsGreen = document.querySelectorAll('nav a')
navItemsGreen.forEach(item => item.style.color = 'green')

//End of Task 3


const tagline = document.querySelectorAll("h1");
tagline[0].innerText = siteContent["cta"]["h1"]

const button = document.querySelectorAll("button");
button[0].innerText = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

//content above the middle image
let topContentH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

let topContentP = document.querySelectorAll('.main-content .top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content']
topContentP[1].textContent = siteContent['main-content']['about-content']

// let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//different way of doing an image
let image2 = document.querySelector('#middle-img')
image2.src = "img/mid-page-accent.jpg"

//content below middle image
let bottomContentH4 = document.querySelectorAll('.main-content .bottom-content h4')
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentP = document.querySelectorAll('.main-content .bottom-content p')
bottomContentP[0].textContent = siteContent['main-content']['services-content']
bottomContentP[1].textContent = siteContent['main-content']['product-content']
bottomContentP[2].textContent = siteContent['main-content']['vision-content']

//contact
const contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].innerText = siteContent["contact"]["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];