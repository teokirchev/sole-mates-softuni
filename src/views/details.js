import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

// const detailsTemplate = (pet, hasUser, isOwner, onDelete) => html`
// <section id="detailsPage">
//     <div class="details">
//         <div class="animalPic">
//             <img src=${pet.image}>
//         </div>
//         <div>
//             <div class="animalInfo">
//                 <h1>${pet.name}</h1>
//                 <h3>${pet.breed}</h3>
//                 <h4>Age: ${pet.age}</h4>
//                 <h4>Weight: ${pet.weight}</h4>
//                 <h4 class="donation">Donation: 0$</h4>
//             </div>
//             ${hasUser ? html`
//             <div class="actionBtn">
//                 ${isOwner ? html`
//                 <a href="/edit/${pet._id}" class="edit">Edit</a>
//                 <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>` : html`
//                 <a href="#" class="donate">Donate</a>`}                
//             </div>` : nothing}            
//         </div>
//     </div>
// </section>`;

const detailsTemplate = (shoes, hasUser, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoes.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoes.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoes.release}</span></p>
            <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
            <p>Value: <span id="details-value">${shoes.value}</span></p>
        </div>

        ${hasUser ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing}
        </div>
    </div>
</section>`: nothing}`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const shoe = await getById(id)

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == shoe._ownerId;
    ctx.render(detailsTemplate(shoe, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this shoes?');
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }
}