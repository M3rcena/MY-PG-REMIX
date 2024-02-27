// Import React and Remix Packages
import React from 'react';
import { redirect } from '@remix-run/react';

// Import Prisma Client
import { PrismaClient } from '@prisma/client';

// Import Session Storage
import { getSession, commitSession } from '~/session.server';

export async function loader(request) {
  // Get User Information
  const session = await getSession(request.headers.get('Cookie'));
  const userId = session?.get('userId');
  console.log(userId)

  // Redirect to Login Page if User is not Logged In
  if (!userId) {
    return redirect('/login');
  };

  // Get User Information
  let user = null;
  if (userId) {
    const prisma = new PrismaClient();
    user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
      }
    });
    await prisma.$disconnect();
  };

  if (user && !session.get("role")) {
    await commitSession(request, session.set("role", user.role));
  };

  if (user?.role === "guest") {
    return redirect("/");
  };

  return { data: "This is protected content accessible with a non-guest session.", user };
}

export default function Account() {
  return (
    <>
    <div className="home-container">
      Account Page here
    </div>
    </>
  )
}
