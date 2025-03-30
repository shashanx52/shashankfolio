"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <main className="flex min-h-screen flex-col font-caveat">
        <Navbar />
        <section className="bg-base-100">
          <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="mb-4 text-4xl font-extrabold text-center">Contact Me</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <p className="mb-8 lg:mb-16 text-center text-neutral-400 text-lg">Want to connect with me? Discuss more</p>
              {submitted ? (
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Thank You!</h3>
                  <p className="text-green-600 dark:text-green-400">Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              ) : (
                <form 
                  action="https://formspree.io/f/mzzeajle"
                  method="POST"
                  className="space-y-8"
                  onSubmit={() => {
                    setLoading(true);
                    // Add small delay to show loading state
                    setTimeout(() => {
                      setSubmitted(true);
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  <div className="form-control">
                    <label htmlFor="name" className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="FirstName LastName" 
                      className="input input-bordered w-full" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="name@gmail.com" 
                      className="input input-bordered w-full" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="subject" className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="Let me know how I can help you" 
                      className="input input-bordered w-full" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="message" className="label">
                      <span className="label-text">Your Message</span>
                    </label>
                    <textarea 
                      name="message" 
                      rows={6} 
                      placeholder="Message for me..." 
                      className="textarea textarea-bordered w-full" 
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full sm:w-auto" 
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
        <Link href="/" className="link link-hover flex justify-center text-sm pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 1-.5-.5H4.707l3.146-3.146a.5.5 0 1 1-.708-.708l-4 4a.5.5 0 0 1 0 .708l4 4a.5.5 0 1 1-.708-.708L4.707 8.5h6.293a.5.5 0 0 1 .5-.5z" />
          </svg>
          Back to About Me
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
