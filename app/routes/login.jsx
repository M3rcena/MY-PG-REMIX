// Import React and Remix packages
import React, { useState } from "react";
import { redirect } from 'react-router-dom';
import { Link } from '@remix-run/react';
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';

// Import Prisma Client
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Import CSS
import auth1StylesHref from '../styles/auth1.css';
import auth2StylesHref from '../styles/auth2.css';

// Load the CSS
export const links = () => {
  return [
    /* { rel: 'stylesheet', href: authStylesHref } */
    { rel: 'stylesheet', href: auth1StylesHref },
    { rel: 'stylesheet', href: auth2StylesHref }
  ]
}

// Form Handler
export async function action({ request }) {
  const prisma = new PrismaClient();

  if (request.method === 'POST') {
    // Get the form data
    const formData = new URLSearchParams(await request.formData());
    const email = formData.get('email');
    const password = formData.get('password');

    // Check if the email and password are not empty
    if (email && password) {
      try {
        // Find the user by email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        // If the user does not exist, return an error
        if (!user) {
          return { error: 'Invalid email or password' };
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        
        // If the password is valid, redirect to the account page
        if (isValidPassword) {
          return redirect('/account');
        } else {
          return { error: 'Invalid email or password' };
        }
      } catch (error) {
        console.error('Error during login:', error);
        return { error: 'Failed to log in' };
      } finally {
        await prisma.$disconnect();
      }
    }
    // If the email or password are empty, return an error
    return { error: 'Missing required fields' };
  }

  return redirect('/');
};

export default function Login() {
  const [validated, setValidated] = useState(false);

  // Form Handler
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

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
              <Form noValidate validated={validated} onSubmit={handleSubmit} method="POST">
                {/* Email */}
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email here" required />
                  <Form.Control.Feedback type="invalid">Please input your email!</Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required />
                  <Form.Control.Feedback type="invalid">Please input your password!</Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>

                {/* Checkbox */}
                <Form.Group className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme" feedbackType="invalid">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit">Sign In</Button>
                  </div>
                  <br />
                  <div className="d-grid">
                    <Button variant="primary" type="submit">Back</Button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link to="/register" className="fs-5">Create An Account </Link>
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