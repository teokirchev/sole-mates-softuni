import { createShoes } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js'

// const createTemplate = (onCreate) => html`
// <section id="createPage">
//     <form @submit=${onCreate} class="createForm">
//         <img src="./images/cat-create.jpg">
//         <div>
//             <h2>Create PetPal</h2>
//             <div class="name">
//                 <label for="name">Name:</label>
//                 <input name="name" id="name" type="text" placeholder="Max">
//             </div>
//             <div class="breed">
//                 <label for="breed">Breed:</label>
//                 <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
//             </div>
//             <div class="Age">
//                 <label for="age">Age:</label>
//                 <input name="age" id="age" type="text" placeholder="2 years">
//             </div>
//             <div class="weight">
//                 <label for="weight">Weight:</label>
//                 <input name="weight" id="weight" type="text" placeholder="5kg">
//             </div>
//             <div class="image">
//                 <label for="image">Image:</label>
//                 <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
//             </div>
//             <button class="btn" type="submit">Create Pet</button>
//         </div>
//     </form>
// </section>`;

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)))

    async function onCreate({ brand, model, imageUrl, release, designer, value }) {
        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!')
        }
        await createShoes({
            brand,
            model,
            imageUrl,
            release,
            designer,
            value

        });
        ctx.page.redirect('/catalog');
    }
}