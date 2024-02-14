import React from 'react'
import { PrismaClient } from '@prisma/client'

import image from '../assets/img/Auth/signup-image.jpg'

import authStylesHref from '../styles/auth.css'
import { redirect } from 'react-router-dom'

export const links = () => {
    return [
        { rel: 'stylesheet', href: authStylesHref }
    ]
}

export async function action({ request }) {
    const prisma = new PrismaClient();
    if (request.method === 'POST') {
        const formData = new URLSearchParams(await request.formData());
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('pass');
        const rePassword = formData.get('re_pass');
        const phone = formData.get('phone');

        if (name && email && password == rePassword && phone) {
            try {
                const auth = await prisma.user.create({
                    data: {
                        name: name.toString(),
                        email: email.toString(),
                        password: password.toString(),
                        phone: phone.toString(),
                    },
                });

                return redirect('/account');
            } catch (error) {
                // Handle errors during user creation (e.g., email already exists)
                console.error('Error creating user:', error);
                return { error: 'Failed to create user' }; // Or redirect to an error page with more details
            }
        }

        return { error: 'Missing required fields' }; // Handle incomplete form data
    }

    return redirect('/'); // Redirect to another page on non-POST requests
}

export default function Register() {

    return (
        <>
            <div>
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="register-form">
                                    <div className="form-group">
                                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone"><i className="zmdi zmdi-phone"></i></label>
                                        <input type="text" name="phone" id="phone" placeholder="Your Phone" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src={image} alt="sing up image" /></figure>
                                <a href="#" className="signup-image-link">I am already member</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
