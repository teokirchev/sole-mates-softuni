import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('nav');

// const navTemplate = (hasUser) => html`
//     <nav>
//         <section class="logo">
//             <img src="/images/logo.png" alt="logo">
//         </section>
//         <ul>
//             <!--Users and Guest-->
//             <li><a href="/">Home</a></li>
//             <li><a href="/catalog">Dashboard</a></li>
//             ${!hasUser 
//                 ? html`<li><a href="/login">Login</a></li>
//             <li><a href="/register">Register</a></li>` 
//             : html`<li><a href="/create">Create Postcard</a></li>
//             <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
//         </ul>
//     </nav>`;

const navTemplate = (hasUser) => html`
<nav>
    <div>
        <a href="/catalog">Dashboard</a>
        <a href="#">Search</a>
    </div>
    ${!hasUser 
        ? html`
        <!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>` 
        : html`
    // <!-- Logged-in users -->
    <div class="user">
        <a href="/create">Add Pair</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`}
</nav>`;

export function updateNav() {
    const user = getUserData();
    render(navTemplate(user), nav);

}

function onLogout() {
    logout();
    updateNav()
    page.redirect('/')
}