import React, { ChangeEvent, FormEvent, useState } from "react";
import emailJS from "@emailjs/browser";

const ContactMe = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: contactInfo.name,
      from_email: contactInfo.email,
      to_name: "GPorras",
      message: contactInfo.message,
    };

    emailJS
      .send(
        import.meta.env.VITE_EJ_SERVICE_ID as string,
        import.meta.env.VITE_EJ_TEMPLATE_ID as string,
        templateParams,
        { publicKey: import.meta.env.VITE_EJ_PUBLIC_KEY_ID as string },
      )
      .then((response) => {
        console.log("Correo electrónico enviado correctamente:", response);
        // Restablecer los valores de contactInfo
        setContactInfo({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });

    console.log(contactInfo);
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Contact Me
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="md:mr-8 md:w-1/2">
            <p className="mb-4 text-lg">
              I will be more than happy to hear from you! If you have any
              questions, suggestions, or just want to say hello, don't hesitate
              to contact me through this form or send me an email.
            </p>
            <p className="text-lg">Email: gabripb2004@gmail.com</p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="name" className="mb-2 text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              />
              <label htmlFor="email" className="mb-2 text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              />
              <label htmlFor="message" className="mb-2 text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contactInfo.message}
                onChange={handleChange}
                rows={5}
                className="mb-4 rounded-md border border-gray-300 px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
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
