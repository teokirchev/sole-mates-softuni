import { html } from '../lib.js';


// const homeTemplate = () => html`
// <section class="welcome-content">
//     <article class="welcome-content-text">
//         <h1>We Care</h1>
//         <h1 class="bold-welcome">Your Pets</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//     </article>
//     <article class="welcome-content-image">
//         <img src="./images/header-dog.png" alt="dog">
//     </article>
// </section>`;

const homeTemplate = () => html`
<section id="home">
    <h1>Welcome to Sole Mates</h1>
    <img src="./images/home.jpg" alt="home" />
    <h2>Browse through the shoe collectibles of our users</h2>
    <h3>Add or manage your items</h3>
</section>`;

export function showHome(ctx) {
    ctx.render(homeTemplate());
}