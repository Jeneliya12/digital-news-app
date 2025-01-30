"use client";

import React, { useState } from "react";

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    validate: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, validate: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      setFormData({ ...formData, validate: "incomplete" });
      return;
    }

    try {
      setFormData({ ...formData, validate: "loading" });

      // Simulating form submission (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormData({ ...formData, validate: "success" });
      console.log("Form Submitted Successfully");
    } catch (error) {
      setFormData({ ...formData, validate: "error" });
      console.log("Submission Error:", error);
    }
  };

  return (
    <main id="main">
      <section className="contact-content">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              {/* Page Title */}
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-12 text-center mb-5">
                  <h1 className="page-title">Contact Us</h1>
                </div>
              </div>

              {/* Contact Details */}
              <div className="row text-center mb-5">
                <div className="col-md-4">
                  <i className="bi bi-geo-alt text-3xl"></i>
                  <h5 className="font-semibold mt-3">Address</h5>
                  <p>abc,123 st 123456, abc</p>
                </div>
                <div className="col-md-4">
                  <i className="bi bi-phone text-3xl"></i>
                  <h5 className="font-semibold mt-3">Phone</h5>
                  <p>+1 5589 55488 55</p>
                </div>
                <div className="col-md-4">
                  <i className="bi bi-envelope text-3xl"></i>
                  <h5 className="font-semibold mt-3">Email</h5>
                  <p>info@example.com</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white shadow-lg rounded-lg p-10 sm:p-8 md:p-10 lg:p-12 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your message"
                        cols={30}
                        rows={5}
                      ></textarea>
                    </div>

                    {/* Form Validation Messages */}
                    <div className="mb-3">
                      {formData.validate === "loading" && (
                        <div className="loading">Sending Message...</div>
                      )}
                      {formData.validate === "incomplete" && (
                        <div className="error-message">
                          Please fill in all fields.
                        </div>
                      )}
                      {formData.validate === "success" && (
                        <div className="sent-message">
                          Your message has been sent successfully!
                        </div>
                      )}
                      {formData.validate === "error" && (
                        <div className="error-message">Server Error</div>
                      )}
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
