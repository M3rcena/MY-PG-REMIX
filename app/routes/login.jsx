import React from "react";
import { PrismaClient } from '@prisma/client'


import auth1StylesHref from '../styles/auth1.css';
import auth2StylesHref from '../styles/auth2.css';
import { redirect } from 'react-router-dom'

import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { Link } from '@remix-run/react';

export const links = () => {
  return [
    /* { rel: 'stylesheet', href: authStylesHref } */
    { rel: 'stylesheet', href: auth1StylesHref },
    { rel: 'stylesheet', href: auth2StylesHref }
  ]
}

export default function Login() {

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
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control type="email" name="username" placeholder="Enter address here" required="" />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required="" />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
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