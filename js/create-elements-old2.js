// import data from external files
import productsData from "./products-data.js";

window.addEventListener(("DOMContentLoaded"), () => {
    displayItems();
    selectItem();
});

function displayItems() {
    const body = document.body;
    // const main = document.createElement("main");
    const main = document.querySelector("main");
    main.classList.add("container");

    // for(let data of productsData) {
    //     // article element
    //     const article = document.createElement("article");
    //     article.classList.add("card__item");

    //     // figure element
    //     const figure = document.createElement("figure");
    //     figure.classList.add("card__image");

    //     const img = document.createElement("img");
    //     img.src = `${data.img}`;
    //     img.setAttribute("alt", "GSX 1300 Hayabusa");

    //     const figcaption = document.createElement("figcaption");
    //     figcaption.classList.add("card__maker");
    //     figcaption.innerText = `${data.title}`;

    //     // h4 element
    //     const h4 = document.createElement("h4");
    //     h4.classList.add("card__model");
    //     h4.innerText = `${data.description}`;

    //     // link element
    //     const link = document.createElement("a");
    //     link.classList.add("card__link");
    //     link.innerText = "Select Item";
    //     // link.href = "products.html";
    //     link.setAttribute("href", "products.html");
    //     link.setAttribute("target", "_self");

    //     figure.appendChild(img);
    //     figure.appendChild(figcaption);

    //     article.appendChild(figure);
    //     article.appendChild(h4);
    //     article.appendChild(link);

    //     main.appendChild(article);
    // }

    // body.appendChild(main);

    // productsData.forEach((data) => {
    //     main.innerHTML += `<article class="card__item">
    //         <figure class="card__image">
    //             <img src=${data.img} alt=${data.description}>
    //             <figcaption class="card__maker">${data.title}</figcaption>
    //         </figure>

    //         <h4 class="card__model">${data.description}</h4>

    //         <a href="products.html" class="card__link" target="_self">Select Item</a>
    //     </article>`
    // });

    main.innerHTML = productsData.map((data) => {
        return `
            <article class="card__item">
            <figure class="card__image">
                <img src=${data.img} alt=${data.description}>
                <figcaption class="card__maker">${data.title}</figcaption>
            </figure>

            <h4 class="card__model">${data.description}</h4>

            <a href="products.html" class="card__link" target="_self">Select Item</a>
        </article>`;
    }).join("");
}

const selectItem = () => {
    const links = document.querySelectorAll(".container a");

    links.forEach((link, index) => {
        const {id, img, title, description} = productsData[index];
        // const id = productsData[index].id;

        link.addEventListener("click", (e) => {
            e.preventDefault();           
            // console.log(id, img, title, description);

            // localStorage.setItem("item_ID", productsData[index].id);
            localStorage.setItem("item_ID", id);

            // window.location.href = `./products.html?id=${productsData[index].id}`;
            // window.location.href = `./products.html?id=${id}`;
            window.location = "./products.html";
        });
    });
}