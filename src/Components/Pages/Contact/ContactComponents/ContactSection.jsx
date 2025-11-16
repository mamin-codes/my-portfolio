import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_fq1eqza', 'template_wp21zyt', form.current, {
        publicKey: 'WRHu0LtPKUJ_TDxqa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsLoading(false);
          // Reset form
          e.target.reset();

          // Auto hide success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        },
      );
  };
  return (
    <section

      className="relative min-h-screen py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-pink-600/20 px-6 py-3 rounded-full border border-pink-400/30 mb-6">
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-ping"></span>
            <span className="text-pink-400 text-sm font-semibold">
              Say Hello
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let’s chat and make something amazing
            together.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div data-aos="fade-right" className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email",
                info: "mominulmg2233@gmail.com",
                delay: 0,
              },
              { icon: "📱", title: "Phone", info: "+880 1400 139 956", delay: 100 },
              {
                icon: "📍",
                title: "Location",
                info: "Dhaka, Bangladesh",
                delay: 200,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.title === "Email" ? `mailto:${item.info}` : "#"}
                data-aos="fade-up"
                data-aos-delay={item.delay}
                className="flex items-center space-x-4 p-5 bg-gradient-to-r from-gray-800/20 to-gray-900/20 backdrop-blur-md rounded-2xl border border-gray-700/40 hover:border-pink-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-pink-500/20"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="text-pink-400 font-semibold">{item.title}</p>
                  <p className="text-gray-300">{item.info}</p>
                </div>
              </a>
            ))}

            {/* Social Icons */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 group-hover:from-gray-900 group-hover:to-gray-700 transition-transform duration-300 group-hover:scale-110 shadow-lg hover:shadow-gray-500/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-6 h-6 text-gray-300 group-hover:text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.1.3-5.4-1.3-5.4-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.4 1.3 5.4 3.6zm-31.4-6.5c-.7 2 .7 4.3 3.3 4.9 2.6.7 5.4-.3 6.1-2.3.7-2-.7-4.3-3.3-5-2.6-.7-5.4.3-6.1 2.4zm44.2-1.7c-2.9.7-4.9 2.9-4.6 5.5.3 2.6 3 4.3 5.9 3.9 2.9-.7 4.9-2.9 4.6-5.5-.3-2.6-3-4.3-5.9-3.9zM244 8C108.9 8 0 117 0 252.1c0 108.2 70.3 200 168 232.4 12.3 2.3 16.8-5.3 16.8-11.8 0-5.8-.3-25-0.3-45.3-68.4 14.8-83-29.5-83-29.5-11.2-28.3-27.3-35.9-27.3-35.9-22.4-15.3 1.7-15 1.7-15 24.8 1.8 37.8 25.4 37.8 25.4 22 37.8 57.6 26.9 71.7 20.6 2.3-16 8.7-26.9 15.8-33.2-54.7-6.1-112.3-27.3-112.3-121.3 0-26.9 9.6-48.9 25.4-66.1-2.6-6.1-11-31.1 2.4-64.7 0 0 20.6-6.4 67.4 25.3 19.5-5.5 40.5-8.2 61.4-8.3 20.9.1 41.9 2.8 61.4 8.3 46.8-31.7 67.4-25.3 67.4-25.3 13.4 33.6 5 58.6 2.4 64.7 15.8 17.2 25.4 39.2 25.4 66.1 0 94.2-57.7 115.2-112.7 121.2 9 7.7 17 22.9 17 46.2 0 33.5-.3 60.5-.3 68.7 0 6.5 4.5 14.2 16.8 11.8C425.7 452.1 496 360.3 496 252.1 496 117 387 8 244 8z"
                      />
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 group-hover:from-blue-500 group-hover:to-cyan-400 transition-transform duration-300 group-hover:scale-110 shadow-lg hover:shadow-blue-400/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-6 h-6 text-gray-300 group-hover:text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.06 110 0 85.94 0 56.72 0 27.06 24.06 3 53.84 3s53.84 24.06 53.84 53.72C107.68 85.94 83.62 110 53.84 110zM447.9 448h-92.68V302.4c0-34.7-12.5-58.4-43.58-58.4-23.76 0-37.88 15.96-44.1 31.36-2.26 5.5-2.82 13.1-2.82 20.8V448h-92.78s1.22-241.5 0-266.6h92.78v37.8c12.34-19 34.3-46.1 83.46-46.1 60.86 0 106.24 39.8 106.24 125.4z"
                      />
                    </svg>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 group-hover:from-sky-500 group-hover:to-blue-400 transition-transform duration-300 group-hover:scale-110 shadow-lg hover:shadow-sky-400/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 text-gray-300 group-hover:text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M459.4 151.7c.3 4.5.3 9 .3 13.6 0 138.7-105.6 298.6-298.6 298.6A296.26 296.26 0 0 1 0 408.1a216.4 216.4 0 0 0 25.4 1.5 209.2 209.2 0 0 0 129.6-44.6 104.7 104.7 0 0 1-97.7-72.5c16.5 2.4 31.4 2.4 48.2-1.8a104.5 104.5 0 0 1-83.9-102.4v-1.3a105.4 105.4 0 0 0 47.3 13 104.6 104.6 0 0 1-32.4-139.7 297.2 297.2 0 0 0 215.8 109.5 117.7 117.7 0 0 1-2.6-23.9 104.6 104.6 0 0 1 180.7-71.5 209 209 0 0 0 66.4-25.4 104.6 104.6 0 0 1-46 57.8 209.9 209.9 0 0 0 60.2-16.2 225.5 225.5 0 0 1-52.3 54.2z"
                      />
                    </svg>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 group-hover:from-pink-500 group-hover:to-orange-400 transition-transform duration-300 group-hover:scale-110 shadow-lg hover:shadow-pink-400/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-6 h-6 text-gray-300 group-hover:text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 190.7c-41.9 0-75.8-33.9-75.8-75.8s33.9-75.8 75.8-75.8 75.8 33.9 75.8 75.8-33.9 75.8-75.8 75.8zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
           
          <div data-aos="fade-left" className="relative">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Send Me a Message
              </h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  className="cursor-pointer w-full px-4 py-3 rounded-xl bg-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                required/>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                required/>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="cursor-pointer w-full px-4 py-3 rounded-xl bg-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                required></textarea>
                <input
                  type="submit"
                  value="Send"
                  className="cursor-pointer w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg"

                  Send Message
                />
                {isSubmitted &&  (
                  <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-semibold">Message Sent Successfully!</p>
                        <p className="text-sm">Thanks for contacting me.</p>
                      </div>
                    </div>
                  </div>
                )}
               
              </form>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div data-aos="fade-up" className="text-center mt-16">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/30 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Let’s Build Something Unique
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I’m open for freelance and full-time projects. Let’s collaborate
              and bring your ideas to life with creative design and cutting-edge
              tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
