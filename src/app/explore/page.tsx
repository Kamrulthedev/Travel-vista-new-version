"use client";

import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import { InView } from "@/components/core/InView";
import { TextEffect } from "@/components/core/TextEffect";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";

const ExplorePage = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="mt-10 font-serif">
      <section className="container mx-auto  px-5 h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row md:justify-between justify-evenly items-center">
        <aside className="flex flex-col gap-y-6">
          <div>
            <TextEffect
              per="char"
              preset="fade"
              className="md:text-8xl text-5xl leading-tight"
            >
              Discover
            </TextEffect>
            <TextEffect
              delay={0.5}
              per="char"
              preset="blur"
              className="md:text-8xl text-5xl leading-tight"
            >
              Hidden Gems
            </TextEffect>
          </div>
          <TextEffect
            delay={1}
            per="word"
            preset="fade"
            className="text-xl text-gray-700"
          >
            A place to read, write, and deepen your understanding.
          </TextEffect>
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewOptions={{ margin: "0px 0px -150px 0px" }}
          >
            <SignInFormModal explore={true} />
          </InView>
        </aside>
        <figure className="md:absolute md:right-0">
          <InView
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewOptions={{ margin: "0px 0px -350px 0px" }}
          >
            <Image
              src={"/images/undraw_connected_world_wuay.svg"}
              alt="banner image"
              width={750}
              height={800}
              className="p-7"
            />
          </InView>
        </figure>
      </section>
      <section>
        <footer className="bg-gray-100 text-black px-5 py-10 md:py-16">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
            <div>
              <h2 className="text-black font-bold text-xl mb-4">About Travel Vista</h2>
              <p className="text-gray-400 text-sm leading-6">
                Travel Vista is your gateway to discovering hidden gems and exploring uncharted destinations. Join us to read, write, and deepen your understanding of the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-black font-bold text-xl mb-4">Quick Links</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-black font-bold text-xl mb-4">Resources</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline hover:text-gray-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-600">
                    Travel Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-600">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-600">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social Media */}
            <div>
              <h2 className="text-black font-bold text-xl mb-4">Stay Connected</h2>
              <p className="text-sm text-gray-400 mb-6">
                Follow us on social media for updates and inspiration.
              </p>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-600 transition-transform transform hover:scale-110"
                >
                  <LuInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
                >
                  <BsTwitterX  />
                </a>
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Email:{" "}
                <a
                  href="mailto:support@travelvista.com"
                  className="hover:underline hover:text-gray-100"
                >
                  support@travelvista.com
                </a>
              </p>
              <p className="text-sm text-gray-400">Phone: +1 (800) 555-5555</p>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Travel Vista. All Rights Reserved.
            </p>
            <p className="mt-2">
              Built with ❤️ by{" "}
              <a href="#" className="hover:underline">
                Travel Vista Team
              </a>
            </p>
          </div>
        </footer>
      </section>
      
    </div>
  );
};

export default ExplorePage;
