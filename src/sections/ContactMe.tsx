import React from "react";
("use client");

const ContactMe = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Contact Me
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="md:mr-8 md:w-1/2">
            <p className="mb-4 text-lg">
              ¡I will be more than happy to hear about you! If you have any
              questions, suggestion or simply want to say hello, don't doubt to
              contact me through the this form or send me an email.
            </p>
            <p className="text-lg">Email: gabripb2004@gmail.com</p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <form className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              />
              <label htmlFor="email" className="mb-2 text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              />
              <label htmlFor="message" className="mb-2 text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                onClick={async (e) => {
                  e.preventDefault();
                  await fetch("/api/emails/", { method: "POST" });
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
