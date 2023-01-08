import { editShoes, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

// const editTemplate = (pet, onEdit) => html`
// <section id="editPage">
//     <form @submit=${onEdit} class="editForm">
//         <img src="/images/editpage-dog.jpg">
//         <div>
//             <h2>Edit PetPal</h2>
//             <div class="name">
//                 <label for="name">Name:</label>
//                 <input name="name" id="name" type="text" .value=${pet.name}>
//             </div>
//             <div class="breed">
//                 <label for="breed">Breed:</label>
//                 <input name="breed" id="breed" type="text" .value=${pet.breed}>
//             </div>
//             <div class="Age">
//                 <label for="age">Age:</label>
//                 <input name="age" id="age" type="text" .value=${pet.age}>
//             </div>
//             <div class="weight">
//                 <label for="weight">Weight:</label>
//                 <input name="weight" id="weight" type="text" .value=${pet.weight}>
//             </div>
//             <div class="image">
//                 <label for="image">Image:</label>
//                 <input name="image" id="image" type="text" value="./image/dog.jpeg">
//             </div>
//             <button class="btn" type="submit">Edit Pet</button>
//         </div>
//     </form>
// </section>`;

const editTemplate = (shoes, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoes.brand}/>
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoes.model}/>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoes.imageUrl}/>
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoes.release}/>
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoes.designer}/>
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoes.value}/>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;




export async function showEdit(ctx) {
    const id = ctx.params.id;
    const shoes = await getById(id)

    ctx.render(editTemplate(shoes, createSubmitHandler(onEdit)))

    async function onEdit({ brand, model, imageUrl, release, designer, value }) {
        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!')
        }
        await editShoes(id, {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        });
        ctx.page.redirect('/catalog/' + id);
    }
}

