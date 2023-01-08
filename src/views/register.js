import { register } from '../api/user.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


// const registerTemplate = (onRegister) => html`
// <section id="registerPage">
//             <form @submit=${onRegister} class="registerForm">
//                 <img src="./images/logo.png" alt="logo" />
//                 <h2>Register</h2>
//                 <div class="on-dark">
//                     <label for="email">Email:</label>
//                     <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
//                 </div>

//                 <div class="on-dark">
//                     <label for="password">Password:</label>
//                     <input id="password" name="password" type="password" placeholder="********" value="">
//                 </div>

//                 <div class="on-dark">
//                     <label for="repeatPassword">Repeat Password:</label>
//                     <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
//                 </div>

//                 <button class="btn" type="submit">Register</button>

//                 <p class="field">
//                     <span>If you have profile click <a href="#">here</a></span>
//                 </p>
//             </form>
//         </section>`;

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;


export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, repeatPassword }) {
        if (email == '' || password == '') {
            return alert('All fields are required');
        }
        const repass = document.getElementById('repeat-password').value;
        if (password != repass) {
            return alert('Password don\'t match');
        }
        await register(email, password);
        ctx.updateNav()
        ctx.page.redirect('/catalog')
    }
}
