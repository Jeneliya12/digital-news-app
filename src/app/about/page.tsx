"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="about-page">
        <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">About us</h1>
          </div>

          {/* Company History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative w-full h-80">
              <Image
                src="/images/company-history.jpg"
                alt="Company History"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-wide text-gray-500">
                About Us
              </h5>
              <h2 className="text-3xl font-semibold mb-4">Company History</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsum at
                atque rerum vitae.
              </p>
              <p className="text-gray-600 mt-4">
                Fugit eaque illum blanditiis, quo exercitationem maiores autem
                laudantium unde excepturi dolores quasi eos vero harum ipsa quam
                laborum illo.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative w-full h-80">
              <Image
                src="/images/mission-vision.jpg"
                alt="Mission & Vision"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-wide text-gray-500">
                Mission & Vision
              </h5>
              <h2 className="text-3xl font-semibold mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsum at
                atque rerum vitae.
              </p>
              <p className="text-gray-600 mt-4">
                Fugit eaque illum blanditiis, quo exercitationem maiores autem
                laudantium unde excepturi dolores quasi eos vero harum ipsa quam
                laborum illo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
