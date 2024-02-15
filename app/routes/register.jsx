import React from 'react'
import { PrismaClient } from '@prisma/client'

import auth1StylesHref from '../styles/auth1.css'
import auth2StylesHref from '../styles/auth2.css'
import { redirect } from 'react-router-dom'

import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { Link } from '@remix-run/react';

export const links = () => {
    return [
        { rel: 'stylesheet', href: auth1StylesHref },
        { rel: 'stylesheet', href: auth2StylesHref }
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
            <Row className="align-items-center justify-content-center g-0 min-vh-100">
                <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                    {/* Card */}
                    <Card className="smooth-shadow-md">
                        {/* Card body */}
                        <Card.Body className="p-6">
                            <div className="mb-4">
                                <h1 className="mb-2 logo">Playground4U</h1>
                                <p className="mb-6">Please enter your user information.</p>
                            </div>
                            {/* Form */}
                            <Form>
                                {/* Username */}
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" placeholder="User Name" required="" />
                                </Form.Group>

                                {/* Email */}
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter address here" required="" />
                                </Form.Group>

                                {/* Phone */}
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" placeholder="Enter Phone here" required="" />
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="**************" required="" />
                                </Form.Group>

                                {/* Confirm Password */}
                                <Form.Group className="mb-3" controlId="confirm-password">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirm-password" placeholder="**************" required="" />
                                </Form.Group>

                                {/* Checkbox */}
                                <div className="mb-3">
                                    <Form.Check type="checkbox" id="check-api-checkbox">
                                        <Form.Check.Input type="checkbox" />
                                        <Form.Check.Label>
                                            I agree to the <Link to="/terms"> Terms of Service </Link> and <Link to="/privacy"> Privacy Policy.</Link>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>

                                <div>
                                    {/* Button */}
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">Create Free Account</Button>
                                    </div>
                                    <br />
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">Back</Button>
                                    </div>
                                    <div className="d-md-flex justify-content-between mt-4">
                                        <div className="mb-2 mb-md-0">
                                            <Link to="/login" className="fs-5">Already member? Login </Link>
                                        </div>
                                        <div>
                                            <Link to="/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
