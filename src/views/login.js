import { login } from '../api/user.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


// const loginTemplate = (onLogin) => html`
// <section id="loginPage">
//     <form @submit=${onLogin} class="loginForm">
//         <img src="./images/logo.png" alt="logo" />
//         <h2>Login</h2>

//         <div>
//             <label for="email">Email:</label>
//             <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
//         </div>

//         <div>
//             <label for="password">Password:</label>
//             <input id="password" name="password" type="password" placeholder="********" value="">
//         </div>

//         <button class="btn" type="submit">Login</button>

//         <p class="field">
//             <span>If you don't have profile click <a href="/register">here</a></span>
//         </p>
//     </form>
// </section>`;

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        if (email == '' || password == '') {
            return alert('All fields are required')
        }
        await login(email, password);
        ctx.updateNav()
        ctx.page.redirect('/catalog')
    }
}
