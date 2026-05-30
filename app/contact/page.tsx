"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Reveal from "../components/Reveal";
import LocalTime from "../components/LocalTime";

const channels = [
  { label: "Email", value: "shashankjha.0052@gmail.com", href: "mailto:shashankjha.0052@gmail.com" },
  { label: "LinkedIn", value: "in/shashanx", href: "https://www.linkedin.com/in/shashanx/" },
  { label: "GitHub", value: "shashanx52", href: "https://github.com/shashanx52" },
  { label: "LeetCode", value: "u/shashanx", href: "https://leetcode.com/u/shashanx/" },
];

const fieldClass =
  "w-full border-b hairline bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-[hsl(var(--ink-soft))] focus:border-[hsl(var(--ink))]";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-10">
        <Navbar />

        <section className="border-t hairline py-16 sm:py-24">
          <Reveal>
            <p className="label mb-4">Get in touch — Available for roles</p>
            <h1 className="display text-[14vw] leading-[0.86] sm:text-[10vw] lg:text-[9rem]">
              Contact
            </h1>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 border-t hairline pt-12 md:grid-cols-12">
            {/* channels */}
            <div className="md:col-span-5">
              <Reveal>
                <p className="max-w-md text-lg leading-relaxed ink-soft">
                  Open to analytics roles, automation projects and hard data problems.
                  Email is fastest — or use the form.
                </p>
              </Reveal>
              <div className="mt-8">
                {channels.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.05}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-baseline justify-between gap-6 border-b hairline py-4"
                    >
                      <span className="label">{c.label}</span>
                      <span className="text-base font-medium link-underline">{c.value}</span>
                    </a>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <p className="label mt-8">Noida, IN&nbsp;·&nbsp;<LocalTime /></p>
              </Reveal>
            </div>

            {/* form */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="flex h-full flex-col justify-center border hairline p-12 text-center">
                  <h3 className="display text-4xl">Thank you.</h3>
                  <p className="mt-3 ink-soft">Your message has been sent — I&apos;ll reply soon.</p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mzzeajle"
                  method="POST"
                  className="space-y-8"
                  onSubmit={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setSubmitted(true);
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="label">Name</label>
                      <input id="name" type="text" name="name" placeholder="Jane Doe" className={fieldClass} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email</label>
                      <input id="email" type="email" name="email" placeholder="jane@company.com" className={fieldClass} required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="label">Subject</label>
                    <input id="subject" type="text" name="subject" placeholder="Role / project / question" className={fieldClass} required />
                  </div>
                  <div>
                    <label htmlFor="message" className="label">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell me what you have in mind…" className={`${fieldClass} resize-none`} required />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 border hairline px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))] disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Send Message"}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <div className="flex justify-center border-t hairline py-10">
          <Link href="/" className="label link-underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
