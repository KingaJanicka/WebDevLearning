// const links = document.querySelectorAll("nav ul li");
// console.log(links);

const colours = ["violet", "yellow", "purple", "pink", "blue"];

// function linkColour(ts) {
//   if (Date.now() - ts > 1000) {
//     links.forEach(
//       link =>
//         (link.style.background =
//           bgs[Math.floor(Math.random() * Math.floor(bgs.length))])
//     );
//   }
//   window.requestAnimationFrame(linkColour);
// }

// linkColour(linkColour);

document.body.innerHTML = "";

const nav = document.createElement("nav");
const header = document.createElement("header");
const main = document.createElement("main");

document.body.appendChild(nav);
document.body.appendChild(header);
document.body.appendChild(main);

const links = [
  {
    url: "/",
    content: "Home"
  },
  {
    url: "/lessons",
    content: "Lessons"
  },
  {
    url: "/about",
    content: "About"
  },
  {
    url: "/contact",
    content: "Contact"
  }
];

const ul = document.createElement("ul");
nav.appendChild(ul);

links.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = link.url;
  a.textContent = link.content;

  li.appendChild(a);
  ul.appendChild(li);
});

const mainText = [
  {
    content: "Hi",
    tag: "h1"
  },
  {
    content: "Hi Hi",
    tag: "h2"
  },
  {
    content: "Hi Hi Hi",
    tag: "h3"
  }
];

mainText.forEach(headerText => {
  const h = document.createElement(headerText.tag);
  h.textContent = headerText.content;
  main.appendChild(h);
});

const mainHeader = document.createElement("h1");
main.appendChild(mainHeader);
mainHeader.textContent = "Hello";

mainHeader.addEventListener("mouseover", e => {
  e.target.style.color = "purple";
  console.log(e);
});

mainHeader.addEventListener("mouseout", e => {
  e.target.style.color = "black";
  console.log(e);
});

let i = 0;
const token = setInterval(() => {
  if (i < colours.length) {
    mainHeader.style.color = colours[i];
    i++;
  } else {
    i = 0;
    //clearInterval(token);
  }
}, 100);

const title = document.createElement("h1");
header.appendChild(title);
title.textContent = "Hi";
title.style.color = "#00beef";

(async () => {
  // const value = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Hi");
  //   }, 5000);
  // });
  // alert(value);

  const result = await fetch("https://httpbin.org/get");
  const data = await result.json();
  console.log(data);

  console.log(data.headers);
})();

fetch("https://httpbin.org/get")
  .then(res => res.json())
  .then(console.log);
