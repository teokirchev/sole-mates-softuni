import { getAll } from '../api/data.js';
import { html } from '../lib.js';

// const catalogTemplate = (pets) => html`
// <section id="dashboard">
//     <h2 class="dashboard-title">Services for every animal</h2>
//     <div class="animals-dashboard">
//         ${pets.length == 0 ? html`<div>
//             <p class="no-pets">No pets in dashboard</p>
//         </div>` : pets.map(petCardTemplate)}
//     </div>
// </section>`;

// const petCardTemplate = (pet) => html`
// <div class="animals-board">
//     <article class="service-img">
//         <img class="animal-image-cover" src=${pet.image}>
//     </article>
//     <h2 class="name">${pet.name}</h2>
//     <h3 class="breed">${pet.breed}</h3>
//     <div class="action">
//         <a class="btn" href="/catalog/${pet._id}">Details</a>
//     </div>
// </div>`;


const catalogTemplate = (shoes) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length == 0 ? html`
    <!-- Display an h2 if there are no posts -->
    <h2>There are no items added yet.</h2>`
        : shoes.map(shoesCardTemplate)}
 </section>`

    const shoesCardTemplate = (shoe) => html`
    <ul class="card-wrapper">
        {/* <!-- Display a li with information about every post (if any)--> */}

        <li class="card">
            <img src=${shoe.imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${shoe.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
            <a class="details-btn" href="/catalog/${shoe._id}">Details</a>
        </li>
    </ul>`;


export async function showCatalog(ctx) {
    const shoes = await getAll()
    ctx.render(catalogTemplate(shoes));
}