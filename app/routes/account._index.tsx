// Import React and Remix Packages
import React from 'react';
import { redirect } from '@remix-run/react';

// Import React Bootstrap
import { Col, Row, Container } from 'react-bootstrap';

import { AboutMe } from '../components/profile/AboutMe';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { RecentFromBlog } from '../components/profile/RecentFromBlog';

// Import Prisma Client
import { PrismaClient } from '@prisma/client';

export default function Account() {
  return (
    <>
      <Container fluid className="p-6">
        {/* Profile Header  */}
        <ProfileHeader />

        {/* content */}
        <div className="py-6">
          <Row>

            {/* About Me */}
            <AboutMe />

            {/* Recent From Blog */}
            <RecentFromBlog />
          </Row>
        </div>

      </Container>
    </>
  )
}
