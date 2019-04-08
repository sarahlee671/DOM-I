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

const navLinks = document.querySelectorAll('header nav a');
navLinks[0].innerHTML = siteContent.nav["nav-item-1"]
navLinks[1].innerHTML = siteContent.nav["nav-item-2"]
navLinks[2].innerHTML = siteContent.nav["nav-item-3"]
navLinks[3].innerHTML = siteContent.nav["nav-item-4"]
navLinks[4].innerHTML = siteContent.nav["nav-item-5"]
navLinks[5].innerHTML = siteContent.nav["nav-item-6"]

const headline = document.querySelector('.cta-text h1');
headline.innerHTML = siteContent.cta["h1"]

const ctaPic = document.querySelector('.cta-text button');
ctaPic.innerHTML = siteContent.cta["button"]


document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"])


const contentHeaders = document.querySelectorAll(".text-content h4");
contentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"]
contentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"]
contentHeaders[2].innerHTML = siteContent["main-content"]["services-h4"]
contentHeaders[3].innerHTML = siteContent["main-content"]["product-h4"]
contentHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"]

const contentPara = document.querySelectorAll(".text-content p")
contentPara[0].innerHTML = siteContent["main-content"]["features-content"]
contentPara[1].innerHTML = siteContent["main-content"]["about-content"]
contentPara[2].innerHTML = siteContent["main-content"]["services-content"]
contentPara[3].innerHTML = siteContent["main-content"]["product-content"]
contentPara[4].innerHTML = siteContent["main-content"]["vision-content"]

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

document.querySelector('.contact h4').innerHTML =siteContent.contact["contact-h4"]

const contactPara = document.querySelectorAll(".contact p");
contactPara[0].innerHTML = siteContent["contact"]["address"]
contactPara[1].innerHTML = siteContent["contact"]["phone"]
contactPara[2].innerHTML = siteContent["contact"]["email"]

document.querySelector("footer p").innerHTML = siteContent["footer"]["copyright"]

navLinks.forEach(function(link){
  link.style.color = "green"
})

const nav = document.querySelector('nav')

const faq = document.createElement('a')
faq.textContent = "FAQ"
nav.appendChild(faq)

const added = document.createElement('a')
added.textContent = "Added"
nav.prepend(added)

