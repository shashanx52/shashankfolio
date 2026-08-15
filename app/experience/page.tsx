import React from 'react'
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Professional from './professional';
import Volunteer from './volunteer';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Shashank Jha — Product Analyst at Times Internet (The Economic Times), previously AI & Product Intern. Full professional and volunteering history.',
  alternates: { canonical: '/experience' },
};

export default function Page() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-10">
        <Navbar />
        <Professional />
        <Volunteer />
        <div className="flex justify-center border-t hairline py-10">
          <Link href="/" className="label link-underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
